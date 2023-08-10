// Original file: src/zetasql/protos/zetasql/parser/ast_enums.proto


// Original file: src/zetasql/protos/zetasql/parser/ast_enums.proto

export const _zetasql_ASTSetOperationEnums_AllOrDistinct = {
  ALL_OR_DISTINCT_NOT_SET: 0,
  ALL: 1,
  DISTINCT: 2,
} as const;

export type _zetasql_ASTSetOperationEnums_AllOrDistinct =
  | 'ALL_OR_DISTINCT_NOT_SET'
  | 0
  | 'ALL'
  | 1
  | 'DISTINCT'
  | 2

export type _zetasql_ASTSetOperationEnums_AllOrDistinct__Output = typeof _zetasql_ASTSetOperationEnums_AllOrDistinct[keyof typeof _zetasql_ASTSetOperationEnums_AllOrDistinct]

// Original file: src/zetasql/protos/zetasql/parser/ast_enums.proto

export const _zetasql_ASTSetOperationEnums_ColumnMatchMode = {
  BY_POSITION: 1,
  CORRESPONDING: 2,
  CORRESPONDING_BY: 3,
} as const;

export type _zetasql_ASTSetOperationEnums_ColumnMatchMode =
  | 'BY_POSITION'
  | 1
  | 'CORRESPONDING'
  | 2
  | 'CORRESPONDING_BY'
  | 3

export type _zetasql_ASTSetOperationEnums_ColumnMatchMode__Output = typeof _zetasql_ASTSetOperationEnums_ColumnMatchMode[keyof typeof _zetasql_ASTSetOperationEnums_ColumnMatchMode]

// Original file: src/zetasql/protos/zetasql/parser/ast_enums.proto

export const _zetasql_ASTSetOperationEnums_ColumnPropagationMode = {
  STRICT: 1,
  INNER: 2,
  LEFT: 3,
  FULL: 4,
} as const;

export type _zetasql_ASTSetOperationEnums_ColumnPropagationMode =
  | 'STRICT'
  | 1
  | 'INNER'
  | 2
  | 'LEFT'
  | 3
  | 'FULL'
  | 4

export type _zetasql_ASTSetOperationEnums_ColumnPropagationMode__Output = typeof _zetasql_ASTSetOperationEnums_ColumnPropagationMode[keyof typeof _zetasql_ASTSetOperationEnums_ColumnPropagationMode]

// Original file: src/zetasql/protos/zetasql/parser/ast_enums.proto

export const _zetasql_ASTSetOperationEnums_OperationType = {
  NOT_SET: 0,
  UNION: 1,
  EXCEPT: 2,
  INTERSECT: 4,
} as const;

export type _zetasql_ASTSetOperationEnums_OperationType =
  | 'NOT_SET'
  | 0
  | 'UNION'
  | 1
  | 'EXCEPT'
  | 2
  | 'INTERSECT'
  | 4

export type _zetasql_ASTSetOperationEnums_OperationType__Output = typeof _zetasql_ASTSetOperationEnums_OperationType[keyof typeof _zetasql_ASTSetOperationEnums_OperationType]

export interface ASTSetOperationEnums {
}

export interface ASTSetOperationEnums__Output {
}
