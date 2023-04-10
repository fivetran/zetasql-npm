// Original file: src/zetasql-snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTExpressionProto as _zetasql_ASTExpressionProto, ASTExpressionProto__Output as _zetasql_ASTExpressionProto__Output } from '../zetasql/ASTExpressionProto';
import type { AnyASTExpressionProto as _zetasql_AnyASTExpressionProto, AnyASTExpressionProto__Output as _zetasql_AnyASTExpressionProto__Output } from '../zetasql/AnyASTExpressionProto';
import type { ASTStarModifiersProto as _zetasql_ASTStarModifiersProto, ASTStarModifiersProto__Output as _zetasql_ASTStarModifiersProto__Output } from '../zetasql/ASTStarModifiersProto';

export interface ASTDotStarWithModifiersProto {
  'parent'?: (_zetasql_ASTExpressionProto | null);
  'expr'?: (_zetasql_AnyASTExpressionProto | null);
  'modifiers'?: (_zetasql_ASTStarModifiersProto | null);
}

export interface ASTDotStarWithModifiersProto__Output {
  'parent': (_zetasql_ASTExpressionProto__Output | null);
  'expr': (_zetasql_AnyASTExpressionProto__Output | null);
  'modifiers': (_zetasql_ASTStarModifiersProto__Output | null);
}
