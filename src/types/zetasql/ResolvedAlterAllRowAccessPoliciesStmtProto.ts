// Original file: src/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedAlterObjectStmtProto as _zetasql_ResolvedAlterObjectStmtProto, ResolvedAlterObjectStmtProto__Output as _zetasql_ResolvedAlterObjectStmtProto__Output } from '../zetasql/ResolvedAlterObjectStmtProto';
import type { ResolvedTableScanProto as _zetasql_ResolvedTableScanProto, ResolvedTableScanProto__Output as _zetasql_ResolvedTableScanProto__Output } from '../zetasql/ResolvedTableScanProto';

export interface ResolvedAlterAllRowAccessPoliciesStmtProto {
  'parent'?: (_zetasql_ResolvedAlterObjectStmtProto | null);
  'tableScan'?: (_zetasql_ResolvedTableScanProto | null);
}

export interface ResolvedAlterAllRowAccessPoliciesStmtProto__Output {
  'parent': (_zetasql_ResolvedAlterObjectStmtProto__Output | null);
  'tableScan': (_zetasql_ResolvedTableScanProto__Output | null);
}
