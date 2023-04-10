// Original file: src/snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTConnectionClauseProto as _zetasql_ASTConnectionClauseProto, ASTConnectionClauseProto__Output as _zetasql_ASTConnectionClauseProto__Output } from '../zetasql/ASTConnectionClauseProto';

export interface ASTWithConnectionClauseProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'connectionClause'?: (_zetasql_ASTConnectionClauseProto | null);
}

export interface ASTWithConnectionClauseProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'connectionClause': (_zetasql_ASTConnectionClauseProto__Output | null);
}
