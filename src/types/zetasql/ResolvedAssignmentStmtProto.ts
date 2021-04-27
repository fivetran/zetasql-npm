// Original file: protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedStatementProto as _zetasql_ResolvedStatementProto, ResolvedStatementProto__Output as _zetasql_ResolvedStatementProto__Output } from '../zetasql/ResolvedStatementProto';
import type { AnyResolvedExprProto as _zetasql_AnyResolvedExprProto, AnyResolvedExprProto__Output as _zetasql_AnyResolvedExprProto__Output } from '../zetasql/AnyResolvedExprProto';

export interface ResolvedAssignmentStmtProto {
  'parent'?: (_zetasql_ResolvedStatementProto | null);
  'target'?: (_zetasql_AnyResolvedExprProto | null);
  'expr'?: (_zetasql_AnyResolvedExprProto | null);
}

export interface ResolvedAssignmentStmtProto__Output {
  'parent': (_zetasql_ResolvedStatementProto__Output | null);
  'target': (_zetasql_AnyResolvedExprProto__Output | null);
  'expr': (_zetasql_AnyResolvedExprProto__Output | null);
}
