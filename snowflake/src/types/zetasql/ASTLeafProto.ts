// Original file: src/snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTExpressionProto as _zetasql_ASTExpressionProto, ASTExpressionProto__Output as _zetasql_ASTExpressionProto__Output } from '../zetasql/ASTExpressionProto';

export interface ASTLeafProto {
  'parent'?: (_zetasql_ASTExpressionProto | null);
  'image'?: (string);
}

export interface ASTLeafProto__Output {
  'parent': (_zetasql_ASTExpressionProto__Output | null);
  'image': (string);
}
