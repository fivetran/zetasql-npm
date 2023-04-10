// Original file: src/snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTSelectListProto as _zetasql_ASTSelectListProto, ASTSelectListProto__Output as _zetasql_ASTSelectListProto__Output } from '../zetasql/ASTSelectListProto';
import type { ASTAliasProto as _zetasql_ASTAliasProto, ASTAliasProto__Output as _zetasql_ASTAliasProto__Output } from '../zetasql/ASTAliasProto';

export interface ASTReturningClauseProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'selectList'?: (_zetasql_ASTSelectListProto | null);
  'actionAlias'?: (_zetasql_ASTAliasProto | null);
}

export interface ASTReturningClauseProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'selectList': (_zetasql_ASTSelectListProto__Output | null);
  'actionAlias': (_zetasql_ASTAliasProto__Output | null);
}
