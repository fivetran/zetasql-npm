// Original file: src/protos/zetasql/proto/function.proto

import type { FreestandingDeprecationWarning as _zetasql_FreestandingDeprecationWarning, FreestandingDeprecationWarning__Output as _zetasql_FreestandingDeprecationWarning__Output } from '../zetasql/FreestandingDeprecationWarning';
import type { LanguageFeature as _zetasql_LanguageFeature } from '../zetasql/LanguageFeature';

export interface FunctionSignatureOptionsProto {
  'isDeprecated'?: (boolean);
  'additionalDeprecationWarning'?: (_zetasql_FreestandingDeprecationWarning)[];
  'requiredLanguageFeature'?: (_zetasql_LanguageFeature | keyof typeof _zetasql_LanguageFeature)[];
  'isAliasedSignature'?: (boolean);
  'propagatesCollation'?: (boolean);
  'usesOperationCollation'?: (boolean);
  'rejectsCollation'?: (boolean);
}

export interface FunctionSignatureOptionsProto__Output {
  'isDeprecated': (boolean);
  'additionalDeprecationWarning': (_zetasql_FreestandingDeprecationWarning__Output)[];
  'requiredLanguageFeature': (_zetasql_LanguageFeature)[];
  'isAliasedSignature': (boolean);
  'propagatesCollation': (boolean);
  'usesOperationCollation': (boolean);
  'rejectsCollation': (boolean);
}
