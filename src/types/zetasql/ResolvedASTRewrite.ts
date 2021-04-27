// Original file: protos/zetasql/public/options.proto

export enum ResolvedASTRewrite {
  REWRITE_INVALID_DO_NOT_USE = 0,
  REWRITE_FLATTEN = 1,
  REWRITE_ANONYMIZATION = 2,
  REWRITE_PROTO_MAP_FNS = 3,
  REWRITE_ARRAY_FUNCTIONS_WITH_LAMBDA = 4,
  REWRITE_UNPIVOT = 5,
  REWRITE_PIVOT = 6,
}
