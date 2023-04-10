// Original file: src/zetasql/protos/zetasql/parser/ast_enums.proto


// Original file: src/zetasql/protos/zetasql/parser/ast_enums.proto

export const _zetasql_ASTMergeActionEnums_ActionType = {
  NOT_SET: 0,
  INSERT: 1,
  UPDATE: 2,
  DELETE: 3,
} as const;

export type _zetasql_ASTMergeActionEnums_ActionType =
  | 'NOT_SET'
  | 0
  | 'INSERT'
  | 1
  | 'UPDATE'
  | 2
  | 'DELETE'
  | 3

export type _zetasql_ASTMergeActionEnums_ActionType__Output = typeof _zetasql_ASTMergeActionEnums_ActionType[keyof typeof _zetasql_ASTMergeActionEnums_ActionType]

export interface ASTMergeActionEnums {
}

export interface ASTMergeActionEnums__Output {
}
