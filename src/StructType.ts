import { Type } from './Type';
import { ProductMode } from './types/zetasql/ProductMode';
import { StructFieldProto } from './types/zetasql/StructFieldProto';
import { TypeKind } from './types/zetasql/TypeKind';
import { TypeProto } from './types/zetasql/TypeProto';

export class StructType extends Type {
  fields: StructField[] = [];

  constructor(fields: StructField[]) {
    super(TypeKind.TYPE_STRUCT);
    this.fields.push(...fields);
  }

  serialize(): TypeProto {
    const result = super.serialize();
    result.structType = {
      field: this.fields.map<StructFieldProto>(f => ({
        fieldName: f.name,
        fieldType: f.type.serialize(),
      })),
    };
    return result;
  }
}

export class StructField {
  constructor(public name: string, public type: Type) {}
}
