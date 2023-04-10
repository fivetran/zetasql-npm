// Original file: src/snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTLoopStatementProto as _zetasql_ASTLoopStatementProto, ASTLoopStatementProto__Output as _zetasql_ASTLoopStatementProto__Output } from '../zetasql/ASTLoopStatementProto';
import type { ASTUntilClauseProto as _zetasql_ASTUntilClauseProto, ASTUntilClauseProto__Output as _zetasql_ASTUntilClauseProto__Output } from '../zetasql/ASTUntilClauseProto';

export interface ASTRepeatStatementProto {
  'parent'?: (_zetasql_ASTLoopStatementProto | null);
  'untilClause'?: (_zetasql_ASTUntilClauseProto | null);
}

export interface ASTRepeatStatementProto__Output {
  'parent': (_zetasql_ASTLoopStatementProto__Output | null);
  'untilClause': (_zetasql_ASTUntilClauseProto__Output | null);
}
