// Original file: src/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedStatementProto as _zetasql_ResolvedStatementProto, ResolvedStatementProto__Output as _zetasql_ResolvedStatementProto__Output } from '../zetasql/ResolvedStatementProto';
import type { ResolvedTableScanProto as _zetasql_ResolvedTableScanProto, ResolvedTableScanProto__Output as _zetasql_ResolvedTableScanProto__Output } from '../zetasql/ResolvedTableScanProto';
import type { AnyResolvedScanProto as _zetasql_AnyResolvedScanProto, AnyResolvedScanProto__Output as _zetasql_AnyResolvedScanProto__Output } from '../zetasql/AnyResolvedScanProto';

export interface ResolvedCloneDataStmtProto {
  'parent'?: (_zetasql_ResolvedStatementProto | null);
  'targetTable'?: (_zetasql_ResolvedTableScanProto | null);
  'cloneFrom'?: (_zetasql_AnyResolvedScanProto | null);
}

export interface ResolvedCloneDataStmtProto__Output {
  'parent': (_zetasql_ResolvedStatementProto__Output | null);
  'targetTable': (_zetasql_ResolvedTableScanProto__Output | null);
  'cloneFrom': (_zetasql_AnyResolvedScanProto__Output | null);
}
