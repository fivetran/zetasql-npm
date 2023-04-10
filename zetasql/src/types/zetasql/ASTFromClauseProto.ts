// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { AnyASTTableExpressionProto as _zetasql_AnyASTTableExpressionProto, AnyASTTableExpressionProto__Output as _zetasql_AnyASTTableExpressionProto__Output } from '../zetasql/AnyASTTableExpressionProto';

export interface ASTFromClauseProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'tableExpression'?: (_zetasql_AnyASTTableExpressionProto | null);
}

export interface ASTFromClauseProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'tableExpression': (_zetasql_AnyASTTableExpressionProto__Output | null);
}
