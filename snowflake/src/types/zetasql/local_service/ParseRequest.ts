// Original file: src/snowflake/protos/local_service.proto

import type { LanguageOptionsProto as _zetasql_LanguageOptionsProto, LanguageOptionsProto__Output as _zetasql_LanguageOptionsProto__Output } from '../../zetasql/LanguageOptionsProto';

export interface ParseRequest {
  'sqlStatement'?: (string);
  'options'?: (_zetasql_LanguageOptionsProto | null);
  'target'?: "sqlStatement";
}

export interface ParseRequest__Output {
  'sqlStatement'?: (string);
  'options': (_zetasql_LanguageOptionsProto__Output | null);
  'target': "sqlStatement";
}
