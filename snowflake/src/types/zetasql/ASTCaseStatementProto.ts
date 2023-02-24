// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTScriptStatementProto as _zetasql_ASTScriptStatementProto, ASTScriptStatementProto__Output as _zetasql_ASTScriptStatementProto__Output } from '../zetasql/ASTScriptStatementProto';
import type { AnyASTExpressionProto as _zetasql_AnyASTExpressionProto, AnyASTExpressionProto__Output as _zetasql_AnyASTExpressionProto__Output } from '../zetasql/AnyASTExpressionProto';
import type { ASTWhenThenClauseListProto as _zetasql_ASTWhenThenClauseListProto, ASTWhenThenClauseListProto__Output as _zetasql_ASTWhenThenClauseListProto__Output } from '../zetasql/ASTWhenThenClauseListProto';
import type { ASTStatementListProto as _zetasql_ASTStatementListProto, ASTStatementListProto__Output as _zetasql_ASTStatementListProto__Output } from '../zetasql/ASTStatementListProto';

export interface ASTCaseStatementProto {
  'parent'?: (_zetasql_ASTScriptStatementProto | null);
  'expression'?: (_zetasql_AnyASTExpressionProto | null);
  'whenThenClauses'?: (_zetasql_ASTWhenThenClauseListProto | null);
  'elseList'?: (_zetasql_ASTStatementListProto | null);
}

export interface ASTCaseStatementProto__Output {
  'parent': (_zetasql_ASTScriptStatementProto__Output | null);
  'expression': (_zetasql_AnyASTExpressionProto__Output | null);
  'whenThenClauses': (_zetasql_ASTWhenThenClauseListProto__Output | null);
  'elseList': (_zetasql_ASTStatementListProto__Output | null);
}
