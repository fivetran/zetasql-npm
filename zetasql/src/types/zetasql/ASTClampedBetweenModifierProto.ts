// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { AnyASTExpressionProto as _zetasql_AnyASTExpressionProto, AnyASTExpressionProto__Output as _zetasql_AnyASTExpressionProto__Output } from '../zetasql/AnyASTExpressionProto';

export interface ASTClampedBetweenModifierProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'low'?: (_zetasql_AnyASTExpressionProto | null);
  'high'?: (_zetasql_AnyASTExpressionProto | null);
}

export interface ASTClampedBetweenModifierProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'low': (_zetasql_AnyASTExpressionProto__Output | null);
  'high': (_zetasql_AnyASTExpressionProto__Output | null);
}
