// Original file: src/zetasql/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedStatementProto as _zetasql_ResolvedStatementProto, ResolvedStatementProto__Output as _zetasql_ResolvedStatementProto__Output } from '../zetasql/ResolvedStatementProto';
import type { AnyResolvedExprProto as _zetasql_AnyResolvedExprProto, AnyResolvedExprProto__Output as _zetasql_AnyResolvedExprProto__Output } from '../zetasql/AnyResolvedExprProto';

export interface ResolvedUndropStmtProto {
  'parent'?: (_zetasql_ResolvedStatementProto | null);
  'schemaObjectKind'?: (string);
  'isIfNotExists'?: (boolean);
  'namePath'?: (string)[];
  'forSystemTimeExpr'?: (_zetasql_AnyResolvedExprProto | null);
}

export interface ResolvedUndropStmtProto__Output {
  'parent': (_zetasql_ResolvedStatementProto__Output | null);
  'schemaObjectKind': (string);
  'isIfNotExists': (boolean);
  'namePath': (string)[];
  'forSystemTimeExpr': (_zetasql_AnyResolvedExprProto__Output | null);
}
