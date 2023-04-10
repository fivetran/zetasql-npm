// Original file: src/zetasql/protos/zetasql/resolved_ast/resolved_ast_enums.proto


// Original file: src/zetasql/protos/zetasql/resolved_ast/resolved_ast_enums.proto

export const _zetasql_ResolvedCreateStatementEnums_CreateMode = {
  CREATE_DEFAULT: 0,
  CREATE_OR_REPLACE: 1,
  CREATE_IF_NOT_EXISTS: 2,
} as const;

export type _zetasql_ResolvedCreateStatementEnums_CreateMode =
  | 'CREATE_DEFAULT'
  | 0
  | 'CREATE_OR_REPLACE'
  | 1
  | 'CREATE_IF_NOT_EXISTS'
  | 2

export type _zetasql_ResolvedCreateStatementEnums_CreateMode__Output = typeof _zetasql_ResolvedCreateStatementEnums_CreateMode[keyof typeof _zetasql_ResolvedCreateStatementEnums_CreateMode]

// Original file: src/zetasql/protos/zetasql/resolved_ast/resolved_ast_enums.proto

export const _zetasql_ResolvedCreateStatementEnums_CreateScope = {
  CREATE_DEFAULT_SCOPE: 0,
  CREATE_PRIVATE: 1,
  CREATE_PUBLIC: 2,
  CREATE_TEMP: 3,
} as const;

export type _zetasql_ResolvedCreateStatementEnums_CreateScope =
  | 'CREATE_DEFAULT_SCOPE'
  | 0
  | 'CREATE_PRIVATE'
  | 1
  | 'CREATE_PUBLIC'
  | 2
  | 'CREATE_TEMP'
  | 3

export type _zetasql_ResolvedCreateStatementEnums_CreateScope__Output = typeof _zetasql_ResolvedCreateStatementEnums_CreateScope[keyof typeof _zetasql_ResolvedCreateStatementEnums_CreateScope]

// Original file: src/zetasql/protos/zetasql/resolved_ast/resolved_ast_enums.proto

export const _zetasql_ResolvedCreateStatementEnums_DeterminismLevel = {
  DETERMINISM_UNSPECIFIED: 0,
  DETERMINISM_DETERMINISTIC: 1,
  DETERMINISM_NOT_DETERMINISTIC: 2,
  DETERMINISM_IMMUTABLE: 3,
  DETERMINISM_STABLE: 4,
  DETERMINISM_VOLATILE: 5,
} as const;

export type _zetasql_ResolvedCreateStatementEnums_DeterminismLevel =
  | 'DETERMINISM_UNSPECIFIED'
  | 0
  | 'DETERMINISM_DETERMINISTIC'
  | 1
  | 'DETERMINISM_NOT_DETERMINISTIC'
  | 2
  | 'DETERMINISM_IMMUTABLE'
  | 3
  | 'DETERMINISM_STABLE'
  | 4
  | 'DETERMINISM_VOLATILE'
  | 5

export type _zetasql_ResolvedCreateStatementEnums_DeterminismLevel__Output = typeof _zetasql_ResolvedCreateStatementEnums_DeterminismLevel[keyof typeof _zetasql_ResolvedCreateStatementEnums_DeterminismLevel]

// Original file: src/zetasql/protos/zetasql/resolved_ast/resolved_ast_enums.proto

export const _zetasql_ResolvedCreateStatementEnums_SqlSecurity = {
  SQL_SECURITY_UNSPECIFIED: 0,
  SQL_SECURITY_DEFINER: 1,
  SQL_SECURITY_INVOKER: 2,
} as const;

export type _zetasql_ResolvedCreateStatementEnums_SqlSecurity =
  | 'SQL_SECURITY_UNSPECIFIED'
  | 0
  | 'SQL_SECURITY_DEFINER'
  | 1
  | 'SQL_SECURITY_INVOKER'
  | 2

export type _zetasql_ResolvedCreateStatementEnums_SqlSecurity__Output = typeof _zetasql_ResolvedCreateStatementEnums_SqlSecurity[keyof typeof _zetasql_ResolvedCreateStatementEnums_SqlSecurity]

export interface ResolvedCreateStatementEnums {
}

export interface ResolvedCreateStatementEnums__Output {
}
