// Original file: src/protos/zetasql/parser/ast_enums.proto


// Original file: src/protos/zetasql/parser/ast_enums.proto

export const _zetasql_ASTDropStatementEnums_DropMode = {
  DROP_MODE_UNSPECIFIED: 0,
  RESTRICT: 1,
  CASCADE: 2,
} as const;

export type _zetasql_ASTDropStatementEnums_DropMode =
  | 'DROP_MODE_UNSPECIFIED'
  | 0
  | 'RESTRICT'
  | 1
  | 'CASCADE'
  | 2

export type _zetasql_ASTDropStatementEnums_DropMode__Output = typeof _zetasql_ASTDropStatementEnums_DropMode[keyof typeof _zetasql_ASTDropStatementEnums_DropMode]

export interface ASTDropStatementEnums {
}

export interface ASTDropStatementEnums__Output {
}
