// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { AnyASTExpressionProto as _zetasql_AnyASTExpressionProto, AnyASTExpressionProto__Output as _zetasql_AnyASTExpressionProto__Output } from '../zetasql/AnyASTExpressionProto';

export interface ASTLimitOffsetProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'limit'?: (_zetasql_AnyASTExpressionProto | null);
  'offset'?: (_zetasql_AnyASTExpressionProto | null);
}

export interface ASTLimitOffsetProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'limit': (_zetasql_AnyASTExpressionProto__Output | null);
  'offset': (_zetasql_AnyASTExpressionProto__Output | null);
}
