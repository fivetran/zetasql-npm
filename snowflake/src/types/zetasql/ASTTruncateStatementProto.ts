// Original file: src/snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTStatementProto as _zetasql_ASTStatementProto, ASTStatementProto__Output as _zetasql_ASTStatementProto__Output } from '../zetasql/ASTStatementProto';
import type { ASTPathExpressionProto as _zetasql_ASTPathExpressionProto, ASTPathExpressionProto__Output as _zetasql_ASTPathExpressionProto__Output } from '../zetasql/ASTPathExpressionProto';
import type { AnyASTExpressionProto as _zetasql_AnyASTExpressionProto, AnyASTExpressionProto__Output as _zetasql_AnyASTExpressionProto__Output } from '../zetasql/AnyASTExpressionProto';

export interface ASTTruncateStatementProto {
  'parent'?: (_zetasql_ASTStatementProto | null);
  'targetPath'?: (_zetasql_ASTPathExpressionProto | null);
  'where'?: (_zetasql_AnyASTExpressionProto | null);
}

export interface ASTTruncateStatementProto__Output {
  'parent': (_zetasql_ASTStatementProto__Output | null);
  'targetPath': (_zetasql_ASTPathExpressionProto__Output | null);
  'where': (_zetasql_AnyASTExpressionProto__Output | null);
}
