// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTExpressionProto as _zetasql_ASTExpressionProto, ASTExpressionProto__Output as _zetasql_ASTExpressionProto__Output } from '../zetasql/ASTExpressionProto';
import type { AnyASTExpressionProto as _zetasql_AnyASTExpressionProto, AnyASTExpressionProto__Output as _zetasql_AnyASTExpressionProto__Output } from '../zetasql/AnyASTExpressionProto';

export interface ASTLambdaProto {
  'parent'?: (_zetasql_ASTExpressionProto | null);
  'argumentList'?: (_zetasql_AnyASTExpressionProto | null);
  'body'?: (_zetasql_AnyASTExpressionProto | null);
}

export interface ASTLambdaProto__Output {
  'parent': (_zetasql_ASTExpressionProto__Output | null);
  'argumentList': (_zetasql_AnyASTExpressionProto__Output | null);
  'body': (_zetasql_AnyASTExpressionProto__Output | null);
}
