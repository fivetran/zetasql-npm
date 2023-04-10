// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTAlterActionProto as _zetasql_ASTAlterActionProto, ASTAlterActionProto__Output as _zetasql_ASTAlterActionProto__Output } from '../zetasql/ASTAlterActionProto';
import type { ASTGranteeListProto as _zetasql_ASTGranteeListProto, ASTGranteeListProto__Output as _zetasql_ASTGranteeListProto__Output } from '../zetasql/ASTGranteeListProto';

export interface ASTAddToRestricteeListClauseProto {
  'parent'?: (_zetasql_ASTAlterActionProto | null);
  'isIfNotExists'?: (boolean);
  'restricteeList'?: (_zetasql_ASTGranteeListProto | null);
}

export interface ASTAddToRestricteeListClauseProto__Output {
  'parent': (_zetasql_ASTAlterActionProto__Output | null);
  'isIfNotExists': (boolean);
  'restricteeList': (_zetasql_ASTGranteeListProto__Output | null);
}
