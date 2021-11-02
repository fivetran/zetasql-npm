// Original file: src/protos/zetasql/public/function.proto


// Original file: src/protos/zetasql/public/function.proto

export enum _zetasql_FunctionEnums_ArgumentCardinality {
  REQUIRED = 0,
  REPEATED = 1,
  OPTIONAL = 2,
}

// Original file: src/protos/zetasql/public/function.proto

export enum _zetasql_FunctionEnums_ArgumentCollationMode {
  AFFECTS_NONE = 0,
  AFFECTS_OPERATION = 1,
  AFFECTS_PROPAGATION = 2,
  AFFECTS_OPERATION_AND_PROPAGATION = 3,
}

// Original file: src/protos/zetasql/public/function.proto

export enum _zetasql_FunctionEnums_Mode {
  SCALAR = 1,
  AGGREGATE = 2,
  ANALYTIC = 3,
}

// Original file: src/protos/zetasql/public/function.proto

export enum _zetasql_FunctionEnums_ProcedureArgumentMode {
  NOT_SET = 0,
  IN = 1,
  OUT = 2,
  INOUT = 3,
}

// Original file: src/protos/zetasql/public/function.proto

export enum _zetasql_FunctionEnums_TableValuedFunctionType {
  INVALID = 0,
  FIXED_OUTPUT_SCHEMA_TVF = 1,
  FORWARD_INPUT_SCHEMA_TO_OUTPUT_SCHEMA_TVF = 2,
  TEMPLATED_SQL_TVF = 3,
  FORWARD_INPUT_SCHEMA_TO_OUTPUT_SCHEMA_WITH_APPENDED_COLUMNS = 7,
}

// Original file: src/protos/zetasql/public/function.proto

export enum _zetasql_FunctionEnums_Volatility {
  IMMUTABLE = 0,
  STABLE = 1,
  VOLATILE = 2,
}

// Original file: src/protos/zetasql/public/function.proto

export enum _zetasql_FunctionEnums_WindowOrderSupport {
  ORDER_UNSUPPORTED = 0,
  ORDER_OPTIONAL = 1,
  ORDER_REQUIRED = 2,
}

export interface FunctionEnums {
}

export interface FunctionEnums__Output {
}
