// Original file: src/snowflake/protos/zetasql/public/options.proto

export const ResolvedASTRewrite = {
  REWRITE_INVALID_DO_NOT_USE: 0,
  REWRITE_FLATTEN: 1,
  REWRITE_ANONYMIZATION: 2,
  REWRITE_PROTO_MAP_FNS: 3,
  REWRITE_ARRAY_FILTER_TRANSFORM: 4,
  REWRITE_UNPIVOT: 5,
  REWRITE_PIVOT: 6,
  REWRITE_ARRAY_INCLUDES: 7,
  REWRITE_TYPEOF_FUNCTION: 8,
  REWRITE_WITH_EXPR: 9,
  REWRITE_INLINE_SQL_FUNCTIONS: 10,
  REWRITE_INLINE_SQL_TVFS: 11,
  REWRITE_NULLIFERROR_FUNCTION: 12,
  REWRITE_LIKE_ANY_ALL: 14,
  REWRITE_BUILTIN_FUNCTION_INLINER: 16,
  REWRITE_INLINE_SQL_VIEWS: 17,
} as const;

export type ResolvedASTRewrite =
  | 'REWRITE_INVALID_DO_NOT_USE'
  | 0
  | 'REWRITE_FLATTEN'
  | 1
  | 'REWRITE_ANONYMIZATION'
  | 2
  | 'REWRITE_PROTO_MAP_FNS'
  | 3
  | 'REWRITE_ARRAY_FILTER_TRANSFORM'
  | 4
  | 'REWRITE_UNPIVOT'
  | 5
  | 'REWRITE_PIVOT'
  | 6
  | 'REWRITE_ARRAY_INCLUDES'
  | 7
  | 'REWRITE_TYPEOF_FUNCTION'
  | 8
  | 'REWRITE_WITH_EXPR'
  | 9
  | 'REWRITE_INLINE_SQL_FUNCTIONS'
  | 10
  | 'REWRITE_INLINE_SQL_TVFS'
  | 11
  | 'REWRITE_NULLIFERROR_FUNCTION'
  | 12
  | 'REWRITE_LIKE_ANY_ALL'
  | 14
  | 'REWRITE_BUILTIN_FUNCTION_INLINER'
  | 16
  | 'REWRITE_INLINE_SQL_VIEWS'
  | 17

export type ResolvedASTRewrite__Output = typeof ResolvedASTRewrite[keyof typeof ResolvedASTRewrite]
