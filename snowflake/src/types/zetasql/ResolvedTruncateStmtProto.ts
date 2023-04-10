// Original file: src/snowflake/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedStatementProto as _zetasql_ResolvedStatementProto, ResolvedStatementProto__Output as _zetasql_ResolvedStatementProto__Output } from '../zetasql/ResolvedStatementProto';
import type { ResolvedTableScanProto as _zetasql_ResolvedTableScanProto, ResolvedTableScanProto__Output as _zetasql_ResolvedTableScanProto__Output } from '../zetasql/ResolvedTableScanProto';
import type { AnyResolvedExprProto as _zetasql_AnyResolvedExprProto, AnyResolvedExprProto__Output as _zetasql_AnyResolvedExprProto__Output } from '../zetasql/AnyResolvedExprProto';

export interface ResolvedTruncateStmtProto {
  'parent'?: (_zetasql_ResolvedStatementProto | null);
  'tableScan'?: (_zetasql_ResolvedTableScanProto | null);
  'whereExpr'?: (_zetasql_AnyResolvedExprProto | null);
}

export interface ResolvedTruncateStmtProto__Output {
  'parent': (_zetasql_ResolvedStatementProto__Output | null);
  'tableScan': (_zetasql_ResolvedTableScanProto__Output | null);
  'whereExpr': (_zetasql_AnyResolvedExprProto__Output | null);
}
