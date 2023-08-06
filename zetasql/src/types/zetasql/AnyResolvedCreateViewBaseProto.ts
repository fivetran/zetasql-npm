// Original file: src/zetasql/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedCreateViewStmtProto as _zetasql_ResolvedCreateViewStmtProto, ResolvedCreateViewStmtProto__Output as _zetasql_ResolvedCreateViewStmtProto__Output } from '../zetasql/ResolvedCreateViewStmtProto';
import type { ResolvedCreateMaterializedViewStmtProto as _zetasql_ResolvedCreateMaterializedViewStmtProto, ResolvedCreateMaterializedViewStmtProto__Output as _zetasql_ResolvedCreateMaterializedViewStmtProto__Output } from '../zetasql/ResolvedCreateMaterializedViewStmtProto';
import type { ResolvedCreateApproxViewStmtProto as _zetasql_ResolvedCreateApproxViewStmtProto, ResolvedCreateApproxViewStmtProto__Output as _zetasql_ResolvedCreateApproxViewStmtProto__Output } from '../zetasql/ResolvedCreateApproxViewStmtProto';

export interface AnyResolvedCreateViewBaseProto {
  'resolvedCreateViewStmtNode'?: (_zetasql_ResolvedCreateViewStmtProto | null);
  'resolvedCreateMaterializedViewStmtNode'?: (_zetasql_ResolvedCreateMaterializedViewStmtProto | null);
  'resolvedCreateApproxViewStmtNode'?: (_zetasql_ResolvedCreateApproxViewStmtProto | null);
  'node'?: "resolvedCreateViewStmtNode"|"resolvedCreateMaterializedViewStmtNode"|"resolvedCreateApproxViewStmtNode";
}

export interface AnyResolvedCreateViewBaseProto__Output {
  'resolvedCreateViewStmtNode'?: (_zetasql_ResolvedCreateViewStmtProto__Output | null);
  'resolvedCreateMaterializedViewStmtNode'?: (_zetasql_ResolvedCreateMaterializedViewStmtProto__Output | null);
  'resolvedCreateApproxViewStmtNode'?: (_zetasql_ResolvedCreateApproxViewStmtProto__Output | null);
  'node': "resolvedCreateViewStmtNode"|"resolvedCreateMaterializedViewStmtNode"|"resolvedCreateApproxViewStmtNode";
}
