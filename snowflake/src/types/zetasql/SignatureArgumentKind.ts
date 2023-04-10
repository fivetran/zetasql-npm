// Original file: src/zetasql-snowflake/protos/zetasql/public/function.proto

export const SignatureArgumentKind = {
  ARG_TYPE_FIXED: 0,
  ARG_TYPE_ANY_1: 1,
  ARG_TYPE_ANY_2: 2,
  ARG_ARRAY_TYPE_ANY_1: 3,
  ARG_ARRAY_TYPE_ANY_2: 4,
  ARG_PROTO_MAP_ANY: 14,
  ARG_PROTO_MAP_KEY_ANY: 15,
  ARG_PROTO_MAP_VALUE_ANY: 16,
  ARG_PROTO_ANY: 5,
  ARG_STRUCT_ANY: 6,
  ARG_ENUM_ANY: 7,
  ARG_TYPE_ARBITRARY: 8,
  ARG_TYPE_RELATION: 9,
  ARG_TYPE_VOID: 10,
  ARG_TYPE_MODEL: 11,
  ARG_TYPE_CONNECTION: 12,
  ARG_TYPE_DESCRIPTOR: 13,
  ARG_TYPE_LAMBDA: 17,
  ARG_RANGE_TYPE_ANY: 18,
  __SignatureArgumentKind__switch_must_have_a_default__: -1,
} as const;

export type SignatureArgumentKind =
  | 'ARG_TYPE_FIXED'
  | 0
  | 'ARG_TYPE_ANY_1'
  | 1
  | 'ARG_TYPE_ANY_2'
  | 2
  | 'ARG_ARRAY_TYPE_ANY_1'
  | 3
  | 'ARG_ARRAY_TYPE_ANY_2'
  | 4
  | 'ARG_PROTO_MAP_ANY'
  | 14
  | 'ARG_PROTO_MAP_KEY_ANY'
  | 15
  | 'ARG_PROTO_MAP_VALUE_ANY'
  | 16
  | 'ARG_PROTO_ANY'
  | 5
  | 'ARG_STRUCT_ANY'
  | 6
  | 'ARG_ENUM_ANY'
  | 7
  | 'ARG_TYPE_ARBITRARY'
  | 8
  | 'ARG_TYPE_RELATION'
  | 9
  | 'ARG_TYPE_VOID'
  | 10
  | 'ARG_TYPE_MODEL'
  | 11
  | 'ARG_TYPE_CONNECTION'
  | 12
  | 'ARG_TYPE_DESCRIPTOR'
  | 13
  | 'ARG_TYPE_LAMBDA'
  | 17
  | 'ARG_RANGE_TYPE_ANY'
  | 18
  | '__SignatureArgumentKind__switch_must_have_a_default__'
  | -1

export type SignatureArgumentKind__Output = typeof SignatureArgumentKind[keyof typeof SignatureArgumentKind]
