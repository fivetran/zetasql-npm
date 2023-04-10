// Original file: src/snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { _zetasql_ASTForeignKeyActionsEnums_Action, _zetasql_ASTForeignKeyActionsEnums_Action__Output } from '../zetasql/ASTForeignKeyActionsEnums';

export interface ASTForeignKeyActionsProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'updateAction'?: (_zetasql_ASTForeignKeyActionsEnums_Action);
  'deleteAction'?: (_zetasql_ASTForeignKeyActionsEnums_Action);
}

export interface ASTForeignKeyActionsProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'updateAction': (_zetasql_ASTForeignKeyActionsEnums_Action__Output);
  'deleteAction': (_zetasql_ASTForeignKeyActionsEnums_Action__Output);
}
