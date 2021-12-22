// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTExpressionProto as _zetasql_ASTExpressionProto, ASTExpressionProto__Output as _zetasql_ASTExpressionProto__Output } from '../zetasql/ASTExpressionProto';
import type { AnyASTExpressionProto as _zetasql_AnyASTExpressionProto, AnyASTExpressionProto__Output as _zetasql_AnyASTExpressionProto__Output } from '../zetasql/AnyASTExpressionProto';

export interface ASTBitwiseShiftExpressionProto {
  'parent'?: (_zetasql_ASTExpressionProto | null);
  'lhs'?: (_zetasql_AnyASTExpressionProto | null);
  'rhs'?: (_zetasql_AnyASTExpressionProto | null);
  'isLeftShift'?: (boolean);
}

export interface ASTBitwiseShiftExpressionProto__Output {
  'parent': (_zetasql_ASTExpressionProto__Output | null);
  'lhs': (_zetasql_AnyASTExpressionProto__Output | null);
  'rhs': (_zetasql_AnyASTExpressionProto__Output | null);
  'isLeftShift': (boolean);
}
