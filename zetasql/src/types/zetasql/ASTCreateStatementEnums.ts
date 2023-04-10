// Original file: src/zetasql/protos/zetasql/parser/ast_enums.proto


// Original file: src/zetasql/protos/zetasql/parser/ast_enums.proto

export const _zetasql_ASTCreateStatementEnums_Scope = {
  DEFAULT_SCOPE: 0,
  PRIVATE: 1,
  PUBLIC: 2,
  TEMPORARY: 3,
} as const;

export type _zetasql_ASTCreateStatementEnums_Scope =
  | 'DEFAULT_SCOPE'
  | 0
  | 'PRIVATE'
  | 1
  | 'PUBLIC'
  | 2
  | 'TEMPORARY'
  | 3

export type _zetasql_ASTCreateStatementEnums_Scope__Output = typeof _zetasql_ASTCreateStatementEnums_Scope[keyof typeof _zetasql_ASTCreateStatementEnums_Scope]

// Original file: src/zetasql/protos/zetasql/parser/ast_enums.proto

export const _zetasql_ASTCreateStatementEnums_SqlSecurity = {
  SQL_SECURITY_UNSPECIFIED: 0,
  SQL_SECURITY_DEFINER: 1,
  SQL_SECURITY_INVOKER: 2,
} as const;

export type _zetasql_ASTCreateStatementEnums_SqlSecurity =
  | 'SQL_SECURITY_UNSPECIFIED'
  | 0
  | 'SQL_SECURITY_DEFINER'
  | 1
  | 'SQL_SECURITY_INVOKER'
  | 2

export type _zetasql_ASTCreateStatementEnums_SqlSecurity__Output = typeof _zetasql_ASTCreateStatementEnums_SqlSecurity[keyof typeof _zetasql_ASTCreateStatementEnums_SqlSecurity]

export interface ASTCreateStatementEnums {
}

export interface ASTCreateStatementEnums__Output {
}
