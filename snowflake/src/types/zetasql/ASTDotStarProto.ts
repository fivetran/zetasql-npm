// Original file: src/snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTExpressionProto as _zetasql_ASTExpressionProto, ASTExpressionProto__Output as _zetasql_ASTExpressionProto__Output } from '../zetasql/ASTExpressionProto';
import type { AnyASTExpressionProto as _zetasql_AnyASTExpressionProto, AnyASTExpressionProto__Output as _zetasql_AnyASTExpressionProto__Output } from '../zetasql/AnyASTExpressionProto';

export interface ASTDotStarProto {
  'parent'?: (_zetasql_ASTExpressionProto | null);
  'expr'?: (_zetasql_AnyASTExpressionProto | null);
}

export interface ASTDotStarProto__Output {
  'parent': (_zetasql_ASTExpressionProto__Output | null);
  'expr': (_zetasql_AnyASTExpressionProto__Output | null);
}
