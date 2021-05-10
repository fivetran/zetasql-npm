// Original file: protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedArgumentProto as _zetasql_ResolvedArgumentProto, ResolvedArgumentProto__Output as _zetasql_ResolvedArgumentProto__Output } from '../zetasql/ResolvedArgumentProto';
import type { ResolvedColumnRefProto as _zetasql_ResolvedColumnRefProto, ResolvedColumnRefProto__Output as _zetasql_ResolvedColumnRefProto__Output } from '../zetasql/ResolvedColumnRefProto';
import type { AnyResolvedExprProto as _zetasql_AnyResolvedExprProto, AnyResolvedExprProto__Output as _zetasql_AnyResolvedExprProto__Output } from '../zetasql/AnyResolvedExprProto';
import type { _zetasql_ResolvedOrderByItemEnums_NullOrderMode } from '../zetasql/ResolvedOrderByItemEnums';

export interface ResolvedOrderByItemProto {
  'parent'?: (_zetasql_ResolvedArgumentProto | null);
  'columnRef'?: (_zetasql_ResolvedColumnRefProto | null);
  'collationName'?: (_zetasql_AnyResolvedExprProto | null);
  'isDescending'?: (boolean);
  'nullOrder'?: (_zetasql_ResolvedOrderByItemEnums_NullOrderMode | keyof typeof _zetasql_ResolvedOrderByItemEnums_NullOrderMode);
}

export interface ResolvedOrderByItemProto__Output {
  'parent': (_zetasql_ResolvedArgumentProto__Output | null);
  'columnRef': (_zetasql_ResolvedColumnRefProto__Output | null);
  'collationName': (_zetasql_AnyResolvedExprProto__Output | null);
  'isDescending': (boolean);
  'nullOrder': (_zetasql_ResolvedOrderByItemEnums_NullOrderMode);
}
