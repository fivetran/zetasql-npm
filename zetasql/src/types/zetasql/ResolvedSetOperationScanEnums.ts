// Original file: src/zetasql/protos/zetasql/resolved_ast/resolved_ast_enums.proto


// Original file: src/zetasql/protos/zetasql/resolved_ast/resolved_ast_enums.proto

export const _zetasql_ResolvedSetOperationScanEnums_SetOperationColumnMatchMode = {
  BY_POSITION: 0,
  CORRESPONDING: 1,
  CORRESPONDING_BY: 2,
} as const;

export type _zetasql_ResolvedSetOperationScanEnums_SetOperationColumnMatchMode =
  | 'BY_POSITION'
  | 0
  | 'CORRESPONDING'
  | 1
  | 'CORRESPONDING_BY'
  | 2

export type _zetasql_ResolvedSetOperationScanEnums_SetOperationColumnMatchMode__Output = typeof _zetasql_ResolvedSetOperationScanEnums_SetOperationColumnMatchMode[keyof typeof _zetasql_ResolvedSetOperationScanEnums_SetOperationColumnMatchMode]

// Original file: src/zetasql/protos/zetasql/resolved_ast/resolved_ast_enums.proto

export const _zetasql_ResolvedSetOperationScanEnums_SetOperationColumnPropagationMode = {
  STRICT: 0,
  INNER: 1,
  LEFT: 2,
  FULL: 3,
} as const;

export type _zetasql_ResolvedSetOperationScanEnums_SetOperationColumnPropagationMode =
  | 'STRICT'
  | 0
  | 'INNER'
  | 1
  | 'LEFT'
  | 2
  | 'FULL'
  | 3

export type _zetasql_ResolvedSetOperationScanEnums_SetOperationColumnPropagationMode__Output = typeof _zetasql_ResolvedSetOperationScanEnums_SetOperationColumnPropagationMode[keyof typeof _zetasql_ResolvedSetOperationScanEnums_SetOperationColumnPropagationMode]

// Original file: src/zetasql/protos/zetasql/resolved_ast/resolved_ast_enums.proto

export const _zetasql_ResolvedSetOperationScanEnums_SetOperationType = {
  UNION_ALL: 0,
  UNION_DISTINCT: 1,
  INTERSECT_ALL: 2,
  INTERSECT_DISTINCT: 3,
  EXCEPT_ALL: 4,
  EXCEPT_DISTINCT: 5,
} as const;

export type _zetasql_ResolvedSetOperationScanEnums_SetOperationType =
  | 'UNION_ALL'
  | 0
  | 'UNION_DISTINCT'
  | 1
  | 'INTERSECT_ALL'
  | 2
  | 'INTERSECT_DISTINCT'
  | 3
  | 'EXCEPT_ALL'
  | 4
  | 'EXCEPT_DISTINCT'
  | 5

export type _zetasql_ResolvedSetOperationScanEnums_SetOperationType__Output = typeof _zetasql_ResolvedSetOperationScanEnums_SetOperationType[keyof typeof _zetasql_ResolvedSetOperationScanEnums_SetOperationType]

export interface ResolvedSetOperationScanEnums {
}

export interface ResolvedSetOperationScanEnums__Output {
}
