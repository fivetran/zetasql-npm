import * as Long from 'long';
import { SimpleTable } from './SimpleTable';
import { Type } from './Type';
import { TypeFactory } from './TypeFactory';
import { RegisterCatalogRequest } from './types/zetasql/local_service/RegisterCatalogRequest';
import { UnregisterRequest } from './types/zetasql/local_service/UnregisterRequest';
import { SimpleCatalogProto } from './types/zetasql/SimpleCatalogProto';
import { ZetaSQLBuiltinFunctionOptionsProto } from './types/zetasql/ZetaSQLBuiltinFunctionOptionsProto';
import { ZetaSQLBuiltinFunctionOptions } from './ZetaSQLBuiltinFunctionOptions';
import { ZetaSQLClient } from './ZetaSQLClient';

export class SimpleCatalog {
  name: string;
  typeFactory: TypeFactory;

  // All String keys are stored in lower case.
  tables = new Map<string, SimpleTable>();
  types = new Map<string, Type>();
  catalogs = new Map<string, SimpleCatalog>();
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
  addSimpleTable(name: string, table: SimpleTable): void {
    this.checkAlreadyRegistered();
    if (this.tables.has(name.toLowerCase())) {
      throw new Error(`duplicate key: ${table.name}`);
    }
    this.tables.set(name.toLowerCase(), table);
    this.tablesById.set(table.tableId, table);
  }

  /**
   * Add sub catalog into this catalog. Catalog names are case insensitive.
   */
  addSimpleCatalog(catalog: SimpleCatalog): void {
    this.checkAlreadyRegistered();
    if (this.catalogs.has(catalog.name.toLowerCase())) {
      throw new Error(`duplicate key: ${catalog.name}`);
    }
    this.catalogs.set(catalog.name.toLowerCase(), catalog);
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
      const response = await ZetaSQLClient.INSTANCE.registerCatalog(request);
      this.registeredId = response.registeredId;
    } catch (e) {
      throw new Error(e);
    }

    this.registered = true;
  }

  async unregister() {
    if (!this.registered) {
      throw new Error('Catalog should be registered first');
    }

    const request: UnregisterRequest = {
      registeredId: this.registeredId,
    };

    try {
      await ZetaSQLClient.INSTANCE.unRegisterCatalog(request);
    } catch (e) {
      console.log('Failed to unregister catalog: ' + e.getMessage());
    } finally {
      this.registered = false;
      this.registeredId = new Long(-1);
    }
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
      const response = await ZetaSQLClient.INSTANCE.getBuiltinFunctions(
        this.builtinFunctionOptions,
      );
    } catch (e) {
      throw new Error(e);
    }
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

    if (this.catalogs.size > 0) {
      simpleCatalog.catalog = [];
      for (const [name, catalog] of this.catalogs) {
        simpleCatalog.catalog.push(catalog.serialize());
      }
    }

    return simpleCatalog;
  }

  checkAlreadyRegistered() {
    if (this.registered) {
      throw new Error('Catalog is already registered');
    }
  }
}
