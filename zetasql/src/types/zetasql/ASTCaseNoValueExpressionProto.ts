// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTExpressionProto as _zetasql_ASTExpressionProto, ASTExpressionProto__Output as _zetasql_ASTExpressionProto__Output } from '../zetasql/ASTExpressionProto';
import type { AnyASTExpressionProto as _zetasql_AnyASTExpressionProto, AnyASTExpressionProto__Output as _zetasql_AnyASTExpressionProto__Output } from '../zetasql/AnyASTExpressionProto';

export interface ASTCaseNoValueExpressionProto {
  'parent'?: (_zetasql_ASTExpressionProto | null);
  'arguments'?: (_zetasql_AnyASTExpressionProto)[];
}

export interface ASTCaseNoValueExpressionProto__Output {
  'parent': (_zetasql_ASTExpressionProto__Output | null);
  'arguments': (_zetasql_AnyASTExpressionProto__Output)[];
}
