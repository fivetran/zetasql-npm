// Original file: src/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedExprProto as _zetasql_ResolvedExprProto, ResolvedExprProto__Output as _zetasql_ResolvedExprProto__Output } from '../zetasql/ResolvedExprProto';

export interface ResolvedSystemVariableProto {
  'parent'?: (_zetasql_ResolvedExprProto | null);
  'namePath'?: (string)[];
}

export interface ResolvedSystemVariableProto__Output {
  'parent': (_zetasql_ResolvedExprProto__Output | null);
  'namePath': (string)[];
}
