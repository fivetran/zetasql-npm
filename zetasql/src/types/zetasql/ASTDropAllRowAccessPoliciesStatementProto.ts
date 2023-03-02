// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTStatementProto as _zetasql_ASTStatementProto, ASTStatementProto__Output as _zetasql_ASTStatementProto__Output } from '../zetasql/ASTStatementProto';
import type { ASTPathExpressionProto as _zetasql_ASTPathExpressionProto, ASTPathExpressionProto__Output as _zetasql_ASTPathExpressionProto__Output } from '../zetasql/ASTPathExpressionProto';

export interface ASTDropAllRowAccessPoliciesStatementProto {
  'parent'?: (_zetasql_ASTStatementProto | null);
  'tableName'?: (_zetasql_ASTPathExpressionProto | null);
  'hasAccessKeyword'?: (boolean);
}

export interface ASTDropAllRowAccessPoliciesStatementProto__Output {
  'parent': (_zetasql_ASTStatementProto__Output | null);
  'tableName': (_zetasql_ASTPathExpressionProto__Output | null);
  'hasAccessKeyword': (boolean);
}
