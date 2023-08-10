// Original file: src/snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTExpressionProto as _zetasql_ASTExpressionProto, ASTExpressionProto__Output as _zetasql_ASTExpressionProto__Output } from '../zetasql/ASTExpressionProto';
import type { ASTPathExpressionProto as _zetasql_ASTPathExpressionProto, ASTPathExpressionProto__Output as _zetasql_ASTPathExpressionProto__Output } from '../zetasql/ASTPathExpressionProto';

export interface ASTSequenceArgProto {
  'parent'?: (_zetasql_ASTExpressionProto | null);
  'sequencePath'?: (_zetasql_ASTPathExpressionProto | null);
}

export interface ASTSequenceArgProto__Output {
  'parent': (_zetasql_ASTExpressionProto__Output | null);
  'sequencePath': (_zetasql_ASTPathExpressionProto__Output | null);
}
