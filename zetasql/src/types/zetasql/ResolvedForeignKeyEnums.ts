// Original file: src/protos/zetasql/resolved_ast/resolved_ast_enums.proto


// Original file: src/protos/zetasql/resolved_ast/resolved_ast_enums.proto

export const _zetasql_ResolvedForeignKeyEnums_ActionOperation = {
  NO_ACTION: 0,
  RESTRICT: 1,
  CASCADE: 2,
  SET_NULL: 3,
} as const;

export type _zetasql_ResolvedForeignKeyEnums_ActionOperation =
  | 'NO_ACTION'
  | 0
  | 'RESTRICT'
  | 1
  | 'CASCADE'
  | 2
  | 'SET_NULL'
  | 3

export type _zetasql_ResolvedForeignKeyEnums_ActionOperation__Output = typeof _zetasql_ResolvedForeignKeyEnums_ActionOperation[keyof typeof _zetasql_ResolvedForeignKeyEnums_ActionOperation]

// Original file: src/protos/zetasql/resolved_ast/resolved_ast_enums.proto

export const _zetasql_ResolvedForeignKeyEnums_MatchMode = {
  SIMPLE: 0,
  FULL: 1,
  NOT_DISTINCT: 2,
} as const;

export type _zetasql_ResolvedForeignKeyEnums_MatchMode =
  | 'SIMPLE'
  | 0
  | 'FULL'
  | 1
  | 'NOT_DISTINCT'
  | 2

export type _zetasql_ResolvedForeignKeyEnums_MatchMode__Output = typeof _zetasql_ResolvedForeignKeyEnums_MatchMode[keyof typeof _zetasql_ResolvedForeignKeyEnums_MatchMode]

export interface ResolvedForeignKeyEnums {
}

export interface ResolvedForeignKeyEnums__Output {
}
