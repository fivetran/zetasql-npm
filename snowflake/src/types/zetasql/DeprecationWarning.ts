// Original file: src/zetasql-snowflake/protos/zetasql/public/deprecation_warning.proto


// Original file: src/zetasql-snowflake/protos/zetasql/public/deprecation_warning.proto

export const _zetasql_DeprecationWarning_Kind = {
  __Kind__switch_must_have_a_default__: -1,
  UNKNOWN: 0,
  DEPRECATED_FUNCTION: 1,
  DEPRECATED_FUNCTION_SIGNATURE: 2,
  PROTO3_FIELD_PRESENCE: 3,
} as const;

export type _zetasql_DeprecationWarning_Kind =
  | '__Kind__switch_must_have_a_default__'
  | -1
  | 'UNKNOWN'
  | 0
  | 'DEPRECATED_FUNCTION'
  | 1
  | 'DEPRECATED_FUNCTION_SIGNATURE'
  | 2
  | 'PROTO3_FIELD_PRESENCE'
  | 3

export type _zetasql_DeprecationWarning_Kind__Output = typeof _zetasql_DeprecationWarning_Kind[keyof typeof _zetasql_DeprecationWarning_Kind]

export interface DeprecationWarning {
  'kind'?: (_zetasql_DeprecationWarning_Kind);
}

export interface DeprecationWarning__Output {
  'kind': (_zetasql_DeprecationWarning_Kind__Output);
}
