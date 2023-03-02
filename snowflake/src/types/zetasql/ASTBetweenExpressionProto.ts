// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTExpressionProto as _zetasql_ASTExpressionProto, ASTExpressionProto__Output as _zetasql_ASTExpressionProto__Output } from '../zetasql/ASTExpressionProto';
import type { AnyASTExpressionProto as _zetasql_AnyASTExpressionProto, AnyASTExpressionProto__Output as _zetasql_AnyASTExpressionProto__Output } from '../zetasql/AnyASTExpressionProto';
import type { ASTLocationProto as _zetasql_ASTLocationProto, ASTLocationProto__Output as _zetasql_ASTLocationProto__Output } from '../zetasql/ASTLocationProto';

export interface ASTBetweenExpressionProto {
  'parent'?: (_zetasql_ASTExpressionProto | null);
  'lhs'?: (_zetasql_AnyASTExpressionProto | null);
  'low'?: (_zetasql_AnyASTExpressionProto | null);
  'high'?: (_zetasql_AnyASTExpressionProto | null);
  'isNot'?: (boolean);
  'betweenLocation'?: (_zetasql_ASTLocationProto | null);
}

export interface ASTBetweenExpressionProto__Output {
  'parent': (_zetasql_ASTExpressionProto__Output | null);
  'lhs': (_zetasql_AnyASTExpressionProto__Output | null);
  'low': (_zetasql_AnyASTExpressionProto__Output | null);
  'high': (_zetasql_AnyASTExpressionProto__Output | null);
  'isNot': (boolean);
  'betweenLocation': (_zetasql_ASTLocationProto__Output | null);
}
