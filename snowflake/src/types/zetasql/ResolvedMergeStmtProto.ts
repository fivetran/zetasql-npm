// Original file: src/snowflake/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedStatementProto as _zetasql_ResolvedStatementProto, ResolvedStatementProto__Output as _zetasql_ResolvedStatementProto__Output } from '../zetasql/ResolvedStatementProto';
import type { ResolvedTableScanProto as _zetasql_ResolvedTableScanProto, ResolvedTableScanProto__Output as _zetasql_ResolvedTableScanProto__Output } from '../zetasql/ResolvedTableScanProto';
import type { AnyResolvedScanProto as _zetasql_AnyResolvedScanProto, AnyResolvedScanProto__Output as _zetasql_AnyResolvedScanProto__Output } from '../zetasql/AnyResolvedScanProto';
import type { AnyResolvedExprProto as _zetasql_AnyResolvedExprProto, AnyResolvedExprProto__Output as _zetasql_AnyResolvedExprProto__Output } from '../zetasql/AnyResolvedExprProto';
import type { ResolvedMergeWhenProto as _zetasql_ResolvedMergeWhenProto, ResolvedMergeWhenProto__Output as _zetasql_ResolvedMergeWhenProto__Output } from '../zetasql/ResolvedMergeWhenProto';
import type { _zetasql_ResolvedStatementEnums_ObjectAccess, _zetasql_ResolvedStatementEnums_ObjectAccess__Output } from '../zetasql/ResolvedStatementEnums';

export interface ResolvedMergeStmtProto {
  'parent'?: (_zetasql_ResolvedStatementProto | null);
  'tableScan'?: (_zetasql_ResolvedTableScanProto | null);
  'fromScan'?: (_zetasql_AnyResolvedScanProto | null);
  'mergeExpr'?: (_zetasql_AnyResolvedExprProto | null);
  'whenClauseList'?: (_zetasql_ResolvedMergeWhenProto)[];
  'columnAccessList'?: (_zetasql_ResolvedStatementEnums_ObjectAccess)[];
}

export interface ResolvedMergeStmtProto__Output {
  'parent': (_zetasql_ResolvedStatementProto__Output | null);
  'tableScan': (_zetasql_ResolvedTableScanProto__Output | null);
  'fromScan': (_zetasql_AnyResolvedScanProto__Output | null);
  'mergeExpr': (_zetasql_AnyResolvedExprProto__Output | null);
  'whenClauseList': (_zetasql_ResolvedMergeWhenProto__Output)[];
  'columnAccessList': (_zetasql_ResolvedStatementEnums_ObjectAccess__Output)[];
}
