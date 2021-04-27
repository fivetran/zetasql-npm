// Original file: null

import type { UninterpretedOption as _google_protobuf_UninterpretedOption, UninterpretedOption__Output as _google_protobuf_UninterpretedOption__Output } from '../../google/protobuf/UninterpretedOption';
import type { LanguageFeatureOptions as _zetasql_LanguageFeatureOptions, LanguageFeatureOptions__Output as _zetasql_LanguageFeatureOptions__Output } from '../../zetasql/LanguageFeatureOptions';
import type { ResolvedASTRewriteOptions as _zetasql_ResolvedASTRewriteOptions, ResolvedASTRewriteOptions__Output as _zetasql_ResolvedASTRewriteOptions__Output } from '../../zetasql/ResolvedASTRewriteOptions';

export interface EnumValueOptions {
  'deprecated'?: (boolean);
  'uninterpretedOption'?: (_google_protobuf_UninterpretedOption)[];
  '.zetasql.languageFeatureOptions'?: (_zetasql_LanguageFeatureOptions | null);
  '.zetasql.rewriteOptions'?: (_zetasql_ResolvedASTRewriteOptions | null);
}

export interface EnumValueOptions__Output {
  'deprecated': (boolean);
  'uninterpretedOption': (_google_protobuf_UninterpretedOption__Output)[];
  '.zetasql.languageFeatureOptions': (_zetasql_LanguageFeatureOptions__Output | null);
  '.zetasql.rewriteOptions': (_zetasql_ResolvedASTRewriteOptions__Output | null);
}
