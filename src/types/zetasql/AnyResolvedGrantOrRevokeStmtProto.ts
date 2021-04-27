// Original file: protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedGrantStmtProto as _zetasql_ResolvedGrantStmtProto, ResolvedGrantStmtProto__Output as _zetasql_ResolvedGrantStmtProto__Output } from '../zetasql/ResolvedGrantStmtProto';
import type { ResolvedRevokeStmtProto as _zetasql_ResolvedRevokeStmtProto, ResolvedRevokeStmtProto__Output as _zetasql_ResolvedRevokeStmtProto__Output } from '../zetasql/ResolvedRevokeStmtProto';

export interface AnyResolvedGrantOrRevokeStmtProto {
  'resolvedGrantStmtNode'?: (_zetasql_ResolvedGrantStmtProto | null);
  'resolvedRevokeStmtNode'?: (_zetasql_ResolvedRevokeStmtProto | null);
  'node'?: "resolvedGrantStmtNode"|"resolvedRevokeStmtNode";
}

export interface AnyResolvedGrantOrRevokeStmtProto__Output {
  'resolvedGrantStmtNode'?: (_zetasql_ResolvedGrantStmtProto__Output | null);
  'resolvedRevokeStmtNode'?: (_zetasql_ResolvedRevokeStmtProto__Output | null);
  'node': "resolvedGrantStmtNode"|"resolvedRevokeStmtNode";
}
