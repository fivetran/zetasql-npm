// Original file: src/zetasql-snowflake/protos/zetasql/public/options.proto

export const ErrorMessageMode = {
  ERROR_MESSAGE_WITH_PAYLOAD: 0,
  ERROR_MESSAGE_ONE_LINE: 1,
  ERROR_MESSAGE_MULTI_LINE_WITH_CARET: 2,
} as const;

export type ErrorMessageMode =
  | 'ERROR_MESSAGE_WITH_PAYLOAD'
  | 0
  | 'ERROR_MESSAGE_ONE_LINE'
  | 1
  | 'ERROR_MESSAGE_MULTI_LINE_WITH_CARET'
  | 2

export type ErrorMessageMode__Output = typeof ErrorMessageMode[keyof typeof ErrorMessageMode]
