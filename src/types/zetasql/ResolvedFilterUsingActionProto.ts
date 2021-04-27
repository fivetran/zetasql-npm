// Original file: protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedAlterActionProto as _zetasql_ResolvedAlterActionProto, ResolvedAlterActionProto__Output as _zetasql_ResolvedAlterActionProto__Output } from '../zetasql/ResolvedAlterActionProto';
import type { AnyResolvedExprProto as _zetasql_AnyResolvedExprProto, AnyResolvedExprProto__Output as _zetasql_AnyResolvedExprProto__Output } from '../zetasql/AnyResolvedExprProto';

export interface ResolvedFilterUsingActionProto {
  'parent'?: (_zetasql_ResolvedAlterActionProto | null);
  'predicate'?: (_zetasql_AnyResolvedExprProto | null);
  'predicateStr'?: (string);
}

export interface ResolvedFilterUsingActionProto__Output {
  'parent': (_zetasql_ResolvedAlterActionProto__Output | null);
  'predicate': (_zetasql_AnyResolvedExprProto__Output | null);
  'predicateStr': (string);
}
