// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTLoopStatementProto as _zetasql_ASTLoopStatementProto, ASTLoopStatementProto__Output as _zetasql_ASTLoopStatementProto__Output } from '../zetasql/ASTLoopStatementProto';
import type { AnyASTExpressionProto as _zetasql_AnyASTExpressionProto, AnyASTExpressionProto__Output as _zetasql_AnyASTExpressionProto__Output } from '../zetasql/AnyASTExpressionProto';

export interface ASTWhileStatementProto {
  'parent'?: (_zetasql_ASTLoopStatementProto | null);
  'condition'?: (_zetasql_AnyASTExpressionProto | null);
}

export interface ASTWhileStatementProto__Output {
  'parent': (_zetasql_ASTLoopStatementProto__Output | null);
  'condition': (_zetasql_AnyASTExpressionProto__Output | null);
}
