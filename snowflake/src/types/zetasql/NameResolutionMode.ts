// Original file: src/snowflake/protos/zetasql/public/options.proto

export const NameResolutionMode = {
  NAME_RESOLUTION_DEFAULT: 0,
  NAME_RESOLUTION_STRICT: 1,
} as const;

export type NameResolutionMode =
  | 'NAME_RESOLUTION_DEFAULT'
  | 0
  | 'NAME_RESOLUTION_STRICT'
  | 1

export type NameResolutionMode__Output = typeof NameResolutionMode[keyof typeof NameResolutionMode]
