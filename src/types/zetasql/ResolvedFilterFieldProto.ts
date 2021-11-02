// Original file: src/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedExprProto as _zetasql_ResolvedExprProto, ResolvedExprProto__Output as _zetasql_ResolvedExprProto__Output } from '../zetasql/ResolvedExprProto';
import type { AnyResolvedExprProto as _zetasql_AnyResolvedExprProto, AnyResolvedExprProto__Output as _zetasql_AnyResolvedExprProto__Output } from '../zetasql/AnyResolvedExprProto';
import type { ResolvedFilterFieldArgProto as _zetasql_ResolvedFilterFieldArgProto, ResolvedFilterFieldArgProto__Output as _zetasql_ResolvedFilterFieldArgProto__Output } from '../zetasql/ResolvedFilterFieldArgProto';

export interface ResolvedFilterFieldProto {
  'parent'?: (_zetasql_ResolvedExprProto | null);
  'expr'?: (_zetasql_AnyResolvedExprProto | null);
  'filterFieldArgList'?: (_zetasql_ResolvedFilterFieldArgProto)[];
}

export interface ResolvedFilterFieldProto__Output {
  'parent': (_zetasql_ResolvedExprProto__Output | null);
  'expr': (_zetasql_AnyResolvedExprProto__Output | null);
  'filterFieldArgList': (_zetasql_ResolvedFilterFieldArgProto__Output)[];
}
