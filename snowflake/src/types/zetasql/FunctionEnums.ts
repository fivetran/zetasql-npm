// Original file: src/protos/zetasql/public/function.proto


// Original file: src/protos/zetasql/public/function.proto

export const _zetasql_FunctionEnums_ArgumentCardinality = {
  REQUIRED: 0,
  REPEATED: 1,
  OPTIONAL: 2,
} as const;

export type _zetasql_FunctionEnums_ArgumentCardinality =
  | 'REQUIRED'
  | 0
  | 'REPEATED'
  | 1
  | 'OPTIONAL'
  | 2

export type _zetasql_FunctionEnums_ArgumentCardinality__Output = typeof _zetasql_FunctionEnums_ArgumentCardinality[keyof typeof _zetasql_FunctionEnums_ArgumentCardinality]

// Original file: src/protos/zetasql/public/function.proto

export const _zetasql_FunctionEnums_ArgumentCollationMode = {
  AFFECTS_NONE: 0,
  AFFECTS_OPERATION: 1,
  AFFECTS_PROPAGATION: 2,
  AFFECTS_OPERATION_AND_PROPAGATION: 3,
} as const;

export type _zetasql_FunctionEnums_ArgumentCollationMode =
  | 'AFFECTS_NONE'
  | 0
  | 'AFFECTS_OPERATION'
  | 1
  | 'AFFECTS_PROPAGATION'
  | 2
  | 'AFFECTS_OPERATION_AND_PROPAGATION'
  | 3

export type _zetasql_FunctionEnums_ArgumentCollationMode__Output = typeof _zetasql_FunctionEnums_ArgumentCollationMode[keyof typeof _zetasql_FunctionEnums_ArgumentCollationMode]

// Original file: src/protos/zetasql/public/function.proto

export const _zetasql_FunctionEnums_Mode = {
  SCALAR: 1,
  AGGREGATE: 2,
  ANALYTIC: 3,
} as const;

export type _zetasql_FunctionEnums_Mode =
  | 'SCALAR'
  | 1
  | 'AGGREGATE'
  | 2
  | 'ANALYTIC'
  | 3

export type _zetasql_FunctionEnums_Mode__Output = typeof _zetasql_FunctionEnums_Mode[keyof typeof _zetasql_FunctionEnums_Mode]

// Original file: src/protos/zetasql/public/function.proto

export const _zetasql_FunctionEnums_ProcedureArgumentMode = {
  NOT_SET: 0,
  IN: 1,
  OUT: 2,
  INOUT: 3,
} as const;

export type _zetasql_FunctionEnums_ProcedureArgumentMode =
  | 'NOT_SET'
  | 0
  | 'IN'
  | 1
  | 'OUT'
  | 2
  | 'INOUT'
  | 3

export type _zetasql_FunctionEnums_ProcedureArgumentMode__Output = typeof _zetasql_FunctionEnums_ProcedureArgumentMode[keyof typeof _zetasql_FunctionEnums_ProcedureArgumentMode]

// Original file: src/protos/zetasql/public/function.proto

export const _zetasql_FunctionEnums_TableValuedFunctionType = {
  INVALID: 0,
  FIXED_OUTPUT_SCHEMA_TVF: 1,
  FORWARD_INPUT_SCHEMA_TO_OUTPUT_SCHEMA_TVF: 2,
  TEMPLATED_SQL_TVF: 3,
  FORWARD_INPUT_SCHEMA_TO_OUTPUT_SCHEMA_WITH_APPENDED_COLUMNS: 7,
} as const;

export type _zetasql_FunctionEnums_TableValuedFunctionType =
  | 'INVALID'
  | 0
  | 'FIXED_OUTPUT_SCHEMA_TVF'
  | 1
  | 'FORWARD_INPUT_SCHEMA_TO_OUTPUT_SCHEMA_TVF'
  | 2
  | 'TEMPLATED_SQL_TVF'
  | 3
  | 'FORWARD_INPUT_SCHEMA_TO_OUTPUT_SCHEMA_WITH_APPENDED_COLUMNS'
  | 7

export type _zetasql_FunctionEnums_TableValuedFunctionType__Output = typeof _zetasql_FunctionEnums_TableValuedFunctionType[keyof typeof _zetasql_FunctionEnums_TableValuedFunctionType]

// Original file: src/protos/zetasql/public/function.proto

export const _zetasql_FunctionEnums_Volatility = {
  IMMUTABLE: 0,
  STABLE: 1,
  VOLATILE: 2,
} as const;

export type _zetasql_FunctionEnums_Volatility =
  | 'IMMUTABLE'
  | 0
  | 'STABLE'
  | 1
  | 'VOLATILE'
  | 2

export type _zetasql_FunctionEnums_Volatility__Output = typeof _zetasql_FunctionEnums_Volatility[keyof typeof _zetasql_FunctionEnums_Volatility]

// Original file: src/protos/zetasql/public/function.proto

export const _zetasql_FunctionEnums_WindowOrderSupport = {
  ORDER_UNSUPPORTED: 0,
  ORDER_OPTIONAL: 1,
  ORDER_REQUIRED: 2,
} as const;

export type _zetasql_FunctionEnums_WindowOrderSupport =
  | 'ORDER_UNSUPPORTED'
  | 0
  | 'ORDER_OPTIONAL'
  | 1
  | 'ORDER_REQUIRED'
  | 2

export type _zetasql_FunctionEnums_WindowOrderSupport__Output = typeof _zetasql_FunctionEnums_WindowOrderSupport[keyof typeof _zetasql_FunctionEnums_WindowOrderSupport]

export interface FunctionEnums {
}

export interface FunctionEnums__Output {
}
