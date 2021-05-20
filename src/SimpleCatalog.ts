import { Client } from './Client';
import { SimpleTable } from './SimpleTable';
import { Type } from './Type';
import { TypeFactory } from './TypeFactory';
import { GetBuiltinFunctionsResponse } from './types/zetasql/local_service/GetBuiltinFunctionsResponse';
import { RegisterCatalogRequest } from './types/zetasql/local_service/RegisterCatalogRequest';
import { SimpleCatalogProto } from './types/zetasql/SimpleCatalogProto';
import { ZetaSQLBuiltinFunctionOptionsProto } from './types/zetasql/ZetaSQLBuiltinFunctionOptionsProto';
import { ZetaSQLBuiltinFunctionOptions } from './ZetaSQLBuiltinFunctionOptions';

export class SimpleCatalog {
  name: string;
  typeFactory: TypeFactory;

  // All String keys are stored in lower case.
  tables = new Map<string, SimpleTable>();
  types = new Map<string, Type>();
  tablesById = new Map<Long, SimpleTable>();
  registeredId: Long;
  registered = false;

  builtinFunctionOptions: ZetaSQLBuiltinFunctionOptionsProto;

  constructor(name: string, typeFactory?: TypeFactory) {
    this.name = name;
    this.typeFactory = typeFactory ?? TypeFactory.nonUniqueNames();
  }

  /**
   * Add simple table into this catalog. Table names are case insensitive.
   */
  addSimpleTable(table: SimpleTable): void {
    this.checkAlreadyRegistered();
    if (this.tables.has(table.name.toLowerCase())) {
      throw new Error(`duplicate key: ${table.name}`);
    }
    this.tables.set(table.name.toLowerCase(), table);
    this.tablesById.set(table.tableId, table);
  }

  /**
   * Register this catalog to local server, so that it can be reused without passing through RPC
   * every time.
   */
  async register() {
    this.checkAlreadyRegistered();
    const request: RegisterCatalogRequest = {
      simpleCatalog: this.serialize(),
    };

    try {
      const response = await Client.INSTANCE.registerCatalog(request);
      this.registeredId = response.registeredId;
    } catch (e) {
      throw new Error(e);
    }

    this.registered = true;
  }

  /**
   * Add ZetaSQL built-in function definitions into this catalog. Function names are case
   * insensitive.
   *
   * @param options used to select which functions get loaded.
   */
  async addZetaSQLFunctions(options: ZetaSQLBuiltinFunctionOptions) {
    if (options == null) {
      throw new Error('options cannot be null');
    }
    if (this.builtinFunctionOptions != null) {
      throw new Error('builtinFunctionOptions should be null');
    }

    this.builtinFunctionOptions = options.serialize();

    try {
      const response = await Client.INSTANCE.getBuiltinFunctions(this.builtinFunctionOptions);
      this.processGetBuiltinFunctionsResponse(response);
    } catch (e) {
      throw new Error(e);
    }
  }

  processGetBuiltinFunctionsResponse(response: GetBuiltinFunctionsResponse) {
    //TODO
  }

  serialize(): SimpleCatalogProto {
    const simpleCatalog: SimpleCatalogProto = {
      name: this.name,
    };

    // The built-in function definations are not serialized. Instead, the BuiltinFunctionOptions
    // which specify which functions to include and exclude will be serialized, and the C++
    // deserialization will recreate the same built-in function signatures according to this.
    if (this.builtinFunctionOptions != null) {
      simpleCatalog.builtinFunctionOptions = this.builtinFunctionOptions;
    }

    if (this.tables.size > 0) {
      simpleCatalog.table = [];
      for (const [tableName, table] of this.tables) {
        const tableProto = table.serialize();
        if (tableName !== table.name) {
          tableProto.nameInCatalog = tableName;
        }
        simpleCatalog.table.push(tableProto);
      }
    }

    for (const [typeName, type] of this.types) {
      const namedTypeProto = {
        name: typeName,
        type: type.serialize(),
      };
      simpleCatalog.namedType.push(namedTypeProto);
    }

    return simpleCatalog;
  }

  checkAlreadyRegistered() {
    if (this.registered) {
      throw new Error('Catalog is already registered');
    }
  }
}
