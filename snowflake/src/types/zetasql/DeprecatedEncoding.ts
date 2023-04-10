// Original file: src/zetasql-snowflake/protos/zetasql/public/proto/type_annotation.proto


// Original file: src/zetasql-snowflake/protos/zetasql/public/proto/type_annotation.proto

export const _zetasql_DeprecatedEncoding_Encoding = {
  DEFAULT_ENCODING: 0,
  DATE_PACKED32: 1,
  DATE_DECIMAL: 1,
  __FieldFormat_Encoding__switch_must_have_a_default__: -1,
} as const;

export type _zetasql_DeprecatedEncoding_Encoding =
  | 'DEFAULT_ENCODING'
  | 0
  | 'DATE_PACKED32'
  | 1
  | 'DATE_DECIMAL'
  | 1
  | '__FieldFormat_Encoding__switch_must_have_a_default__'
  | -1

export type _zetasql_DeprecatedEncoding_Encoding__Output = typeof _zetasql_DeprecatedEncoding_Encoding[keyof typeof _zetasql_DeprecatedEncoding_Encoding]

export interface DeprecatedEncoding {
}

export interface DeprecatedEncoding__Output {
}
