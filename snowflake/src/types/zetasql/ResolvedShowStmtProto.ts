// Original file: src/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedStatementProto as _zetasql_ResolvedStatementProto, ResolvedStatementProto__Output as _zetasql_ResolvedStatementProto__Output } from '../zetasql/ResolvedStatementProto';
import type { ResolvedLiteralProto as _zetasql_ResolvedLiteralProto, ResolvedLiteralProto__Output as _zetasql_ResolvedLiteralProto__Output } from '../zetasql/ResolvedLiteralProto';

export interface ResolvedShowStmtProto {
  'parent'?: (_zetasql_ResolvedStatementProto | null);
  'identifier'?: (string);
  'namePath'?: (string)[];
  'likeExpr'?: (_zetasql_ResolvedLiteralProto | null);
}

export interface ResolvedShowStmtProto__Output {
  'parent': (_zetasql_ResolvedStatementProto__Output | null);
  'identifier': (string);
  'namePath': (string)[];
  'likeExpr': (_zetasql_ResolvedLiteralProto__Output | null);
}
