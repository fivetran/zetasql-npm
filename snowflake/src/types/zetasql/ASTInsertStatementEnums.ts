// Original file: src/zetasql-snowflake/protos/zetasql/parser/ast_enums.proto


// Original file: src/zetasql-snowflake/protos/zetasql/parser/ast_enums.proto

export const _zetasql_ASTInsertStatementEnums_InsertMode = {
  DEFAULT_MODE: 0,
  REPLACE: 1,
  UPDATE: 2,
  IGNORE: 3,
} as const;

export type _zetasql_ASTInsertStatementEnums_InsertMode =
  | 'DEFAULT_MODE'
  | 0
  | 'REPLACE'
  | 1
  | 'UPDATE'
  | 2
  | 'IGNORE'
  | 3

export type _zetasql_ASTInsertStatementEnums_InsertMode__Output = typeof _zetasql_ASTInsertStatementEnums_InsertMode[keyof typeof _zetasql_ASTInsertStatementEnums_InsertMode]

// Original file: src/zetasql-snowflake/protos/zetasql/parser/ast_enums.proto

export const _zetasql_ASTInsertStatementEnums_ParseProgress = {
  kInitial: 1,
  kSeenOrIgnoreReplaceUpdate: 2,
  kSeenTargetPath: 3,
  kSeenColumnList: 4,
  kSeenValuesList: 5,
} as const;

export type _zetasql_ASTInsertStatementEnums_ParseProgress =
  | 'kInitial'
  | 1
  | 'kSeenOrIgnoreReplaceUpdate'
  | 2
  | 'kSeenTargetPath'
  | 3
  | 'kSeenColumnList'
  | 4
  | 'kSeenValuesList'
  | 5

export type _zetasql_ASTInsertStatementEnums_ParseProgress__Output = typeof _zetasql_ASTInsertStatementEnums_ParseProgress[keyof typeof _zetasql_ASTInsertStatementEnums_ParseProgress]

export interface ASTInsertStatementEnums {
}

export interface ASTInsertStatementEnums__Output {
}
