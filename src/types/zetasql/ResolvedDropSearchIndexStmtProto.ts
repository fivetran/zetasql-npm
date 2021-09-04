// Original file: protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedStatementProto as _zetasql_ResolvedStatementProto, ResolvedStatementProto__Output as _zetasql_ResolvedStatementProto__Output } from '../zetasql/ResolvedStatementProto';

export interface ResolvedDropSearchIndexStmtProto {
  'parent'?: (_zetasql_ResolvedStatementProto | null);
  'isIfExists'?: (boolean);
  'name'?: (string);
  'tableNamePath'?: (string)[];
}

export interface ResolvedDropSearchIndexStmtProto__Output {
  'parent': (_zetasql_ResolvedStatementProto__Output | null);
  'isIfExists': (boolean);
  'name': (string);
  'tableNamePath': (string)[];
}
