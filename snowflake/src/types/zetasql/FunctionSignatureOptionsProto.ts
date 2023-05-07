// Original file: src/snowflake/protos/zetasql/proto/function.proto

import type { FreestandingDeprecationWarning as _zetasql_FreestandingDeprecationWarning, FreestandingDeprecationWarning__Output as _zetasql_FreestandingDeprecationWarning__Output } from '../zetasql/FreestandingDeprecationWarning';
import type { LanguageFeature as _zetasql_LanguageFeature, LanguageFeature__Output as _zetasql_LanguageFeature__Output } from '../zetasql/LanguageFeature';
import type { FunctionSignatureRewriteOptionsProto as _zetasql_FunctionSignatureRewriteOptionsProto, FunctionSignatureRewriteOptionsProto__Output as _zetasql_FunctionSignatureRewriteOptionsProto__Output } from '../zetasql/FunctionSignatureRewriteOptionsProto';

export interface FunctionSignatureOptionsProto {
  'isDeprecated'?: (boolean);
  'additionalDeprecationWarning'?: (_zetasql_FreestandingDeprecationWarning)[];
  'requiredLanguageFeature'?: (_zetasql_LanguageFeature)[];
  'isAliasedSignature'?: (boolean);
  'propagatesCollation'?: (boolean);
  'usesOperationCollation'?: (boolean);
  'rejectsCollation'?: (boolean);
  'rewriteOptions'?: (_zetasql_FunctionSignatureRewriteOptionsProto | null);
}

export interface FunctionSignatureOptionsProto__Output {
  'isDeprecated': (boolean);
  'additionalDeprecationWarning': (_zetasql_FreestandingDeprecationWarning__Output)[];
  'requiredLanguageFeature': (_zetasql_LanguageFeature__Output)[];
  'isAliasedSignature': (boolean);
  'propagatesCollation': (boolean);
  'usesOperationCollation': (boolean);
  'rejectsCollation': (boolean);
  'rewriteOptions': (_zetasql_FunctionSignatureRewriteOptionsProto__Output | null);
}
