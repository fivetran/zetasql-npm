// Original file: src/snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTAliasedQueryProto as _zetasql_ASTAliasedQueryProto, ASTAliasedQueryProto__Output as _zetasql_ASTAliasedQueryProto__Output } from '../zetasql/ASTAliasedQueryProto';

export interface ASTAliasedQueryListProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'aliasedQueryList'?: (_zetasql_ASTAliasedQueryProto)[];
}

export interface ASTAliasedQueryListProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'aliasedQueryList': (_zetasql_ASTAliasedQueryProto__Output)[];
}
