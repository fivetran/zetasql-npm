// Original file: src/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedStatementProto as _zetasql_ResolvedStatementProto, ResolvedStatementProto__Output as _zetasql_ResolvedStatementProto__Output } from '../zetasql/ResolvedStatementProto';
import type { AnyResolvedStatementProto as _zetasql_AnyResolvedStatementProto, AnyResolvedStatementProto__Output as _zetasql_AnyResolvedStatementProto__Output } from '../zetasql/AnyResolvedStatementProto';

export interface ResolvedExplainStmtProto {
  'parent'?: (_zetasql_ResolvedStatementProto | null);
  'statement'?: (_zetasql_AnyResolvedStatementProto | null);
}

export interface ResolvedExplainStmtProto__Output {
  'parent': (_zetasql_ResolvedStatementProto__Output | null);
  'statement': (_zetasql_AnyResolvedStatementProto__Output | null);
}
