// Original file: src/zetasql/protos/zetasql/parser/ast_enums.proto


// Original file: src/zetasql/protos/zetasql/parser/ast_enums.proto

export const _zetasql_ASTWindowFrameExprEnums_BoundaryType = {
  UNBOUNDED_PRECEDING: 1,
  OFFSET_PRECEDING: 2,
  CURRENT_ROW: 3,
  OFFSET_FOLLOWING: 4,
  UNBOUNDED_FOLLOWING: 5,
} as const;

export type _zetasql_ASTWindowFrameExprEnums_BoundaryType =
  | 'UNBOUNDED_PRECEDING'
  | 1
  | 'OFFSET_PRECEDING'
  | 2
  | 'CURRENT_ROW'
  | 3
  | 'OFFSET_FOLLOWING'
  | 4
  | 'UNBOUNDED_FOLLOWING'
  | 5

export type _zetasql_ASTWindowFrameExprEnums_BoundaryType__Output = typeof _zetasql_ASTWindowFrameExprEnums_BoundaryType[keyof typeof _zetasql_ASTWindowFrameExprEnums_BoundaryType]

export interface ASTWindowFrameExprEnums {
}

export interface ASTWindowFrameExprEnums__Output {
}
