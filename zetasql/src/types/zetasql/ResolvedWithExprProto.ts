// Original file: src/zetasql/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedExprProto as _zetasql_ResolvedExprProto, ResolvedExprProto__Output as _zetasql_ResolvedExprProto__Output } from '../zetasql/ResolvedExprProto';
import type { ResolvedComputedColumnProto as _zetasql_ResolvedComputedColumnProto, ResolvedComputedColumnProto__Output as _zetasql_ResolvedComputedColumnProto__Output } from '../zetasql/ResolvedComputedColumnProto';
import type { AnyResolvedExprProto as _zetasql_AnyResolvedExprProto, AnyResolvedExprProto__Output as _zetasql_AnyResolvedExprProto__Output } from '../zetasql/AnyResolvedExprProto';

export interface ResolvedWithExprProto {
  'parent'?: (_zetasql_ResolvedExprProto | null);
  'assignmentList'?: (_zetasql_ResolvedComputedColumnProto)[];
  'expr'?: (_zetasql_AnyResolvedExprProto | null);
}

export interface ResolvedWithExprProto__Output {
  'parent': (_zetasql_ResolvedExprProto__Output | null);
  'assignmentList': (_zetasql_ResolvedComputedColumnProto__Output)[];
  'expr': (_zetasql_AnyResolvedExprProto__Output | null);
}
