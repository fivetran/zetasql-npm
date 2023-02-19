import { Type } from './Type';
import { TypeFactory } from './TypeFactory';
import { TypeKind } from './types/zetasql/TypeKind';

export class SimpleType extends Type {
  constructor(kind: TypeKind) {
    super(kind);

    if (!TypeFactory.isSimpleType(kind)) {
      throw new Error(`Simple type expected, but got ${kind}`);
    }
  }
}
