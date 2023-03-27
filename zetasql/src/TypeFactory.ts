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
}
