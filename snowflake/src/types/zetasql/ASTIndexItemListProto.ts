// Original file: src/zetasql-snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTOrderingExpressionProto as _zetasql_ASTOrderingExpressionProto, ASTOrderingExpressionProto__Output as _zetasql_ASTOrderingExpressionProto__Output } from '../zetasql/ASTOrderingExpressionProto';

export interface ASTIndexItemListProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'orderingExpressions'?: (_zetasql_ASTOrderingExpressionProto)[];
}

export interface ASTIndexItemListProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'orderingExpressions': (_zetasql_ASTOrderingExpressionProto__Output)[];
}
