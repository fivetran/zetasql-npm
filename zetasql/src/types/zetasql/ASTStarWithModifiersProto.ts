// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTExpressionProto as _zetasql_ASTExpressionProto, ASTExpressionProto__Output as _zetasql_ASTExpressionProto__Output } from '../zetasql/ASTExpressionProto';
import type { ASTStarModifiersProto as _zetasql_ASTStarModifiersProto, ASTStarModifiersProto__Output as _zetasql_ASTStarModifiersProto__Output } from '../zetasql/ASTStarModifiersProto';

export interface ASTStarWithModifiersProto {
  'parent'?: (_zetasql_ASTExpressionProto | null);
  'modifiers'?: (_zetasql_ASTStarModifiersProto | null);
}

export interface ASTStarWithModifiersProto__Output {
  'parent': (_zetasql_ASTExpressionProto__Output | null);
  'modifiers': (_zetasql_ASTStarModifiersProto__Output | null);
}
