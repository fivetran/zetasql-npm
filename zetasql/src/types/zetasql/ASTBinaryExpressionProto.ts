// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTExpressionProto as _zetasql_ASTExpressionProto, ASTExpressionProto__Output as _zetasql_ASTExpressionProto__Output } from '../zetasql/ASTExpressionProto';
import type { _zetasql_ASTBinaryExpressionEnums_Op, _zetasql_ASTBinaryExpressionEnums_Op__Output } from '../zetasql/ASTBinaryExpressionEnums';
import type { AnyASTExpressionProto as _zetasql_AnyASTExpressionProto, AnyASTExpressionProto__Output as _zetasql_AnyASTExpressionProto__Output } from '../zetasql/AnyASTExpressionProto';

export interface ASTBinaryExpressionProto {
  'parent'?: (_zetasql_ASTExpressionProto | null);
  'op'?: (_zetasql_ASTBinaryExpressionEnums_Op);
  'isNot'?: (boolean);
  'lhs'?: (_zetasql_AnyASTExpressionProto | null);
  'rhs'?: (_zetasql_AnyASTExpressionProto | null);
}

export interface ASTBinaryExpressionProto__Output {
  'parent': (_zetasql_ASTExpressionProto__Output | null);
  'op': (_zetasql_ASTBinaryExpressionEnums_Op__Output);
  'isNot': (boolean);
  'lhs': (_zetasql_AnyASTExpressionProto__Output | null);
  'rhs': (_zetasql_AnyASTExpressionProto__Output | null);
}
