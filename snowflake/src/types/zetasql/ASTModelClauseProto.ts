// Original file: src/zetasql-snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTPathExpressionProto as _zetasql_ASTPathExpressionProto, ASTPathExpressionProto__Output as _zetasql_ASTPathExpressionProto__Output } from '../zetasql/ASTPathExpressionProto';

export interface ASTModelClauseProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'modelPath'?: (_zetasql_ASTPathExpressionProto | null);
}

export interface ASTModelClauseProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'modelPath': (_zetasql_ASTPathExpressionProto__Output | null);
}
