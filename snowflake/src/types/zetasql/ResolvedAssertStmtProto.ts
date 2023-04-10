// Original file: src/zetasql-snowflake/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedStatementProto as _zetasql_ResolvedStatementProto, ResolvedStatementProto__Output as _zetasql_ResolvedStatementProto__Output } from '../zetasql/ResolvedStatementProto';
import type { AnyResolvedExprProto as _zetasql_AnyResolvedExprProto, AnyResolvedExprProto__Output as _zetasql_AnyResolvedExprProto__Output } from '../zetasql/AnyResolvedExprProto';

export interface ResolvedAssertStmtProto {
  'parent'?: (_zetasql_ResolvedStatementProto | null);
  'expression'?: (_zetasql_AnyResolvedExprProto | null);
  'description'?: (string);
}

export interface ResolvedAssertStmtProto__Output {
  'parent': (_zetasql_ResolvedStatementProto__Output | null);
  'expression': (_zetasql_AnyResolvedExprProto__Output | null);
  'description': (string);
}
