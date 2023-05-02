// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTAliasedQueryProto as _zetasql_ASTAliasedQueryProto, ASTAliasedQueryProto__Output as _zetasql_ASTAliasedQueryProto__Output } from '../zetasql/ASTAliasedQueryProto';

export interface ASTWithClauseProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'with'?: (_zetasql_ASTAliasedQueryProto)[];
  'recursive'?: (boolean);
}

export interface ASTWithClauseProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'with': (_zetasql_ASTAliasedQueryProto__Output)[];
  'recursive': (boolean);
}
