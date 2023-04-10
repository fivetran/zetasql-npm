// Original file: src/zetasql-snowflake/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedCreateTableStmtBaseProto as _zetasql_ResolvedCreateTableStmtBaseProto, ResolvedCreateTableStmtBaseProto__Output as _zetasql_ResolvedCreateTableStmtBaseProto__Output } from '../zetasql/ResolvedCreateTableStmtBaseProto';
import type { ResolvedWithPartitionColumnsProto as _zetasql_ResolvedWithPartitionColumnsProto, ResolvedWithPartitionColumnsProto__Output as _zetasql_ResolvedWithPartitionColumnsProto__Output } from '../zetasql/ResolvedWithPartitionColumnsProto';
import type { ResolvedConnectionProto as _zetasql_ResolvedConnectionProto, ResolvedConnectionProto__Output as _zetasql_ResolvedConnectionProto__Output } from '../zetasql/ResolvedConnectionProto';

export interface ResolvedCreateExternalTableStmtProto {
  'parent'?: (_zetasql_ResolvedCreateTableStmtBaseProto | null);
  'withPartitionColumns'?: (_zetasql_ResolvedWithPartitionColumnsProto | null);
  'connection'?: (_zetasql_ResolvedConnectionProto | null);
}

export interface ResolvedCreateExternalTableStmtProto__Output {
  'parent': (_zetasql_ResolvedCreateTableStmtBaseProto__Output | null);
  'withPartitionColumns': (_zetasql_ResolvedWithPartitionColumnsProto__Output | null);
  'connection': (_zetasql_ResolvedConnectionProto__Output | null);
}
