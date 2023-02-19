// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTMergeWhenClauseProto as _zetasql_ASTMergeWhenClauseProto, ASTMergeWhenClauseProto__Output as _zetasql_ASTMergeWhenClauseProto__Output } from '../zetasql/ASTMergeWhenClauseProto';

export interface ASTMergeWhenClauseListProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'clauseList'?: (_zetasql_ASTMergeWhenClauseProto)[];
}

export interface ASTMergeWhenClauseListProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'clauseList': (_zetasql_ASTMergeWhenClauseProto__Output)[];
}
