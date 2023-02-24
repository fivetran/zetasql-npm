// Original file: src/protos/zetasql/parser/ast_enums.proto


// Original file: src/protos/zetasql/parser/ast_enums.proto

export const _zetasql_ASTTemplatedParameterTypeEnums_TemplatedTypeKind = {
  UNINITIALIZED: 1,
  ANY_TYPE: 2,
  ANY_PROTO: 3,
  ANY_ENUM: 4,
  ANY_STRUCT: 5,
  ANY_ARRAY: 6,
  ANY_TABLE: 7,
} as const;

export type _zetasql_ASTTemplatedParameterTypeEnums_TemplatedTypeKind =
  | 'UNINITIALIZED'
  | 1
  | 'ANY_TYPE'
  | 2
  | 'ANY_PROTO'
  | 3
  | 'ANY_ENUM'
  | 4
  | 'ANY_STRUCT'
  | 5
  | 'ANY_ARRAY'
  | 6
  | 'ANY_TABLE'
  | 7

export type _zetasql_ASTTemplatedParameterTypeEnums_TemplatedTypeKind__Output = typeof _zetasql_ASTTemplatedParameterTypeEnums_TemplatedTypeKind[keyof typeof _zetasql_ASTTemplatedParameterTypeEnums_TemplatedTypeKind]

export interface ASTTemplatedParameterTypeEnums {
}

export interface ASTTemplatedParameterTypeEnums__Output {
}
