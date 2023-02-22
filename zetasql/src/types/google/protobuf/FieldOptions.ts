// Original file: null

import type { UninterpretedOption as _google_protobuf_UninterpretedOption, UninterpretedOption__Output as _google_protobuf_UninterpretedOption__Output } from '../../google/protobuf/UninterpretedOption';
import type { _zetasql_FieldFormat_Format } from '../../zetasql/FieldFormat';
import type { _zetasql_DeprecatedEncoding_Encoding } from '../../zetasql/DeprecatedEncoding';

// Original file: null

export enum _google_protobuf_FieldOptions_CType {
  STRING = 0,
  CORD = 1,
  STRING_PIECE = 2,
}

// Original file: null

export enum _google_protobuf_FieldOptions_JSType {
  JS_NORMAL = 0,
  JS_STRING = 1,
  JS_NUMBER = 2,
}

export interface FieldOptions {
  'ctype'?: (_google_protobuf_FieldOptions_CType | keyof typeof _google_protobuf_FieldOptions_CType);
  'packed'?: (boolean);
  'deprecated'?: (boolean);
  'lazy'?: (boolean);
  'jstype'?: (_google_protobuf_FieldOptions_JSType | keyof typeof _google_protobuf_FieldOptions_JSType);
  'weak'?: (boolean);
  'uninterpretedOption'?: (_google_protobuf_UninterpretedOption)[];
  '.zetasql.useDefaults'?: (boolean);
  '.zetasql.type'?: (_zetasql_FieldFormat_Format | keyof typeof _zetasql_FieldFormat_Format);
  '.zetasql.encoding'?: (_zetasql_DeprecatedEncoding_Encoding | keyof typeof _zetasql_DeprecatedEncoding_Encoding);
  '.zetasql.format'?: (_zetasql_FieldFormat_Format | keyof typeof _zetasql_FieldFormat_Format);
}

export interface FieldOptions__Output {
  'ctype': (_google_protobuf_FieldOptions_CType);
  'packed': (boolean);
  'deprecated': (boolean);
  'lazy': (boolean);
  'jstype': (_google_protobuf_FieldOptions_JSType);
  'weak': (boolean);
  'uninterpretedOption': (_google_protobuf_UninterpretedOption__Output)[];
  '.zetasql.useDefaults': (boolean);
  '.zetasql.type': (_zetasql_FieldFormat_Format);
  '.zetasql.encoding': (_zetasql_DeprecatedEncoding_Encoding);
  '.zetasql.format': (_zetasql_FieldFormat_Format);
}
