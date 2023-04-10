// Original file: src/snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTPathExpressionProto as _zetasql_ASTPathExpressionProto, ASTPathExpressionProto__Output as _zetasql_ASTPathExpressionProto__Output } from '../zetasql/ASTPathExpressionProto';
import type { _zetasql_ASTSpannerInterleaveClauseEnums_Type, _zetasql_ASTSpannerInterleaveClauseEnums_Type__Output } from '../zetasql/ASTSpannerInterleaveClauseEnums';
import type { _zetasql_ASTForeignKeyActionsEnums_Action, _zetasql_ASTForeignKeyActionsEnums_Action__Output } from '../zetasql/ASTForeignKeyActionsEnums';

export interface ASTSpannerInterleaveClauseProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'tableName'?: (_zetasql_ASTPathExpressionProto | null);
  'type'?: (_zetasql_ASTSpannerInterleaveClauseEnums_Type);
  'action'?: (_zetasql_ASTForeignKeyActionsEnums_Action);
}

export interface ASTSpannerInterleaveClauseProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'tableName': (_zetasql_ASTPathExpressionProto__Output | null);
  'type': (_zetasql_ASTSpannerInterleaveClauseEnums_Type__Output);
  'action': (_zetasql_ASTForeignKeyActionsEnums_Action__Output);
}
