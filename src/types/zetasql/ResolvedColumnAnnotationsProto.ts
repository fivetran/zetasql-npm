// Original file: protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedArgumentProto as _zetasql_ResolvedArgumentProto, ResolvedArgumentProto__Output as _zetasql_ResolvedArgumentProto__Output } from '../zetasql/ResolvedArgumentProto';
import type { ResolvedOptionProto as _zetasql_ResolvedOptionProto, ResolvedOptionProto__Output as _zetasql_ResolvedOptionProto__Output } from '../zetasql/ResolvedOptionProto';
import type { ResolvedColumnAnnotationsProto as _zetasql_ResolvedColumnAnnotationsProto, ResolvedColumnAnnotationsProto__Output as _zetasql_ResolvedColumnAnnotationsProto__Output } from '../zetasql/ResolvedColumnAnnotationsProto';
import type { TypeParametersProto as _zetasql_TypeParametersProto, TypeParametersProto__Output as _zetasql_TypeParametersProto__Output } from '../zetasql/TypeParametersProto';
import type { AnyResolvedExprProto as _zetasql_AnyResolvedExprProto, AnyResolvedExprProto__Output as _zetasql_AnyResolvedExprProto__Output } from '../zetasql/AnyResolvedExprProto';

export interface ResolvedColumnAnnotationsProto {
  'parent'?: (_zetasql_ResolvedArgumentProto | null);
  'notNull'?: (boolean);
  'optionList'?: (_zetasql_ResolvedOptionProto)[];
  'childList'?: (_zetasql_ResolvedColumnAnnotationsProto)[];
  'typeParameters'?: (_zetasql_TypeParametersProto | null);
  'collationName'?: (_zetasql_AnyResolvedExprProto | null);
}

export interface ResolvedColumnAnnotationsProto__Output {
  'parent': (_zetasql_ResolvedArgumentProto__Output | null);
  'notNull': (boolean);
  'optionList': (_zetasql_ResolvedOptionProto__Output)[];
  'childList': (_zetasql_ResolvedColumnAnnotationsProto__Output)[];
  'typeParameters': (_zetasql_TypeParametersProto__Output | null);
  'collationName': (_zetasql_AnyResolvedExprProto__Output | null);
}
