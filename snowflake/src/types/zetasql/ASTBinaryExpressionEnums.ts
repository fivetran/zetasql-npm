// Original file: src/protos/zetasql/parser/ast_enums.proto


// Original file: src/protos/zetasql/parser/ast_enums.proto

export const _zetasql_ASTBinaryExpressionEnums_Op = {
  NOT_SET: 0,
  LIKE: 1,
  IS: 2,
  EQ: 3,
  NE: 4,
  NE2: 5,
  GT: 6,
  LT: 7,
  GE: 8,
  LE: 9,
  BITWISE_OR: 10,
  BITWISE_XOR: 11,
  BITWISE_AND: 12,
  PLUS: 13,
  MINUS: 14,
  MULTIPLY: 15,
  DIVIDE: 16,
  CONCAT_OP: 17,
  DISTINCT: 18,
} as const;

export type _zetasql_ASTBinaryExpressionEnums_Op =
  | 'NOT_SET'
  | 0
  | 'LIKE'
  | 1
  | 'IS'
  | 2
  | 'EQ'
  | 3
  | 'NE'
  | 4
  | 'NE2'
  | 5
  | 'GT'
  | 6
  | 'LT'
  | 7
  | 'GE'
  | 8
  | 'LE'
  | 9
  | 'BITWISE_OR'
  | 10
  | 'BITWISE_XOR'
  | 11
  | 'BITWISE_AND'
  | 12
  | 'PLUS'
  | 13
  | 'MINUS'
  | 14
  | 'MULTIPLY'
  | 15
  | 'DIVIDE'
  | 16
  | 'CONCAT_OP'
  | 17
  | 'DISTINCT'
  | 18

export type _zetasql_ASTBinaryExpressionEnums_Op__Output = typeof _zetasql_ASTBinaryExpressionEnums_Op[keyof typeof _zetasql_ASTBinaryExpressionEnums_Op]

export interface ASTBinaryExpressionEnums {
}

export interface ASTBinaryExpressionEnums__Output {
}
