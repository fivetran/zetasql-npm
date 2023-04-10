// Original file: src/zetasql-snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTDdlStatementProto as _zetasql_ASTDdlStatementProto, ASTDdlStatementProto__Output as _zetasql_ASTDdlStatementProto__Output } from '../zetasql/ASTDdlStatementProto';
import type { ASTPathExpressionProto as _zetasql_ASTPathExpressionProto, ASTPathExpressionProto__Output as _zetasql_ASTPathExpressionProto__Output } from '../zetasql/ASTPathExpressionProto';
import type { ASTAlterActionListProto as _zetasql_ASTAlterActionListProto, ASTAlterActionListProto__Output as _zetasql_ASTAlterActionListProto__Output } from '../zetasql/ASTAlterActionListProto';

export interface ASTAlterStatementBaseProto {
  'parent'?: (_zetasql_ASTDdlStatementProto | null);
  'path'?: (_zetasql_ASTPathExpressionProto | null);
  'actionList'?: (_zetasql_ASTAlterActionListProto | null);
  'isIfExists'?: (boolean);
}

export interface ASTAlterStatementBaseProto__Output {
  'parent': (_zetasql_ASTDdlStatementProto__Output | null);
  'path': (_zetasql_ASTPathExpressionProto__Output | null);
  'actionList': (_zetasql_ASTAlterActionListProto__Output | null);
  'isIfExists': (boolean);
}
