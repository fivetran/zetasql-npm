import { Client } from './Client';
import { SimpleTable } from './SimpleTable';
import { Type } from './Type';
import { TypeFactory } from './TypeFactory';
import { RegisterCatalogRequest } from './types/zetasql/local_service/RegisterCatalogRequest';
import { SimpleCatalogProto } from './types/zetasql/SimpleCatalogProto';

export class SimpleCatalog {
  name: string;
  typeFactory: TypeFactory;

  // All String keys are stored in lower case.
  tables = new Map<string, SimpleTable>();
  types = new Map<string, Type>();
  tablesById = new Map<Long, SimpleTable>();
  registeredId: Long;
  registered = false;

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
  register() {
    this.checkAlreadyRegistered();
    const request: RegisterCatalogRequest = {
      simpleCatalog: this.serialize(),
    };

    Client.api.registerCatalog(request, (err, response) => {
      if (err) {
        // TODO: handle error
      } else {
        this.registeredId = response.registeredId;
        this.registered = true;
      }
    });
  }

  serialize(): SimpleCatalogProto {
    const simpleCatalog: SimpleCatalogProto = {
      name: this.name,
    };

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
        type: type.serizlize(),
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
