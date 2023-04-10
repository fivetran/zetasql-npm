// Original file: src/snowflake/protos/zetasql/resolved_ast/resolved_ast_enums.proto


// Original file: src/snowflake/protos/zetasql/resolved_ast/resolved_ast_enums.proto

export const _zetasql_ResolvedSubqueryExprEnums_SubqueryType = {
  SCALAR: 0,
  ARRAY: 1,
  EXISTS: 2,
  IN: 3,
  LIKE_ANY: 4,
  LIKE_ALL: 5,
} as const;

export type _zetasql_ResolvedSubqueryExprEnums_SubqueryType =
  | 'SCALAR'
  | 0
  | 'ARRAY'
  | 1
  | 'EXISTS'
  | 2
  | 'IN'
  | 3
  | 'LIKE_ANY'
  | 4
  | 'LIKE_ALL'
  | 5

export type _zetasql_ResolvedSubqueryExprEnums_SubqueryType__Output = typeof _zetasql_ResolvedSubqueryExprEnums_SubqueryType[keyof typeof _zetasql_ResolvedSubqueryExprEnums_SubqueryType]

export interface ResolvedSubqueryExprEnums {
}

export interface ResolvedSubqueryExprEnums__Output {
}
