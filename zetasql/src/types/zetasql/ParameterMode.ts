// Original file: src/zetasql/protos/zetasql/public/options.proto

export const ParameterMode = {
  PARAMETER_NAMED: 0,
  PARAMETER_POSITIONAL: 1,
  PARAMETER_NONE: 2,
} as const;

export type ParameterMode =
  | 'PARAMETER_NAMED'
  | 0
  | 'PARAMETER_POSITIONAL'
  | 1
  | 'PARAMETER_NONE'
  | 2

export type ParameterMode__Output = typeof ParameterMode[keyof typeof ParameterMode]
