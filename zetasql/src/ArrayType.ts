import { Type } from './Type';
import { TypeKind } from './types/zetasql/TypeKind';
import { TypeProto } from './types/zetasql/TypeProto';

export class ArrayType extends Type {
  elementType: Type;

  constructor(elementType: Type) {
    super(TypeKind.TYPE_ARRAY);
    this.elementType = elementType;
  }

  override serialize(): TypeProto {
    const result = super.serialize();
    result.arrayType = {
      elementType: this.elementType.serialize(),
    };
    return result;
  }
}
