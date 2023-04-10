// Original file: src/snowflake/protos/local_service.proto

import type { LanguageOptionsProto as _zetasql_LanguageOptionsProto, LanguageOptionsProto__Output as _zetasql_LanguageOptionsProto__Output } from '../../zetasql/LanguageOptionsProto';

export interface ExtractTableNamesFromStatementRequest {
  'sqlStatement'?: (string);
  'options'?: (_zetasql_LanguageOptionsProto | null);
  'allowScript'?: (boolean);
}

export interface ExtractTableNamesFromStatementRequest__Output {
  'sqlStatement': (string);
  'options': (_zetasql_LanguageOptionsProto__Output | null);
  'allowScript': (boolean);
}
