// Original file: src/protos/zetasql/parser/ast_enums.proto


// Original file: src/protos/zetasql/parser/ast_enums.proto

export enum _zetasql_ASTInsertStatementEnums_InsertMode {
  DEFAULT_MODE = 0,
  REPLACE = 1,
  UPDATE = 2,
  IGNORE = 3,
}

// Original file: src/protos/zetasql/parser/ast_enums.proto

export enum _zetasql_ASTInsertStatementEnums_ParseProgress {
  kInitial = 1,
  kSeenOrIgnoreReplaceUpdate = 2,
  kSeenTargetPath = 3,
  kSeenColumnList = 4,
  kSeenValuesList = 5,
}

export interface ASTInsertStatementEnums {
}

export interface ASTInsertStatementEnums__Output {
}
