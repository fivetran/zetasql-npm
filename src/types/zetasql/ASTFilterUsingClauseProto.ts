// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTAlterActionProto as _zetasql_ASTAlterActionProto, ASTAlterActionProto__Output as _zetasql_ASTAlterActionProto__Output } from '../zetasql/ASTAlterActionProto';
import type { AnyASTExpressionProto as _zetasql_AnyASTExpressionProto, AnyASTExpressionProto__Output as _zetasql_AnyASTExpressionProto__Output } from '../zetasql/AnyASTExpressionProto';

export interface ASTFilterUsingClauseProto {
  'parent'?: (_zetasql_ASTAlterActionProto | null);
  'predicate'?: (_zetasql_AnyASTExpressionProto | null);
  'hasFilterKeyword'?: (boolean);
}

export interface ASTFilterUsingClauseProto__Output {
  'parent': (_zetasql_ASTAlterActionProto__Output | null);
  'predicate': (_zetasql_AnyASTExpressionProto__Output | null);
  'hasFilterKeyword': (boolean);
}
