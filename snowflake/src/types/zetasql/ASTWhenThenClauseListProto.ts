// Original file: src/zetasql-snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTWhenThenClauseProto as _zetasql_ASTWhenThenClauseProto, ASTWhenThenClauseProto__Output as _zetasql_ASTWhenThenClauseProto__Output } from '../zetasql/ASTWhenThenClauseProto';

export interface ASTWhenThenClauseListProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'whenThenClauses'?: (_zetasql_ASTWhenThenClauseProto)[];
}

export interface ASTWhenThenClauseListProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'whenThenClauses': (_zetasql_ASTWhenThenClauseProto__Output)[];
}
