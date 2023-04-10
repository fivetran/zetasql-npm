// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTStarExceptListProto as _zetasql_ASTStarExceptListProto, ASTStarExceptListProto__Output as _zetasql_ASTStarExceptListProto__Output } from '../zetasql/ASTStarExceptListProto';
import type { ASTStarReplaceItemProto as _zetasql_ASTStarReplaceItemProto, ASTStarReplaceItemProto__Output as _zetasql_ASTStarReplaceItemProto__Output } from '../zetasql/ASTStarReplaceItemProto';

export interface ASTStarModifiersProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'exceptList'?: (_zetasql_ASTStarExceptListProto | null);
  'replaceItems'?: (_zetasql_ASTStarReplaceItemProto)[];
}

export interface ASTStarModifiersProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'exceptList': (_zetasql_ASTStarExceptListProto__Output | null);
  'replaceItems': (_zetasql_ASTStarReplaceItemProto__Output)[];
}
