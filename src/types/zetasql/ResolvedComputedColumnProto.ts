// Original file: src/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedArgumentProto as _zetasql_ResolvedArgumentProto, ResolvedArgumentProto__Output as _zetasql_ResolvedArgumentProto__Output } from '../zetasql/ResolvedArgumentProto';
import type { ResolvedColumnProto as _zetasql_ResolvedColumnProto, ResolvedColumnProto__Output as _zetasql_ResolvedColumnProto__Output } from '../zetasql/ResolvedColumnProto';
import type { AnyResolvedExprProto as _zetasql_AnyResolvedExprProto, AnyResolvedExprProto__Output as _zetasql_AnyResolvedExprProto__Output } from '../zetasql/AnyResolvedExprProto';

export interface ResolvedComputedColumnProto {
  'parent'?: (_zetasql_ResolvedArgumentProto | null);
  'column'?: (_zetasql_ResolvedColumnProto | null);
  'expr'?: (_zetasql_AnyResolvedExprProto | null);
}

export interface ResolvedComputedColumnProto__Output {
  'parent': (_zetasql_ResolvedArgumentProto__Output | null);
  'column': (_zetasql_ResolvedColumnProto__Output | null);
  'expr': (_zetasql_AnyResolvedExprProto__Output | null);
}
