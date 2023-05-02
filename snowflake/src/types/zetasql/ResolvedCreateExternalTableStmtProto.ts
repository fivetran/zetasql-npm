// Original file: src/snowflake/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedCreateTableStmtBaseProto as _zetasql_ResolvedCreateTableStmtBaseProto, ResolvedCreateTableStmtBaseProto__Output as _zetasql_ResolvedCreateTableStmtBaseProto__Output } from '../zetasql/ResolvedCreateTableStmtBaseProto';
import type { ResolvedWithPartitionColumnsProto as _zetasql_ResolvedWithPartitionColumnsProto, ResolvedWithPartitionColumnsProto__Output as _zetasql_ResolvedWithPartitionColumnsProto__Output } from '../zetasql/ResolvedWithPartitionColumnsProto';

export interface ResolvedCreateExternalTableStmtProto {
  'parent'?: (_zetasql_ResolvedCreateTableStmtBaseProto | null);
  'withPartitionColumns'?: (_zetasql_ResolvedWithPartitionColumnsProto | null);
}

export interface ResolvedCreateExternalTableStmtProto__Output {
  'parent': (_zetasql_ResolvedCreateTableStmtBaseProto__Output | null);
  'withPartitionColumns': (_zetasql_ResolvedWithPartitionColumnsProto__Output | null);
}
