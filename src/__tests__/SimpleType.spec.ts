import { TypeFactory } from '../TypeFactory';
import { ProductMode } from '../types/zetasql/ProductMode';
import { TypeKind } from '../types/zetasql/TypeKind';

describe('SimpleType', () => {
  it('testTypeName', () => {
    const type1 = TypeFactory.createSimpleType(TypeKind.TYPE_INT32);
    const type2 = TypeFactory.createSimpleType(TypeKind.TYPE_INT64);
    const type3 = TypeFactory.createSimpleType(TypeKind.TYPE_UINT32);
    const type4 = TypeFactory.createSimpleType(TypeKind.TYPE_UINT64);
    const type5 = TypeFactory.createSimpleType(TypeKind.TYPE_BOOL);
    const type6 = TypeFactory.createSimpleType(TypeKind.TYPE_FLOAT);
    const type7 = TypeFactory.createSimpleType(TypeKind.TYPE_DOUBLE);
    const type8 = TypeFactory.createSimpleType(TypeKind.TYPE_STRING);
    const type9 = TypeFactory.createSimpleType(TypeKind.TYPE_BYTES);
    const type10 = TypeFactory.createSimpleType(TypeKind.TYPE_DATE);
    const type11 = TypeFactory.createSimpleType(TypeKind.TYPE_TIMESTAMP);

    expect(type1.getTypeName()).toBe('INT32');
    expect(type2.getTypeName()).toBe('INT64');
    expect(type3.getTypeName()).toBe('UINT32');
    expect(type4.getTypeName()).toBe('UINT64');
    expect(type5.getTypeName()).toBe('BOOL');
    expect(type6.getTypeName()).toBe('FLOAT');
    expect(type7.getTypeName()).toBe('DOUBLE');
    expect(type8.getTypeName()).toBe('STRING');
    expect(type9.getTypeName()).toBe('BYTES');
    expect(type10.getTypeName()).toBe('DATE');
    expect(type11.getTypeName()).toBe('TIMESTAMP');

    expect(type1.typeName(ProductMode.PRODUCT_INTERNAL)).toBe('INT32');
    expect(type2.typeName(ProductMode.PRODUCT_INTERNAL)).toBe('INT64');
    expect(type3.typeName(ProductMode.PRODUCT_INTERNAL)).toBe('UINT32');
    expect(type4.typeName(ProductMode.PRODUCT_INTERNAL)).toBe('UINT64');
    expect(type5.typeName(ProductMode.PRODUCT_INTERNAL)).toBe('BOOL');
    expect(type6.typeName(ProductMode.PRODUCT_INTERNAL)).toBe('FLOAT');
    expect(type7.typeName(ProductMode.PRODUCT_INTERNAL)).toBe('DOUBLE');
    expect(type8.typeName(ProductMode.PRODUCT_INTERNAL)).toBe('STRING');
    expect(type9.typeName(ProductMode.PRODUCT_INTERNAL)).toBe('BYTES');
    expect(type10.typeName(ProductMode.PRODUCT_INTERNAL)).toBe('DATE');
    expect(type11.typeName(ProductMode.PRODUCT_INTERNAL)).toBe('TIMESTAMP');

    expect(type1.typeName(ProductMode.PRODUCT_EXTERNAL)).toBe('INT32');
    expect(type2.typeName(ProductMode.PRODUCT_EXTERNAL)).toBe('INT64');
    expect(type3.typeName(ProductMode.PRODUCT_EXTERNAL)).toBe('UINT32');
    expect(type4.typeName(ProductMode.PRODUCT_EXTERNAL)).toBe('UINT64');
    expect(type5.typeName(ProductMode.PRODUCT_EXTERNAL)).toBe('BOOL');
    expect(type6.typeName(ProductMode.PRODUCT_EXTERNAL)).toBe('FLOAT');
    expect(type7.typeName(ProductMode.PRODUCT_EXTERNAL)).toBe('FLOAT64');
    expect(type8.typeName(ProductMode.PRODUCT_EXTERNAL)).toBe('STRING');
    expect(type9.typeName(ProductMode.PRODUCT_EXTERNAL)).toBe('BYTES');
    expect(type10.typeName(ProductMode.PRODUCT_EXTERNAL)).toBe('DATE');
    expect(type11.typeName(ProductMode.PRODUCT_EXTERNAL)).toBe('TIMESTAMP');
  });
});
