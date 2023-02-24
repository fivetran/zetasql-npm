// Original file: src/protos/zetasql/parser/ast_enums.proto


// Original file: src/protos/zetasql/parser/ast_enums.proto

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
