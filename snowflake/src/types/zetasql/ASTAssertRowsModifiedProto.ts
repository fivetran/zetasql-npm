// Original file: src/zetasql-snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { AnyASTExpressionProto as _zetasql_AnyASTExpressionProto, AnyASTExpressionProto__Output as _zetasql_AnyASTExpressionProto__Output } from '../zetasql/AnyASTExpressionProto';

export interface ASTAssertRowsModifiedProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'numRows'?: (_zetasql_AnyASTExpressionProto | null);
}

export interface ASTAssertRowsModifiedProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'numRows': (_zetasql_AnyASTExpressionProto__Output | null);
}
