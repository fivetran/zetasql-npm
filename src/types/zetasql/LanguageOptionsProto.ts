// Original file: protos/zetasql/proto/options.proto

import type { NameResolutionMode as _zetasql_NameResolutionMode } from '../zetasql/NameResolutionMode';
import type { ProductMode as _zetasql_ProductMode } from '../zetasql/ProductMode';
import type { LanguageFeature as _zetasql_LanguageFeature } from '../zetasql/LanguageFeature';
import type { ResolvedNodeKind as _zetasql_ResolvedNodeKind } from '../zetasql/ResolvedNodeKind';

export interface LanguageOptionsProto {
  'nameResolutionMode'?: (_zetasql_NameResolutionMode | keyof typeof _zetasql_NameResolutionMode);
  'productMode'?: (_zetasql_ProductMode | keyof typeof _zetasql_ProductMode);
  'errorOnDeprecatedSyntax'?: (boolean);
  'enabledLanguageFeatures'?: (_zetasql_LanguageFeature | keyof typeof _zetasql_LanguageFeature)[];
  'supportedStatementKinds'?: (_zetasql_ResolvedNodeKind | keyof typeof _zetasql_ResolvedNodeKind)[];
  'supportedGenericEntityTypes'?: (string)[];
}

export interface LanguageOptionsProto__Output {
  'nameResolutionMode': (_zetasql_NameResolutionMode);
  'productMode': (_zetasql_ProductMode);
  'errorOnDeprecatedSyntax': (boolean);
  'enabledLanguageFeatures': (_zetasql_LanguageFeature)[];
  'supportedStatementKinds': (_zetasql_ResolvedNodeKind)[];
  'supportedGenericEntityTypes': (string)[];
}
