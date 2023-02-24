// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTHintProto as _zetasql_ASTHintProto, ASTHintProto__Output as _zetasql_ASTHintProto__Output } from '../zetasql/ASTHintProto';
import type { ASTOrderingExpressionProto as _zetasql_ASTOrderingExpressionProto, ASTOrderingExpressionProto__Output as _zetasql_ASTOrderingExpressionProto__Output } from '../zetasql/ASTOrderingExpressionProto';

export interface ASTOrderByProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'hint'?: (_zetasql_ASTHintProto | null);
  'orderingExpressions'?: (_zetasql_ASTOrderingExpressionProto)[];
}

export interface ASTOrderByProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'hint': (_zetasql_ASTHintProto__Output | null);
  'orderingExpressions': (_zetasql_ASTOrderingExpressionProto__Output)[];
}
