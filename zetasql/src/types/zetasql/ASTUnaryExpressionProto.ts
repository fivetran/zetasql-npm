// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTExpressionProto as _zetasql_ASTExpressionProto, ASTExpressionProto__Output as _zetasql_ASTExpressionProto__Output } from '../zetasql/ASTExpressionProto';
import type { AnyASTExpressionProto as _zetasql_AnyASTExpressionProto, AnyASTExpressionProto__Output as _zetasql_AnyASTExpressionProto__Output } from '../zetasql/AnyASTExpressionProto';
import type { _zetasql_ASTUnaryExpressionEnums_Op, _zetasql_ASTUnaryExpressionEnums_Op__Output } from '../zetasql/ASTUnaryExpressionEnums';

export interface ASTUnaryExpressionProto {
  'parent'?: (_zetasql_ASTExpressionProto | null);
  'operand'?: (_zetasql_AnyASTExpressionProto | null);
  'op'?: (_zetasql_ASTUnaryExpressionEnums_Op);
}

export interface ASTUnaryExpressionProto__Output {
  'parent': (_zetasql_ASTExpressionProto__Output | null);
  'operand': (_zetasql_AnyASTExpressionProto__Output | null);
  'op': (_zetasql_ASTUnaryExpressionEnums_Op__Output);
}
