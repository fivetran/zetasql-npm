// Original file: protos/local_service.proto

import type { ParseResumeLocationProto as _zetasql_ParseResumeLocationProto, ParseResumeLocationProto__Output as _zetasql_ParseResumeLocationProto__Output } from '../../zetasql/ParseResumeLocationProto';
import type { LanguageOptionsProto as _zetasql_LanguageOptionsProto, LanguageOptionsProto__Output as _zetasql_LanguageOptionsProto__Output } from '../../zetasql/LanguageOptionsProto';

export interface ExtractTableNamesFromNextStatementRequest {
  'parseResumeLocation'?: (_zetasql_ParseResumeLocationProto | null);
  'options'?: (_zetasql_LanguageOptionsProto | null);
}

export interface ExtractTableNamesFromNextStatementRequest__Output {
  'parseResumeLocation': (_zetasql_ParseResumeLocationProto__Output | null);
  'options': (_zetasql_LanguageOptionsProto__Output | null);
}
