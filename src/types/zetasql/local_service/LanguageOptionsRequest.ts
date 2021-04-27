// Original file: protos/local_service.proto

import type { LanguageVersion as _zetasql_LanguageVersion } from '../../zetasql/LanguageVersion';

export interface LanguageOptionsRequest {
  'maximumFeatures'?: (boolean);
  'languageVersion'?: (_zetasql_LanguageVersion | keyof typeof _zetasql_LanguageVersion);
}

export interface LanguageOptionsRequest__Output {
  'maximumFeatures': (boolean);
  'languageVersion': (keyof typeof _zetasql_LanguageVersion);
}
