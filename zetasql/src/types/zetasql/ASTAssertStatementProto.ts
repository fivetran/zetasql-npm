// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTStatementProto as _zetasql_ASTStatementProto, ASTStatementProto__Output as _zetasql_ASTStatementProto__Output } from '../zetasql/ASTStatementProto';
import type { AnyASTExpressionProto as _zetasql_AnyASTExpressionProto, AnyASTExpressionProto__Output as _zetasql_AnyASTExpressionProto__Output } from '../zetasql/AnyASTExpressionProto';
import type { ASTStringLiteralProto as _zetasql_ASTStringLiteralProto, ASTStringLiteralProto__Output as _zetasql_ASTStringLiteralProto__Output } from '../zetasql/ASTStringLiteralProto';

export interface ASTAssertStatementProto {
  'parent'?: (_zetasql_ASTStatementProto | null);
  'expr'?: (_zetasql_AnyASTExpressionProto | null);
  'description'?: (_zetasql_ASTStringLiteralProto | null);
}

export interface ASTAssertStatementProto__Output {
  'parent': (_zetasql_ASTStatementProto__Output | null);
  'expr': (_zetasql_AnyASTExpressionProto__Output | null);
  'description': (_zetasql_ASTStringLiteralProto__Output | null);
}
