// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTPathExpressionListProto as _zetasql_ASTPathExpressionListProto, ASTPathExpressionListProto__Output as _zetasql_ASTPathExpressionListProto__Output } from '../zetasql/ASTPathExpressionListProto';
import type { ASTUnpivotInItemLabelProto as _zetasql_ASTUnpivotInItemLabelProto, ASTUnpivotInItemLabelProto__Output as _zetasql_ASTUnpivotInItemLabelProto__Output } from '../zetasql/ASTUnpivotInItemLabelProto';

export interface ASTUnpivotInItemProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'unpivotColumns'?: (_zetasql_ASTPathExpressionListProto | null);
  'alias'?: (_zetasql_ASTUnpivotInItemLabelProto | null);
}

export interface ASTUnpivotInItemProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'unpivotColumns': (_zetasql_ASTPathExpressionListProto__Output | null);
  'alias': (_zetasql_ASTUnpivotInItemLabelProto__Output | null);
}
