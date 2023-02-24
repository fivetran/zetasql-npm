// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTDdlStatementProto as _zetasql_ASTDdlStatementProto, ASTDdlStatementProto__Output as _zetasql_ASTDdlStatementProto__Output } from '../zetasql/ASTDdlStatementProto';
import type { ASTPathExpressionProto as _zetasql_ASTPathExpressionProto, ASTPathExpressionProto__Output as _zetasql_ASTPathExpressionProto__Output } from '../zetasql/ASTPathExpressionProto';

export interface ASTDropRowAccessPolicyStatementProto {
  'parent'?: (_zetasql_ASTDdlStatementProto | null);
  'name'?: (_zetasql_ASTPathExpressionProto | null);
  'tableName'?: (_zetasql_ASTPathExpressionProto | null);
  'isIfExists'?: (boolean);
}

export interface ASTDropRowAccessPolicyStatementProto__Output {
  'parent': (_zetasql_ASTDdlStatementProto__Output | null);
  'name': (_zetasql_ASTPathExpressionProto__Output | null);
  'tableName': (_zetasql_ASTPathExpressionProto__Output | null);
  'isIfExists': (boolean);
}
