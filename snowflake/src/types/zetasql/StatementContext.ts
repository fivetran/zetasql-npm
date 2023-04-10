// Original file: src/zetasql-snowflake/protos/zetasql/public/options.proto

export const StatementContext = {
  CONTEXT_DEFAULT: 0,
  CONTEXT_MODULE: 1,
} as const;

export type StatementContext =
  | 'CONTEXT_DEFAULT'
  | 0
  | 'CONTEXT_MODULE'
  | 1

export type StatementContext__Output = typeof StatementContext[keyof typeof StatementContext]
