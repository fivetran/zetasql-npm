// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTPivotExpressionProto as _zetasql_ASTPivotExpressionProto, ASTPivotExpressionProto__Output as _zetasql_ASTPivotExpressionProto__Output } from '../zetasql/ASTPivotExpressionProto';

export interface ASTPivotExpressionListProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'expressions'?: (_zetasql_ASTPivotExpressionProto)[];
}

export interface ASTPivotExpressionListProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'expressions': (_zetasql_ASTPivotExpressionProto__Output)[];
}
