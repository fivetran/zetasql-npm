// Original file: src/zetasql/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedStatementProto as _zetasql_ResolvedStatementProto, ResolvedStatementProto__Output as _zetasql_ResolvedStatementProto__Output } from '../zetasql/ResolvedStatementProto';

export interface ResolvedRenameStmtProto {
  'parent'?: (_zetasql_ResolvedStatementProto | null);
  'objectType'?: (string);
  'oldNamePath'?: (string)[];
  'newNamePath'?: (string)[];
}

export interface ResolvedRenameStmtProto__Output {
  'parent': (_zetasql_ResolvedStatementProto__Output | null);
  'objectType': (string);
  'oldNamePath': (string)[];
  'newNamePath': (string)[];
}
