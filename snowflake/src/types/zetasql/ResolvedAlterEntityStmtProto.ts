// Original file: src/snowflake/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedAlterObjectStmtProto as _zetasql_ResolvedAlterObjectStmtProto, ResolvedAlterObjectStmtProto__Output as _zetasql_ResolvedAlterObjectStmtProto__Output } from '../zetasql/ResolvedAlterObjectStmtProto';

export interface ResolvedAlterEntityStmtProto {
  'parent'?: (_zetasql_ResolvedAlterObjectStmtProto | null);
  'entityType'?: (string);
}

export interface ResolvedAlterEntityStmtProto__Output {
  'parent': (_zetasql_ResolvedAlterObjectStmtProto__Output | null);
  'entityType': (string);
}
