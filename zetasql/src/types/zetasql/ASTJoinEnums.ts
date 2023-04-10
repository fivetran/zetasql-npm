// Original file: src/zetasql/protos/zetasql/parser/ast_enums.proto


// Original file: src/zetasql/protos/zetasql/parser/ast_enums.proto

export const _zetasql_ASTJoinEnums_JoinHint = {
  NO_JOIN_HINT: 0,
  HASH: 1,
  LOOKUP: 2,
} as const;

export type _zetasql_ASTJoinEnums_JoinHint =
  | 'NO_JOIN_HINT'
  | 0
  | 'HASH'
  | 1
  | 'LOOKUP'
  | 2

export type _zetasql_ASTJoinEnums_JoinHint__Output = typeof _zetasql_ASTJoinEnums_JoinHint[keyof typeof _zetasql_ASTJoinEnums_JoinHint]

// Original file: src/zetasql/protos/zetasql/parser/ast_enums.proto

export const _zetasql_ASTJoinEnums_JoinType = {
  DEFAULT_JOIN_TYPE: 0,
  COMMA: 1,
  CROSS: 2,
  FULL: 3,
  INNER: 4,
  LEFT: 5,
  RIGHT: 6,
} as const;

export type _zetasql_ASTJoinEnums_JoinType =
  | 'DEFAULT_JOIN_TYPE'
  | 0
  | 'COMMA'
  | 1
  | 'CROSS'
  | 2
  | 'FULL'
  | 3
  | 'INNER'
  | 4
  | 'LEFT'
  | 5
  | 'RIGHT'
  | 6

export type _zetasql_ASTJoinEnums_JoinType__Output = typeof _zetasql_ASTJoinEnums_JoinType[keyof typeof _zetasql_ASTJoinEnums_JoinType]

export interface ASTJoinEnums {
}

export interface ASTJoinEnums__Output {
}
