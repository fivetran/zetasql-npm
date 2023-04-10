// Original file: src/zetasql-snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTUnpivotInItemProto as _zetasql_ASTUnpivotInItemProto, ASTUnpivotInItemProto__Output as _zetasql_ASTUnpivotInItemProto__Output } from '../zetasql/ASTUnpivotInItemProto';

export interface ASTUnpivotInItemListProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'inItems'?: (_zetasql_ASTUnpivotInItemProto)[];
}

export interface ASTUnpivotInItemListProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'inItems': (_zetasql_ASTUnpivotInItemProto__Output)[];
}
