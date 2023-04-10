// Original file: src/zetasql/protos/local_service.proto

import type { LanguageVersion as _zetasql_LanguageVersion, LanguageVersion__Output as _zetasql_LanguageVersion__Output } from '../../zetasql/LanguageVersion';

export interface LanguageOptionsRequest {
  'maximumFeatures'?: (boolean);
  'languageVersion'?: (_zetasql_LanguageVersion);
}

export interface LanguageOptionsRequest__Output {
  'maximumFeatures': (boolean);
  'languageVersion': (_zetasql_LanguageVersion__Output);
}
