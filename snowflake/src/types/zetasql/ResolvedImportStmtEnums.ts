// Original file: src/zetasql-snowflake/protos/zetasql/resolved_ast/resolved_ast_enums.proto


// Original file: src/zetasql-snowflake/protos/zetasql/resolved_ast/resolved_ast_enums.proto

export const _zetasql_ResolvedImportStmtEnums_ImportKind = {
  MODULE: 0,
  PROTO: 1,
  __ImportKind__switch_must_have_a_default__: -1,
} as const;

export type _zetasql_ResolvedImportStmtEnums_ImportKind =
  | 'MODULE'
  | 0
  | 'PROTO'
  | 1
  | '__ImportKind__switch_must_have_a_default__'
  | -1

export type _zetasql_ResolvedImportStmtEnums_ImportKind__Output = typeof _zetasql_ResolvedImportStmtEnums_ImportKind[keyof typeof _zetasql_ResolvedImportStmtEnums_ImportKind]

export interface ResolvedImportStmtEnums {
}

export interface ResolvedImportStmtEnums__Output {
}
