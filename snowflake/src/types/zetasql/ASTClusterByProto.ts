// Original file: src/snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { AnyASTExpressionProto as _zetasql_AnyASTExpressionProto, AnyASTExpressionProto__Output as _zetasql_AnyASTExpressionProto__Output } from '../zetasql/AnyASTExpressionProto';

export interface ASTClusterByProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'clusteringExpressions'?: (_zetasql_AnyASTExpressionProto)[];
}

export interface ASTClusterByProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'clusteringExpressions': (_zetasql_AnyASTExpressionProto__Output)[];
}
