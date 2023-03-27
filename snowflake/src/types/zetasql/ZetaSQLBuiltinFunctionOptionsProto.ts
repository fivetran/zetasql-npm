// Original file: src/protos/zetasql/proto/options.proto

import type { LanguageOptionsProto as _zetasql_LanguageOptionsProto, LanguageOptionsProto__Output as _zetasql_LanguageOptionsProto__Output } from '../zetasql/LanguageOptionsProto';
import type { FunctionSignatureId as _zetasql_FunctionSignatureId } from '../zetasql/FunctionSignatureId';

export interface ZetaSQLBuiltinFunctionOptionsProto {
  'languageOptions'?: (_zetasql_LanguageOptionsProto | null);
  'includeFunctionIds'?: (_zetasql_FunctionSignatureId | keyof typeof _zetasql_FunctionSignatureId)[];
  'excludeFunctionIds'?: (_zetasql_FunctionSignatureId | keyof typeof _zetasql_FunctionSignatureId)[];
}

export interface ZetaSQLBuiltinFunctionOptionsProto__Output {
  'languageOptions': (_zetasql_LanguageOptionsProto__Output | null);
  'includeFunctionIds': (_zetasql_FunctionSignatureId)[];
  'excludeFunctionIds': (_zetasql_FunctionSignatureId)[];
}
