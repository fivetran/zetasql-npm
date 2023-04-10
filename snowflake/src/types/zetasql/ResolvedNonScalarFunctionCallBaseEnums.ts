// Original file: src/zetasql-snowflake/protos/zetasql/resolved_ast/resolved_ast_enums.proto


// Original file: src/zetasql-snowflake/protos/zetasql/resolved_ast/resolved_ast_enums.proto

export const _zetasql_ResolvedNonScalarFunctionCallBaseEnums_NullHandlingModifier = {
  DEFAULT_NULL_HANDLING: 0,
  IGNORE_NULLS: 1,
  RESPECT_NULLS: 2,
} as const;

export type _zetasql_ResolvedNonScalarFunctionCallBaseEnums_NullHandlingModifier =
  | 'DEFAULT_NULL_HANDLING'
  | 0
  | 'IGNORE_NULLS'
  | 1
  | 'RESPECT_NULLS'
  | 2

export type _zetasql_ResolvedNonScalarFunctionCallBaseEnums_NullHandlingModifier__Output = typeof _zetasql_ResolvedNonScalarFunctionCallBaseEnums_NullHandlingModifier[keyof typeof _zetasql_ResolvedNonScalarFunctionCallBaseEnums_NullHandlingModifier]

export interface ResolvedNonScalarFunctionCallBaseEnums {
}

export interface ResolvedNonScalarFunctionCallBaseEnums__Output {
}
