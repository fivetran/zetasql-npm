// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTPathExpressionProto as _zetasql_ASTPathExpressionProto, ASTPathExpressionProto__Output as _zetasql_ASTPathExpressionProto__Output } from '../zetasql/ASTPathExpressionProto';
import type { ASTColumnListProto as _zetasql_ASTColumnListProto, ASTColumnListProto__Output as _zetasql_ASTColumnListProto__Output } from '../zetasql/ASTColumnListProto';

export interface ASTTableAndColumnInfoProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'tableName'?: (_zetasql_ASTPathExpressionProto | null);
  'columnList'?: (_zetasql_ASTColumnListProto | null);
}

export interface ASTTableAndColumnInfoProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'tableName': (_zetasql_ASTPathExpressionProto__Output | null);
  'columnList': (_zetasql_ASTColumnListProto__Output | null);
}
