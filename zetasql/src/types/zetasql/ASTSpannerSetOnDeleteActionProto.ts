// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTAlterActionProto as _zetasql_ASTAlterActionProto, ASTAlterActionProto__Output as _zetasql_ASTAlterActionProto__Output } from '../zetasql/ASTAlterActionProto';
import type { _zetasql_ASTForeignKeyActionsEnums_Action, _zetasql_ASTForeignKeyActionsEnums_Action__Output } from '../zetasql/ASTForeignKeyActionsEnums';

export interface ASTSpannerSetOnDeleteActionProto {
  'parent'?: (_zetasql_ASTAlterActionProto | null);
  'action'?: (_zetasql_ASTForeignKeyActionsEnums_Action);
}

export interface ASTSpannerSetOnDeleteActionProto__Output {
  'parent': (_zetasql_ASTAlterActionProto__Output | null);
  'action': (_zetasql_ASTForeignKeyActionsEnums_Action__Output);
}
