// Original file: src/snowflake/protos/zetasql/parser/ast_enums.proto


// Original file: src/snowflake/protos/zetasql/parser/ast_enums.proto

export const _zetasql_ASTMergeWhenClauseEnums_MatchType = {
  NOT_SET: 0,
  MATCHED: 1,
  NOT_MATCHED_BY_SOURCE: 2,
  NOT_MATCHED_BY_TARGET: 3,
} as const;

export type _zetasql_ASTMergeWhenClauseEnums_MatchType =
  | 'NOT_SET'
  | 0
  | 'MATCHED'
  | 1
  | 'NOT_MATCHED_BY_SOURCE'
  | 2
  | 'NOT_MATCHED_BY_TARGET'
  | 3

export type _zetasql_ASTMergeWhenClauseEnums_MatchType__Output = typeof _zetasql_ASTMergeWhenClauseEnums_MatchType[keyof typeof _zetasql_ASTMergeWhenClauseEnums_MatchType]

export interface ASTMergeWhenClauseEnums {
}

export interface ASTMergeWhenClauseEnums__Output {
}
