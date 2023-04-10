// Original file: src/zetasql/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedExprProto as _zetasql_ResolvedExprProto, ResolvedExprProto__Output as _zetasql_ResolvedExprProto__Output } from '../zetasql/ResolvedExprProto';
import type { ResolvedColumnProto as _zetasql_ResolvedColumnProto, ResolvedColumnProto__Output as _zetasql_ResolvedColumnProto__Output } from '../zetasql/ResolvedColumnProto';

export interface ResolvedColumnRefProto {
  'parent'?: (_zetasql_ResolvedExprProto | null);
  'column'?: (_zetasql_ResolvedColumnProto | null);
  'isCorrelated'?: (boolean);
}

export interface ResolvedColumnRefProto__Output {
  'parent': (_zetasql_ResolvedExprProto__Output | null);
  'column': (_zetasql_ResolvedColumnProto__Output | null);
  'isCorrelated': (boolean);
}
