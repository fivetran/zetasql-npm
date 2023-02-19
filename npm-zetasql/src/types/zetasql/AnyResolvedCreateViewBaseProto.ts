// Original file: src/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedCreateViewStmtProto as _zetasql_ResolvedCreateViewStmtProto, ResolvedCreateViewStmtProto__Output as _zetasql_ResolvedCreateViewStmtProto__Output } from '../zetasql/ResolvedCreateViewStmtProto';
import type { ResolvedCreateMaterializedViewStmtProto as _zetasql_ResolvedCreateMaterializedViewStmtProto, ResolvedCreateMaterializedViewStmtProto__Output as _zetasql_ResolvedCreateMaterializedViewStmtProto__Output } from '../zetasql/ResolvedCreateMaterializedViewStmtProto';

export interface AnyResolvedCreateViewBaseProto {
  'resolvedCreateViewStmtNode'?: (_zetasql_ResolvedCreateViewStmtProto | null);
  'resolvedCreateMaterializedViewStmtNode'?: (_zetasql_ResolvedCreateMaterializedViewStmtProto | null);
  'node'?: "resolvedCreateViewStmtNode"|"resolvedCreateMaterializedViewStmtNode";
}

export interface AnyResolvedCreateViewBaseProto__Output {
  'resolvedCreateViewStmtNode'?: (_zetasql_ResolvedCreateViewStmtProto__Output | null);
  'resolvedCreateMaterializedViewStmtNode'?: (_zetasql_ResolvedCreateMaterializedViewStmtProto__Output | null);
  'node': "resolvedCreateViewStmtNode"|"resolvedCreateMaterializedViewStmtNode";
}
