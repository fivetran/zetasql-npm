import { Column } from './Column';
import { Type } from './Type';
import { SimpleColumnProto } from './types/zetasql/SimpleColumnProto';

export class SimpleColumn implements Column {
  name: string;
  fullName: string;
  type: Type;
  pseudoColumn: boolean;
  writableColumn: boolean;

  /**
   * @param tableName name of the table this column belongs to.
   * @param name null values are converted to emptyString (meaning anonymous column).
   */
  constructor(
    tableName: string,
    name: string | null,
    type: Type,
    pseudoColumn: boolean = false,
    writableColumn: boolean = false,
  ) {
    this.name = name == null ? '' : name;
    this.fullName = `${tableName}.${name}`;
    this.type = type;
    this.pseudoColumn = pseudoColumn;
    this.writableColumn = writableColumn;
  }

  serialize(): SimpleColumnProto {
    return {
      name: this.getName(),
      type: this.type.serialize(),
      isPseudoColumn: this.isPseudoColumn(),
      isWritableColumn: this.isWritableColumn(),
    };
  }

  getName(): string {
    return this.name;
  }

  getFullName(): string {
    return this.fullName;
  }

  getType(): Type {
    return this.type;
  }

  isPseudoColumn(): boolean {
    return this.pseudoColumn;
  }

  isWritableColumn(): boolean {
    return this.writableColumn;
  }
}
