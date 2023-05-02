// Original file: src/snowflake/protos/local_service.proto

import type { LanguageOptionsProto as _zetasql_LanguageOptionsProto, LanguageOptionsProto__Output as _zetasql_LanguageOptionsProto__Output } from '../../zetasql/LanguageOptionsProto';
import type { ParseResumeLocationProto as _zetasql_ParseResumeLocationProto, ParseResumeLocationProto__Output as _zetasql_ParseResumeLocationProto__Output } from '../../zetasql/ParseResumeLocationProto';

export interface ParseRequest {
  'sqlStatement'?: (string);
  'options'?: (_zetasql_LanguageOptionsProto | null);
  'parseResumeLocation'?: (_zetasql_ParseResumeLocationProto | null);
  'allowScript'?: (boolean);
  'target'?: "sqlStatement"|"parseResumeLocation";
}

export interface ParseRequest__Output {
  'sqlStatement'?: (string);
  'options': (_zetasql_LanguageOptionsProto__Output | null);
  'parseResumeLocation'?: (_zetasql_ParseResumeLocationProto__Output | null);
  'allowScript': (boolean);
  'target': "sqlStatement"|"parseResumeLocation";
}
