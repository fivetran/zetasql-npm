// Original file: src/snowflake/protos/zetasql/resolved_ast/resolved_ast_enums.proto


// Original file: src/snowflake/protos/zetasql/resolved_ast/resolved_ast_enums.proto

export const _zetasql_ResolvedMergeWhenEnums_ActionType = {
  INSERT: 0,
  UPDATE: 1,
  DELETE: 2,
} as const;

export type _zetasql_ResolvedMergeWhenEnums_ActionType =
  | 'INSERT'
  | 0
  | 'UPDATE'
  | 1
  | 'DELETE'
  | 2

export type _zetasql_ResolvedMergeWhenEnums_ActionType__Output = typeof _zetasql_ResolvedMergeWhenEnums_ActionType[keyof typeof _zetasql_ResolvedMergeWhenEnums_ActionType]

// Original file: src/snowflake/protos/zetasql/resolved_ast/resolved_ast_enums.proto

export const _zetasql_ResolvedMergeWhenEnums_MatchType = {
  MATCHED: 0,
  NOT_MATCHED_BY_SOURCE: 1,
  NOT_MATCHED_BY_TARGET: 2,
} as const;

export type _zetasql_ResolvedMergeWhenEnums_MatchType =
  | 'MATCHED'
  | 0
  | 'NOT_MATCHED_BY_SOURCE'
  | 1
  | 'NOT_MATCHED_BY_TARGET'
  | 2

export type _zetasql_ResolvedMergeWhenEnums_MatchType__Output = typeof _zetasql_ResolvedMergeWhenEnums_MatchType[keyof typeof _zetasql_ResolvedMergeWhenEnums_MatchType]

export interface ResolvedMergeWhenEnums {
}

export interface ResolvedMergeWhenEnums__Output {
}
