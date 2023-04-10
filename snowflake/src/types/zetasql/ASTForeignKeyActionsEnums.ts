// Original file: src/zetasql-snowflake/protos/zetasql/parser/ast_enums.proto


// Original file: src/zetasql-snowflake/protos/zetasql/parser/ast_enums.proto

export const _zetasql_ASTForeignKeyActionsEnums_Action = {
  NO_ACTION: 0,
  RESTRICT: 1,
  CASCADE: 2,
  SET_NULL: 3,
} as const;

export type _zetasql_ASTForeignKeyActionsEnums_Action =
  | 'NO_ACTION'
  | 0
  | 'RESTRICT'
  | 1
  | 'CASCADE'
  | 2
  | 'SET_NULL'
  | 3

export type _zetasql_ASTForeignKeyActionsEnums_Action__Output = typeof _zetasql_ASTForeignKeyActionsEnums_Action[keyof typeof _zetasql_ASTForeignKeyActionsEnums_Action]

export interface ASTForeignKeyActionsEnums {
}

export interface ASTForeignKeyActionsEnums__Output {
}
