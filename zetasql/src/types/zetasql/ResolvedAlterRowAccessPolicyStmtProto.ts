// Original file: src/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedAlterObjectStmtProto as _zetasql_ResolvedAlterObjectStmtProto, ResolvedAlterObjectStmtProto__Output as _zetasql_ResolvedAlterObjectStmtProto__Output } from '../zetasql/ResolvedAlterObjectStmtProto';
import type { ResolvedTableScanProto as _zetasql_ResolvedTableScanProto, ResolvedTableScanProto__Output as _zetasql_ResolvedTableScanProto__Output } from '../zetasql/ResolvedTableScanProto';

export interface ResolvedAlterRowAccessPolicyStmtProto {
  'parent'?: (_zetasql_ResolvedAlterObjectStmtProto | null);
  'name'?: (string);
  'tableScan'?: (_zetasql_ResolvedTableScanProto | null);
}

export interface ResolvedAlterRowAccessPolicyStmtProto__Output {
  'parent': (_zetasql_ResolvedAlterObjectStmtProto__Output | null);
  'name': (string);
  'tableScan': (_zetasql_ResolvedTableScanProto__Output | null);
}
