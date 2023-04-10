// Original file: src/snowflake/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedStatementProto as _zetasql_ResolvedStatementProto, ResolvedStatementProto__Output as _zetasql_ResolvedStatementProto__Output } from '../zetasql/ResolvedStatementProto';

export interface ResolvedDropMaterializedViewStmtProto {
  'parent'?: (_zetasql_ResolvedStatementProto | null);
  'isIfExists'?: (boolean);
  'namePath'?: (string)[];
}

export interface ResolvedDropMaterializedViewStmtProto__Output {
  'parent': (_zetasql_ResolvedStatementProto__Output | null);
  'isIfExists': (boolean);
  'namePath': (string)[];
}
