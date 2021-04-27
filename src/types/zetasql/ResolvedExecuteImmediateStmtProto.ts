// Original file: protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedStatementProto as _zetasql_ResolvedStatementProto, ResolvedStatementProto__Output as _zetasql_ResolvedStatementProto__Output } from '../zetasql/ResolvedStatementProto';
import type { AnyResolvedExprProto as _zetasql_AnyResolvedExprProto, AnyResolvedExprProto__Output as _zetasql_AnyResolvedExprProto__Output } from '../zetasql/AnyResolvedExprProto';
import type { ResolvedExecuteImmediateArgumentProto as _zetasql_ResolvedExecuteImmediateArgumentProto, ResolvedExecuteImmediateArgumentProto__Output as _zetasql_ResolvedExecuteImmediateArgumentProto__Output } from '../zetasql/ResolvedExecuteImmediateArgumentProto';

export interface ResolvedExecuteImmediateStmtProto {
  'parent'?: (_zetasql_ResolvedStatementProto | null);
  'sql'?: (_zetasql_AnyResolvedExprProto | null);
  'intoIdentifierList'?: (string)[];
  'usingArgumentList'?: (_zetasql_ResolvedExecuteImmediateArgumentProto)[];
}

export interface ResolvedExecuteImmediateStmtProto__Output {
  'parent': (_zetasql_ResolvedStatementProto__Output | null);
  'sql': (_zetasql_AnyResolvedExprProto__Output | null);
  'intoIdentifierList': (string)[];
  'usingArgumentList': (_zetasql_ResolvedExecuteImmediateArgumentProto__Output)[];
}
