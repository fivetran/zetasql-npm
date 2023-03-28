// Original file: src/protos/zetasql/parser/ast_enums.proto


// Original file: src/protos/zetasql/parser/ast_enums.proto

export const _zetasql_ASTFunctionCallEnums_NullHandlingModifier = {
  DEFAULT_NULL_HANDLING: 0,
  IGNORE_NULLS: 1,
  RESPECT_NULLS: 2,
} as const;

export type _zetasql_ASTFunctionCallEnums_NullHandlingModifier =
  | 'DEFAULT_NULL_HANDLING'
  | 0
  | 'IGNORE_NULLS'
  | 1
  | 'RESPECT_NULLS'
  | 2

export type _zetasql_ASTFunctionCallEnums_NullHandlingModifier__Output = typeof _zetasql_ASTFunctionCallEnums_NullHandlingModifier[keyof typeof _zetasql_ASTFunctionCallEnums_NullHandlingModifier]

export interface ASTFunctionCallEnums {
}

export interface ASTFunctionCallEnums__Output {
}
