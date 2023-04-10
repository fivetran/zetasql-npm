// Original file: src/snowflake/protos/zetasql/resolved_ast/resolved_ast_enums.proto


// Original file: src/snowflake/protos/zetasql/resolved_ast/resolved_ast_enums.proto

export const _zetasql_ResolvedWindowFrameExprEnums_BoundaryType = {
  UNBOUNDED_PRECEDING: 0,
  OFFSET_PRECEDING: 1,
  CURRENT_ROW: 2,
  OFFSET_FOLLOWING: 3,
  UNBOUNDED_FOLLOWING: 4,
} as const;

export type _zetasql_ResolvedWindowFrameExprEnums_BoundaryType =
  | 'UNBOUNDED_PRECEDING'
  | 0
  | 'OFFSET_PRECEDING'
  | 1
  | 'CURRENT_ROW'
  | 2
  | 'OFFSET_FOLLOWING'
  | 3
  | 'UNBOUNDED_FOLLOWING'
  | 4

export type _zetasql_ResolvedWindowFrameExprEnums_BoundaryType__Output = typeof _zetasql_ResolvedWindowFrameExprEnums_BoundaryType[keyof typeof _zetasql_ResolvedWindowFrameExprEnums_BoundaryType]

export interface ResolvedWindowFrameExprEnums {
}

export interface ResolvedWindowFrameExprEnums__Output {
}
