// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTUpdateItemProto as _zetasql_ASTUpdateItemProto, ASTUpdateItemProto__Output as _zetasql_ASTUpdateItemProto__Output } from '../zetasql/ASTUpdateItemProto';

export interface ASTUpdateItemListProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'updateItems'?: (_zetasql_ASTUpdateItemProto)[];
}

export interface ASTUpdateItemListProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'updateItems': (_zetasql_ASTUpdateItemProto__Output)[];
}
