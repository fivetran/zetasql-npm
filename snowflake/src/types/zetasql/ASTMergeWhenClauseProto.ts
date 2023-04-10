// Original file: src/snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { AnyASTExpressionProto as _zetasql_AnyASTExpressionProto, AnyASTExpressionProto__Output as _zetasql_AnyASTExpressionProto__Output } from '../zetasql/AnyASTExpressionProto';
import type { ASTMergeActionProto as _zetasql_ASTMergeActionProto, ASTMergeActionProto__Output as _zetasql_ASTMergeActionProto__Output } from '../zetasql/ASTMergeActionProto';
import type { _zetasql_ASTMergeWhenClauseEnums_MatchType, _zetasql_ASTMergeWhenClauseEnums_MatchType__Output } from '../zetasql/ASTMergeWhenClauseEnums';

export interface ASTMergeWhenClauseProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'searchCondition'?: (_zetasql_AnyASTExpressionProto | null);
  'action'?: (_zetasql_ASTMergeActionProto | null);
  'matchType'?: (_zetasql_ASTMergeWhenClauseEnums_MatchType);
}

export interface ASTMergeWhenClauseProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'searchCondition': (_zetasql_AnyASTExpressionProto__Output | null);
  'action': (_zetasql_ASTMergeActionProto__Output | null);
  'matchType': (_zetasql_ASTMergeWhenClauseEnums_MatchType__Output);
}
