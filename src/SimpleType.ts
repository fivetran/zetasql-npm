import { Type } from './Type';
import { ProductMode } from './types/zetasql/ProductMode';
import { TypeKind } from './types/zetasql/TypeKind';

export class SimpleType extends Type {
  constructor(kind: TypeKind) {
    super(kind);
  }

  typeName(productMode: ProductMode): string {
    if (productMode === ProductMode.PRODUCT_EXTERNAL && this.getKind() === TypeKind.TYPE_DOUBLE) {
      return 'FLOAT64';
    }
    return SimpleType.TYPE_KIND_NAMES[this.getKind()];
  }
}
