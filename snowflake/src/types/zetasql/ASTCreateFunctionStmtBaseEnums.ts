// Original file: src/snowflake/protos/zetasql/parser/ast_enums.proto


// Original file: src/snowflake/protos/zetasql/parser/ast_enums.proto

export const _zetasql_ASTCreateFunctionStmtBaseEnums_DeterminismLevel = {
  DETERMINISM_UNSPECIFIED: 0,
  DETERMINISTIC: 1,
  NOT_DETERMINISTIC: 2,
  IMMUTABLE: 3,
  STABLE: 4,
  VOLATILE: 5,
} as const;

export type _zetasql_ASTCreateFunctionStmtBaseEnums_DeterminismLevel =
  | 'DETERMINISM_UNSPECIFIED'
  | 0
  | 'DETERMINISTIC'
  | 1
  | 'NOT_DETERMINISTIC'
  | 2
  | 'IMMUTABLE'
  | 3
  | 'STABLE'
  | 4
  | 'VOLATILE'
  | 5

export type _zetasql_ASTCreateFunctionStmtBaseEnums_DeterminismLevel__Output = typeof _zetasql_ASTCreateFunctionStmtBaseEnums_DeterminismLevel[keyof typeof _zetasql_ASTCreateFunctionStmtBaseEnums_DeterminismLevel]

export interface ASTCreateFunctionStmtBaseEnums {
}

export interface ASTCreateFunctionStmtBaseEnums__Output {
}
