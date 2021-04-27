// Original file: protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedCreateStatementProto as _zetasql_ResolvedCreateStatementProto, ResolvedCreateStatementProto__Output as _zetasql_ResolvedCreateStatementProto__Output } from '../zetasql/ResolvedCreateStatementProto';
import type { AnyResolvedExprProto as _zetasql_AnyResolvedExprProto, AnyResolvedExprProto__Output as _zetasql_AnyResolvedExprProto__Output } from '../zetasql/AnyResolvedExprProto';

export interface ResolvedCreateConstantStmtProto {
  'parent'?: (_zetasql_ResolvedCreateStatementProto | null);
  'expr'?: (_zetasql_AnyResolvedExprProto | null);
}

export interface ResolvedCreateConstantStmtProto__Output {
  'parent': (_zetasql_ResolvedCreateStatementProto__Output | null);
  'expr': (_zetasql_AnyResolvedExprProto__Output | null);
}
