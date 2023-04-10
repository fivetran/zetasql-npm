// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { AnyASTExpressionProto as _zetasql_AnyASTExpressionProto, AnyASTExpressionProto__Output as _zetasql_AnyASTExpressionProto__Output } from '../zetasql/AnyASTExpressionProto';
import type { ASTStatementListProto as _zetasql_ASTStatementListProto, ASTStatementListProto__Output as _zetasql_ASTStatementListProto__Output } from '../zetasql/ASTStatementListProto';

export interface ASTWhenThenClauseProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'condition'?: (_zetasql_AnyASTExpressionProto | null);
  'body'?: (_zetasql_ASTStatementListProto | null);
}

export interface ASTWhenThenClauseProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'condition': (_zetasql_AnyASTExpressionProto__Output | null);
  'body': (_zetasql_ASTStatementListProto__Output | null);
}
