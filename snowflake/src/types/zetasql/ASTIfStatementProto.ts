// Original file: src/zetasql-snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTScriptStatementProto as _zetasql_ASTScriptStatementProto, ASTScriptStatementProto__Output as _zetasql_ASTScriptStatementProto__Output } from '../zetasql/ASTScriptStatementProto';
import type { AnyASTExpressionProto as _zetasql_AnyASTExpressionProto, AnyASTExpressionProto__Output as _zetasql_AnyASTExpressionProto__Output } from '../zetasql/AnyASTExpressionProto';
import type { ASTStatementListProto as _zetasql_ASTStatementListProto, ASTStatementListProto__Output as _zetasql_ASTStatementListProto__Output } from '../zetasql/ASTStatementListProto';
import type { ASTElseifClauseListProto as _zetasql_ASTElseifClauseListProto, ASTElseifClauseListProto__Output as _zetasql_ASTElseifClauseListProto__Output } from '../zetasql/ASTElseifClauseListProto';

export interface ASTIfStatementProto {
  'parent'?: (_zetasql_ASTScriptStatementProto | null);
  'condition'?: (_zetasql_AnyASTExpressionProto | null);
  'thenList'?: (_zetasql_ASTStatementListProto | null);
  'elseifClauses'?: (_zetasql_ASTElseifClauseListProto | null);
  'elseList'?: (_zetasql_ASTStatementListProto | null);
}

export interface ASTIfStatementProto__Output {
  'parent': (_zetasql_ASTScriptStatementProto__Output | null);
  'condition': (_zetasql_AnyASTExpressionProto__Output | null);
  'thenList': (_zetasql_ASTStatementListProto__Output | null);
  'elseifClauses': (_zetasql_ASTElseifClauseListProto__Output | null);
  'elseList': (_zetasql_ASTStatementListProto__Output | null);
}
