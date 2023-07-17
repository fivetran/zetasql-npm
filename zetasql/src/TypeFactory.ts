import { TypeKind } from './types/zetasql/TypeKind';

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

  static TYPE_KIND_NAMES = new Map<number, string>([
    [TypeKind.TYPE_UNKNOWN.valueOf(), 'UNKNOWN'],
    [TypeKind.TYPE_INT32.valueOf(), 'INT32'],
    [TypeKind.TYPE_INT64.valueOf(), 'INT64'],
    [TypeKind.TYPE_UINT32.valueOf(), 'UINT32'],
    [TypeKind.TYPE_UINT64.valueOf(), 'UINT64'],
    [TypeKind.TYPE_BOOL.valueOf(), 'BOOL'],
    [TypeKind.TYPE_FLOAT.valueOf(), 'FLOAT'],
    [TypeKind.TYPE_DOUBLE.valueOf(), 'DOUBLE'],
    [TypeKind.TYPE_STRING.valueOf(), 'STRING'],
    [TypeKind.TYPE_BYTES.valueOf(), 'BYTES'],
    [TypeKind.TYPE_DATE.valueOf(), 'DATE'],
    [11, 'TIMESTAMP_SECONDS'],
    [12, 'TIMESTAMP_MILLIS'],
    [13, 'TIMESTAMP_MICROS'],
    [14, ''], // Used to be TIMESTAMP_NANOS, removed.
    [TypeKind.TYPE_ENUM.valueOf(), 'ENUM'],
    [TypeKind.TYPE_ARRAY.valueOf(), 'ARRAY'],
    [TypeKind.TYPE_STRUCT.valueOf(), 'STRUCT'],
    [TypeKind.TYPE_PROTO.valueOf(), 'PROTO'],
    [TypeKind.TYPE_TIMESTAMP.valueOf(), 'TIMESTAMP'],
    [TypeKind.TYPE_TIME.valueOf(), 'TIME'],
    [TypeKind.TYPE_DATETIME.valueOf(), 'DATETIME'],
    [TypeKind.TYPE_GEOGRAPHY.valueOf(), 'GEOGRAPHY'],
    [TypeKind.TYPE_NUMERIC.valueOf(), 'NUMERIC'],
    [TypeKind.TYPE_BIGNUMERIC.valueOf(), 'BIGNUMERIC'],
    [TypeKind.TYPE_EXTENDED.valueOf(), 'EXTENDED'],
    [TypeKind.TYPE_JSON.valueOf(), 'JSON'],
    [TypeKind.TYPE_INTERVAL.valueOf(), 'INTERVAL'],
  ]);
}
