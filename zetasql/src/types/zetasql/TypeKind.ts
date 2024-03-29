// Original file: src/zetasql/protos/zetasql/public/type.proto

export const TypeKind = {
  __TypeKind__switch_must_have_a_default__: -1,
  TYPE_UNKNOWN: 0,
  TYPE_INT32: 1,
  TYPE_INT64: 2,
  TYPE_UINT32: 3,
  TYPE_UINT64: 4,
  TYPE_BOOL: 5,
  TYPE_FLOAT: 6,
  TYPE_DOUBLE: 7,
  TYPE_STRING: 8,
  TYPE_BYTES: 9,
  TYPE_DATE: 10,
  TYPE_TIMESTAMP: 19,
  TYPE_ENUM: 15,
  TYPE_ARRAY: 16,
  TYPE_STRUCT: 17,
  TYPE_PROTO: 18,
  TYPE_TIME: 20,
  TYPE_DATETIME: 21,
  TYPE_GEOGRAPHY: 22,
  TYPE_NUMERIC: 23,
  TYPE_BIGNUMERIC: 24,
  TYPE_EXTENDED: 25,
  TYPE_JSON: 26,
  TYPE_INTERVAL: 27,
  TYPE_RANGE: 29,
} as const;

export type TypeKind =
  | '__TypeKind__switch_must_have_a_default__'
  | -1
  | 'TYPE_UNKNOWN'
  | 0
  | 'TYPE_INT32'
  | 1
  | 'TYPE_INT64'
  | 2
  | 'TYPE_UINT32'
  | 3
  | 'TYPE_UINT64'
  | 4
  | 'TYPE_BOOL'
  | 5
  | 'TYPE_FLOAT'
  | 6
  | 'TYPE_DOUBLE'
  | 7
  | 'TYPE_STRING'
  | 8
  | 'TYPE_BYTES'
  | 9
  | 'TYPE_DATE'
  | 10
  | 'TYPE_TIMESTAMP'
  | 19
  | 'TYPE_ENUM'
  | 15
  | 'TYPE_ARRAY'
  | 16
  | 'TYPE_STRUCT'
  | 17
  | 'TYPE_PROTO'
  | 18
  | 'TYPE_TIME'
  | 20
  | 'TYPE_DATETIME'
  | 21
  | 'TYPE_GEOGRAPHY'
  | 22
  | 'TYPE_NUMERIC'
  | 23
  | 'TYPE_BIGNUMERIC'
  | 24
  | 'TYPE_EXTENDED'
  | 25
  | 'TYPE_JSON'
  | 26
  | 'TYPE_INTERVAL'
  | 27
  | 'TYPE_RANGE'
  | 29

export type TypeKind__Output = typeof TypeKind[keyof typeof TypeKind]
