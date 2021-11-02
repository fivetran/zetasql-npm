// Original file: src/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedArgumentProto as _zetasql_ResolvedArgumentProto, ResolvedArgumentProto__Output as _zetasql_ResolvedArgumentProto__Output } from '../zetasql/ResolvedArgumentProto';
import type { AnyResolvedExprProto as _zetasql_AnyResolvedExprProto, AnyResolvedExprProto__Output as _zetasql_AnyResolvedExprProto__Output } from '../zetasql/AnyResolvedExprProto';

export interface ResolvedOptionProto {
  'parent'?: (_zetasql_ResolvedArgumentProto | null);
  'qualifier'?: (string);
  'name'?: (string);
  'value'?: (_zetasql_AnyResolvedExprProto | null);
}

export interface ResolvedOptionProto__Output {
  'parent': (_zetasql_ResolvedArgumentProto__Output | null);
  'qualifier': (string);
  'name': (string);
  'value': (_zetasql_AnyResolvedExprProto__Output | null);
}
