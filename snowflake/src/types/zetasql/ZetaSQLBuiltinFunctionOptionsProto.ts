// Original file: src/snowflake/protos/zetasql/proto/options.proto

import type { LanguageOptionsProto as _zetasql_LanguageOptionsProto, LanguageOptionsProto__Output as _zetasql_LanguageOptionsProto__Output } from '../zetasql/LanguageOptionsProto';
import type { FunctionSignatureId as _zetasql_FunctionSignatureId, FunctionSignatureId__Output as _zetasql_FunctionSignatureId__Output } from '../zetasql/FunctionSignatureId';
import type { EnabledRewriteProto as _zetasql_EnabledRewriteProto, EnabledRewriteProto__Output as _zetasql_EnabledRewriteProto__Output } from '../zetasql/EnabledRewriteProto';

export interface ZetaSQLBuiltinFunctionOptionsProto {
  'languageOptions'?: (_zetasql_LanguageOptionsProto | null);
  'includeFunctionIds'?: (_zetasql_FunctionSignatureId)[];
  'excludeFunctionIds'?: (_zetasql_FunctionSignatureId)[];
  'enabledRewritesMapEntry'?: (_zetasql_EnabledRewriteProto)[];
}

export interface ZetaSQLBuiltinFunctionOptionsProto__Output {
  'languageOptions': (_zetasql_LanguageOptionsProto__Output | null);
  'includeFunctionIds': (_zetasql_FunctionSignatureId__Output)[];
  'excludeFunctionIds': (_zetasql_FunctionSignatureId__Output)[];
  'enabledRewritesMapEntry': (_zetasql_EnabledRewriteProto__Output)[];
}
