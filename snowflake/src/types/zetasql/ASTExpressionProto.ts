// Original file: src/snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';

export interface ASTExpressionProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'parenthesized'?: (boolean);
}

export interface ASTExpressionProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'parenthesized': (boolean);
}
