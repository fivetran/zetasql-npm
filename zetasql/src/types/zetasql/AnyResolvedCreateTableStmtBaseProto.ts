// Original file: src/zetasql/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedCreateTableAsSelectStmtProto as _zetasql_ResolvedCreateTableAsSelectStmtProto, ResolvedCreateTableAsSelectStmtProto__Output as _zetasql_ResolvedCreateTableAsSelectStmtProto__Output } from '../zetasql/ResolvedCreateTableAsSelectStmtProto';
import type { ResolvedCreateExternalTableStmtProto as _zetasql_ResolvedCreateExternalTableStmtProto, ResolvedCreateExternalTableStmtProto__Output as _zetasql_ResolvedCreateExternalTableStmtProto__Output } from '../zetasql/ResolvedCreateExternalTableStmtProto';
import type { ResolvedCreateTableStmtProto as _zetasql_ResolvedCreateTableStmtProto, ResolvedCreateTableStmtProto__Output as _zetasql_ResolvedCreateTableStmtProto__Output } from '../zetasql/ResolvedCreateTableStmtProto';

export interface AnyResolvedCreateTableStmtBaseProto {
  'resolvedCreateTableAsSelectStmtNode'?: (_zetasql_ResolvedCreateTableAsSelectStmtProto | null);
  'resolvedCreateExternalTableStmtNode'?: (_zetasql_ResolvedCreateExternalTableStmtProto | null);
  'resolvedCreateTableStmtNode'?: (_zetasql_ResolvedCreateTableStmtProto | null);
  'node'?: "resolvedCreateTableAsSelectStmtNode"|"resolvedCreateExternalTableStmtNode"|"resolvedCreateTableStmtNode";
}

export interface AnyResolvedCreateTableStmtBaseProto__Output {
  'resolvedCreateTableAsSelectStmtNode'?: (_zetasql_ResolvedCreateTableAsSelectStmtProto__Output | null);
  'resolvedCreateExternalTableStmtNode'?: (_zetasql_ResolvedCreateExternalTableStmtProto__Output | null);
  'resolvedCreateTableStmtNode'?: (_zetasql_ResolvedCreateTableStmtProto__Output | null);
  'node': "resolvedCreateTableAsSelectStmtNode"|"resolvedCreateExternalTableStmtNode"|"resolvedCreateTableStmtNode";
}
