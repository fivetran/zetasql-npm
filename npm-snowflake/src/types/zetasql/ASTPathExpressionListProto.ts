// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTPathExpressionProto as _zetasql_ASTPathExpressionProto, ASTPathExpressionProto__Output as _zetasql_ASTPathExpressionProto__Output } from '../zetasql/ASTPathExpressionProto';

export interface ASTPathExpressionListProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'pathExpressionList'?: (_zetasql_ASTPathExpressionProto)[];
}

export interface ASTPathExpressionListProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'pathExpressionList': (_zetasql_ASTPathExpressionProto__Output)[];
}
