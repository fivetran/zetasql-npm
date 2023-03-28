// Original file: src/protos/zetasql/proto/options.proto

import type { NameResolutionMode as _zetasql_NameResolutionMode, NameResolutionMode__Output as _zetasql_NameResolutionMode__Output } from '../zetasql/NameResolutionMode';
import type { ProductMode as _zetasql_ProductMode, ProductMode__Output as _zetasql_ProductMode__Output } from '../zetasql/ProductMode';
import type { LanguageFeature as _zetasql_LanguageFeature, LanguageFeature__Output as _zetasql_LanguageFeature__Output } from '../zetasql/LanguageFeature';
import type { ResolvedNodeKind as _zetasql_ResolvedNodeKind, ResolvedNodeKind__Output as _zetasql_ResolvedNodeKind__Output } from '../zetasql/ResolvedNodeKind';

export interface LanguageOptionsProto {
  'nameResolutionMode'?: (_zetasql_NameResolutionMode);
  'productMode'?: (_zetasql_ProductMode);
  'errorOnDeprecatedSyntax'?: (boolean);
  'enabledLanguageFeatures'?: (_zetasql_LanguageFeature)[];
  'supportedStatementKinds'?: (_zetasql_ResolvedNodeKind)[];
  'supportedGenericEntityTypes'?: (string)[];
  'reservedKeywords'?: (string)[];
  'supportedGenericSubEntityTypes'?: (string)[];
}

export interface LanguageOptionsProto__Output {
  'nameResolutionMode': (_zetasql_NameResolutionMode__Output);
  'productMode': (_zetasql_ProductMode__Output);
  'errorOnDeprecatedSyntax': (boolean);
  'enabledLanguageFeatures': (_zetasql_LanguageFeature__Output)[];
  'supportedStatementKinds': (_zetasql_ResolvedNodeKind__Output)[];
  'supportedGenericEntityTypes': (string)[];
  'reservedKeywords': (string)[];
  'supportedGenericSubEntityTypes': (string)[];
}
