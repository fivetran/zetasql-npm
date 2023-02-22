import { SimpleType } from './SimpleType';
import { ProductMode } from './types/zetasql/ProductMode';
import { TypeKind } from './types/zetasql/TypeKind';

/**
 * A factory for {@link Type} objects.
 *
 * A {@code TypeFactory} can be obtained via {@link #uniqueNames()} or {@link #nonUniqueNames()}
 * static factory methods, depending if you want to guarantee uniqueness of descriptor full names
 * for non-simple types or not, respectively.
 */
export abstract class TypeFactory {
  static SIMPLE_TYPE_KIND_NAMES: Map<string, TypeKind> = new Map<string, TypeKind>([
    ['int32', TypeKind.TYPE_INT32],
    ['int64', TypeKind.TYPE_INT64], // external
    ['integer', TypeKind.TYPE_INT64], // external
    ['uint32', TypeKind.TYPE_UINT32],
    ['uint64', TypeKind.TYPE_UINT64],
    ['bool', TypeKind.TYPE_BOOL], // external
    ['boolean', TypeKind.TYPE_BOOL], // external
    ['float', TypeKind.TYPE_FLOAT],
    ['float32', TypeKind.TYPE_FLOAT],
    ['double', TypeKind.TYPE_DOUBLE],
    ['float', TypeKind.TYPE_DOUBLE], // external
    ['float64', TypeKind.TYPE_DOUBLE], // external
    ['string', TypeKind.TYPE_STRING], // external
    ['bytes', TypeKind.TYPE_BYTES], // external
    ['date', TypeKind.TYPE_DATE], // external
    ['timestamp', TypeKind.TYPE_TIMESTAMP], // external
    ['time', TypeKind.TYPE_TIME], // external
    ['datetime', TypeKind.TYPE_DATETIME], // external
    ['interval', TypeKind.TYPE_INTERVAL], // external
    ['geography', TypeKind.TYPE_GEOGRAPHY], // external
    ['numeric', TypeKind.TYPE_NUMERIC], // external
    ['bignumeric', TypeKind.TYPE_BIGNUMERIC], // external
    ['json', TypeKind.TYPE_JSON], // external
  ]);

  static EXTERNAL_MODE_SIMPLE_TYPE_KIND_NAMES = new Set([
    'int64',
    'bool',
    'boolean',
    'float64',
    'string',
    'bytes',
    'date',
    'timestamp',
    'time',
    'datetime',
    'interval',
    'geography',
    'numeric',
    'bignumeric',
    'json',
    'tokenlist',
  ]);

  static SIMPLE_TYPE_KINDS = new Set<TypeKind>(TypeFactory.SIMPLE_TYPE_KIND_NAMES.values());

  static SIMPLE_TYPES = new Map<TypeKind, SimpleType>(
    [...TypeFactory.SIMPLE_TYPE_KINDS].map(type => [type, new SimpleType(type)]),
  );

  /**
   * Returns whether the given type kind is a simple type.
   *
   * <p>Simple types are those that can be represented with just a TypeKind, with no parameters.
   */
  static isSimpleType(kind: TypeKind): boolean {
    return TypeFactory.SIMPLE_TYPE_KINDS.has(kind);
  }

  /**
   * Returns whether {@code typeName} identifies a simple type.
   *
   * <p>Simple types are those that can be represented with just a TypeKind, with no parameters.
   */
  static isSimpleTypeName(typeName: string, prodMode: ProductMode): boolean {
    if (prodMode === ProductMode.PRODUCT_EXTERNAL) {
      return TypeFactory.EXTERNAL_MODE_SIMPLE_TYPE_KIND_NAMES.has(typeName.toLowerCase());
    }
    return TypeFactory.SIMPLE_TYPE_KIND_NAMES.has(typeName.toLowerCase());
  }

  /**
   * Returns a TypeFactory which does *not* enforce uniquely named types.
   *
   * <p>The returned TypeFactory allows the creation of {@link EnumType EnumTypes} and {@link
   * ProtoType ProtoTypes} with different descriptors, even if they share the same full name.
   */
  static nonUniqueNames(): TypeFactory {
    return NonUniqueNamesTypeFactory.getInstance();
  }

  /** Returns a SimpleType of given {@code kind}. */
  static createSimpleType(kind: TypeKind): SimpleType | undefined {
    return TypeFactory.SIMPLE_TYPES.get(kind);
  }
}

abstract class AbstractTypeFactory extends TypeFactory {}

class NonUniqueNamesTypeFactory extends AbstractTypeFactory {
  static INSTANCE = new NonUniqueNamesTypeFactory();

  static getInstance(): NonUniqueNamesTypeFactory {
    return NonUniqueNamesTypeFactory.INSTANCE;
  }
}
