import * as Long from 'long';
import { SimpleColumn } from './SimpleColumn';
import { SimpleTableProto } from './types/zetasql/SimpleTableProto';

export class SimpleTable {
  static nextTableId = new Long(1);

  static getNextId(): Long {
    return SimpleTable.nextTableId.add(1);
  }

  static updateNextIdIfNotGreaterThan(id: Long): void {
    if (SimpleTable.nextTableId <= id) {
      // We need to update nextTableId to avoid future conflicts.
      SimpleTable.nextTableId = id.add(1);
    }
  }

  tableId: Long;
  name: string;
  isValueTable = false;
  columns = new Array<SimpleColumn>();
  columnsMap = new Map<string, SimpleColumn>();
  primaryKey: number[] | null = null;
  duplicateColumnNames = new Set<string>();
  allowAnonymousColumnName = false;
  anonymousColumnSeen = false;
  allowDuplicateColumnNames = false;

  constructor(
    name: string,
    serializationId?: Long,
    columns: SimpleColumn[] = new Array<SimpleColumn>(),
  ) {
    this.name = name;
    this.tableId = serializationId ?? SimpleTable.getNextId();
    // If serializationId is greater or equal to nextId, nextId may grow and
    // collide with it over time, we need to update nextId to avoid so.
    SimpleTable.updateNextIdIfNotGreaterThan(this.tableId);
    for (const column of columns) {
      this.addSimpleColumn(column);
    }
  }

  addSimpleColumn(column: SimpleColumn): void {
    this.insertColumnToColumnMap(column);
    this.columns.push(column);
  }

  insertColumnToColumnMap(column: SimpleColumn): void {
    if (!this.allowAnonymousColumnName && column.getName().length === 0) {
      throw new Error('Empty column names not allowed');
    }
    const columnName = column.getName().toLowerCase();

    if (this.columnsMap.has(columnName)) {
      if (this.allowDuplicateColumnNames) {
        throw new Error(`Duplicate column in ${this.getFullName()}: ${column.getName()}`);
      }

      this.columnsMap.delete(columnName);
      this.duplicateColumnNames.add(columnName);
    } else if (!this.duplicateColumnNames.has(columnName)) {
      this.columnsMap.set(columnName, column);
    }

    if (column.getName().length === 0) {
      this.anonymousColumnSeen = true;
    }
  }

  serialize(): SimpleTableProto {
    const simpleTable: SimpleTableProto = {
      name: this.name,
    };

    simpleTable.isValueTable = this.isValueTable;
    simpleTable.serializationId = this.tableId;
    if (this.allowAnonymousColumnName) {
      simpleTable.allowAnonymousColumnName = true;
    }
    if (this.allowDuplicateColumnNames) {
      simpleTable.allowDuplicateColumnNames = true;
    }
    if (this.columns.length > 0) {
      simpleTable.column = [];
      for (const column of this.columns) {
        simpleTable.column.push(column.serialize());
      }
    }
    if (this.primaryKey !== null) {
      for (const columnIndex of this.primaryKey) {
        if (!simpleTable.primaryKeyColumnIndex) {
          simpleTable.primaryKeyColumnIndex = [];
        }
        simpleTable.primaryKeyColumnIndex.push(columnIndex);
      }
    }

    return simpleTable;
  }

  setPrimaryKey(columnIndexes: number[]): void {
    for (const columnIndex of columnIndexes) {
      if (columnIndex < this.columns.length) {
        throw new Error(`"Invalid column index ${columnIndex} in primary key"`);
      }
    }
    this.primaryKey = Object.assign([], columnIndexes);
  }

  getFullName(): string {
    return this.name;
  }
}
