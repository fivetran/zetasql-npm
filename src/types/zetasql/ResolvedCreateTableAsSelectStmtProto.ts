// Original file: protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedCreateTableStmtBaseProto as _zetasql_ResolvedCreateTableStmtBaseProto, ResolvedCreateTableStmtBaseProto__Output as _zetasql_ResolvedCreateTableStmtBaseProto__Output } from '../zetasql/ResolvedCreateTableStmtBaseProto';
import type { ResolvedOutputColumnProto as _zetasql_ResolvedOutputColumnProto, ResolvedOutputColumnProto__Output as _zetasql_ResolvedOutputColumnProto__Output } from '../zetasql/ResolvedOutputColumnProto';
import type { AnyResolvedScanProto as _zetasql_AnyResolvedScanProto, AnyResolvedScanProto__Output as _zetasql_AnyResolvedScanProto__Output } from '../zetasql/AnyResolvedScanProto';
import type { AnyResolvedExprProto as _zetasql_AnyResolvedExprProto, AnyResolvedExprProto__Output as _zetasql_AnyResolvedExprProto__Output } from '../zetasql/AnyResolvedExprProto';

export interface ResolvedCreateTableAsSelectStmtProto {
  'parent'?: (_zetasql_ResolvedCreateTableStmtBaseProto | null);
  'outputColumnList'?: (_zetasql_ResolvedOutputColumnProto)[];
  'query'?: (_zetasql_AnyResolvedScanProto | null);
  'partitionByList'?: (_zetasql_AnyResolvedExprProto)[];
  'clusterByList'?: (_zetasql_AnyResolvedExprProto)[];
}

export interface ResolvedCreateTableAsSelectStmtProto__Output {
  'parent': (_zetasql_ResolvedCreateTableStmtBaseProto__Output | null);
  'outputColumnList': (_zetasql_ResolvedOutputColumnProto__Output)[];
  'query': (_zetasql_AnyResolvedScanProto__Output | null);
  'partitionByList': (_zetasql_AnyResolvedExprProto__Output)[];
  'clusterByList': (_zetasql_AnyResolvedExprProto__Output)[];
}
