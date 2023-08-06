// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTGroupingSetProto as _zetasql_ASTGroupingSetProto, ASTGroupingSetProto__Output as _zetasql_ASTGroupingSetProto__Output } from '../zetasql/ASTGroupingSetProto';

export interface ASTGroupingSetListProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'groupingSets'?: (_zetasql_ASTGroupingSetProto)[];
}

export interface ASTGroupingSetListProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'groupingSets': (_zetasql_ASTGroupingSetProto__Output)[];
}
