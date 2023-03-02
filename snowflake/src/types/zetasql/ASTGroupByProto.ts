// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTHintProto as _zetasql_ASTHintProto, ASTHintProto__Output as _zetasql_ASTHintProto__Output } from '../zetasql/ASTHintProto';
import type { ASTGroupingItemProto as _zetasql_ASTGroupingItemProto, ASTGroupingItemProto__Output as _zetasql_ASTGroupingItemProto__Output } from '../zetasql/ASTGroupingItemProto';

export interface ASTGroupByProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'hint'?: (_zetasql_ASTHintProto | null);
  'groupingItems'?: (_zetasql_ASTGroupingItemProto)[];
}

export interface ASTGroupByProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'hint': (_zetasql_ASTHintProto__Output | null);
  'groupingItems': (_zetasql_ASTGroupingItemProto__Output)[];
}
