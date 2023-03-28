// Original file: src/protos/zetasql/parser/ast_enums.proto


// Original file: src/protos/zetasql/parser/ast_enums.proto

export const _zetasql_ASTFunctionParameterEnums_ProcedureParameterMode = {
  NOT_SET: 0,
  IN: 1,
  OUT: 2,
  INOUT: 3,
} as const;

export type _zetasql_ASTFunctionParameterEnums_ProcedureParameterMode =
  | 'NOT_SET'
  | 0
  | 'IN'
  | 1
  | 'OUT'
  | 2
  | 'INOUT'
  | 3

export type _zetasql_ASTFunctionParameterEnums_ProcedureParameterMode__Output = typeof _zetasql_ASTFunctionParameterEnums_ProcedureParameterMode[keyof typeof _zetasql_ASTFunctionParameterEnums_ProcedureParameterMode]

export interface ASTFunctionParameterEnums {
}

export interface ASTFunctionParameterEnums__Output {
}
