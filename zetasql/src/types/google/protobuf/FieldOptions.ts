// Original file: null

import type { UninterpretedOption as _google_protobuf_UninterpretedOption, UninterpretedOption__Output as _google_protobuf_UninterpretedOption__Output } from '../../google/protobuf/UninterpretedOption';
import type { _zetasql_FieldFormat_Format, _zetasql_FieldFormat_Format__Output } from '../../zetasql/FieldFormat';
import type { _zetasql_DeprecatedEncoding_Encoding, _zetasql_DeprecatedEncoding_Encoding__Output } from '../../zetasql/DeprecatedEncoding';

// Original file: null

export const _google_protobuf_FieldOptions_CType = {
  STRING: 0,
  CORD: 1,
  STRING_PIECE: 2,
} as const;

export type _google_protobuf_FieldOptions_CType =
  | 'STRING'
  | 0
  | 'CORD'
  | 1
  | 'STRING_PIECE'
  | 2

export type _google_protobuf_FieldOptions_CType__Output = typeof _google_protobuf_FieldOptions_CType[keyof typeof _google_protobuf_FieldOptions_CType]

// Original file: null

export const _google_protobuf_FieldOptions_JSType = {
  JS_NORMAL: 0,
  JS_STRING: 1,
  JS_NUMBER: 2,
} as const;

export type _google_protobuf_FieldOptions_JSType =
  | 'JS_NORMAL'
  | 0
  | 'JS_STRING'
  | 1
  | 'JS_NUMBER'
  | 2

export type _google_protobuf_FieldOptions_JSType__Output = typeof _google_protobuf_FieldOptions_JSType[keyof typeof _google_protobuf_FieldOptions_JSType]

export interface FieldOptions {
  'ctype'?: (_google_protobuf_FieldOptions_CType);
  'packed'?: (boolean);
  'deprecated'?: (boolean);
  'lazy'?: (boolean);
  'jstype'?: (_google_protobuf_FieldOptions_JSType);
  'weak'?: (boolean);
  'uninterpretedOption'?: (_google_protobuf_UninterpretedOption)[];
  '.zetasql.useDefaults'?: (boolean);
  '.zetasql.type'?: (_zetasql_FieldFormat_Format);
  '.zetasql.encoding'?: (_zetasql_DeprecatedEncoding_Encoding);
  '.zetasql.format'?: (_zetasql_FieldFormat_Format);
}

export interface FieldOptions__Output {
  'ctype': (_google_protobuf_FieldOptions_CType__Output);
  'packed': (boolean);
  'deprecated': (boolean);
  'lazy': (boolean);
  'jstype': (_google_protobuf_FieldOptions_JSType__Output);
  'weak': (boolean);
  'uninterpretedOption': (_google_protobuf_UninterpretedOption__Output)[];
  '.zetasql.useDefaults': (boolean);
  '.zetasql.type': (_zetasql_FieldFormat_Format__Output);
  '.zetasql.encoding': (_zetasql_DeprecatedEncoding_Encoding__Output);
  '.zetasql.format': (_zetasql_FieldFormat_Format__Output);
}
