// Original file: src/zetasql-snowflake/protos/zetasql/parser/ast_enums.proto


// Original file: src/zetasql-snowflake/protos/zetasql/parser/ast_enums.proto

export const _zetasql_ASTUnaryExpressionEnums_Op = {
  NOT_SET: 0,
  NOT: 1,
  BITWISE_NOT: 2,
  MINUS: 3,
  PLUS: 4,
  IS_UNKNOWN: 5,
  IS_NOT_UNKNOWN: 6,
} as const;

export type _zetasql_ASTUnaryExpressionEnums_Op =
  | 'NOT_SET'
  | 0
  | 'NOT'
  | 1
  | 'BITWISE_NOT'
  | 2
  | 'MINUS'
  | 3
  | 'PLUS'
  | 4
  | 'IS_UNKNOWN'
  | 5
  | 'IS_NOT_UNKNOWN'
  | 6

export type _zetasql_ASTUnaryExpressionEnums_Op__Output = typeof _zetasql_ASTUnaryExpressionEnums_Op[keyof typeof _zetasql_ASTUnaryExpressionEnums_Op]

export interface ASTUnaryExpressionEnums {
}

export interface ASTUnaryExpressionEnums__Output {
}
