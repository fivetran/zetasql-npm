// Original file: src/zetasql-snowflake/protos/zetasql/public/options.proto

export const LanguageVersion = {
  VERSION_CURRENT: 1,
  VERSION_1_0: 10000,
  VERSION_1_1: 11000,
  VERSION_1_2: 12000,
  VERSION_1_3: 13000,
  VERSION_1_4: 14000,
  __LanguageVersion__switch_must_have_a_default__: -1,
} as const;

export type LanguageVersion =
  | 'VERSION_CURRENT'
  | 1
  | 'VERSION_1_0'
  | 10000
  | 'VERSION_1_1'
  | 11000
  | 'VERSION_1_2'
  | 12000
  | 'VERSION_1_3'
  | 13000
  | 'VERSION_1_4'
  | 14000
  | '__LanguageVersion__switch_must_have_a_default__'
  | -1

export type LanguageVersion__Output = typeof LanguageVersion[keyof typeof LanguageVersion]
