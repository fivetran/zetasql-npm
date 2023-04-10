// Original file: src/zetasql/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedArgumentProto as _zetasql_ResolvedArgumentProto, ResolvedArgumentProto__Output as _zetasql_ResolvedArgumentProto__Output } from '../zetasql/ResolvedArgumentProto';
import type { AnyResolvedExprProto as _zetasql_AnyResolvedExprProto, AnyResolvedExprProto__Output as _zetasql_AnyResolvedExprProto__Output } from '../zetasql/AnyResolvedExprProto';

export interface ResolvedDMLValueProto {
  'parent'?: (_zetasql_ResolvedArgumentProto | null);
  'value'?: (_zetasql_AnyResolvedExprProto | null);
}

export interface ResolvedDMLValueProto__Output {
  'parent': (_zetasql_ResolvedArgumentProto__Output | null);
  'value': (_zetasql_AnyResolvedExprProto__Output | null);
}
