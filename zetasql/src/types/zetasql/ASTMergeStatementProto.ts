// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTStatementProto as _zetasql_ASTStatementProto, ASTStatementProto__Output as _zetasql_ASTStatementProto__Output } from '../zetasql/ASTStatementProto';
import type { ASTPathExpressionProto as _zetasql_ASTPathExpressionProto, ASTPathExpressionProto__Output as _zetasql_ASTPathExpressionProto__Output } from '../zetasql/ASTPathExpressionProto';
import type { ASTAliasProto as _zetasql_ASTAliasProto, ASTAliasProto__Output as _zetasql_ASTAliasProto__Output } from '../zetasql/ASTAliasProto';
import type { AnyASTTableExpressionProto as _zetasql_AnyASTTableExpressionProto, AnyASTTableExpressionProto__Output as _zetasql_AnyASTTableExpressionProto__Output } from '../zetasql/AnyASTTableExpressionProto';
import type { AnyASTExpressionProto as _zetasql_AnyASTExpressionProto, AnyASTExpressionProto__Output as _zetasql_AnyASTExpressionProto__Output } from '../zetasql/AnyASTExpressionProto';
import type { ASTMergeWhenClauseListProto as _zetasql_ASTMergeWhenClauseListProto, ASTMergeWhenClauseListProto__Output as _zetasql_ASTMergeWhenClauseListProto__Output } from '../zetasql/ASTMergeWhenClauseListProto';

export interface ASTMergeStatementProto {
  'parent'?: (_zetasql_ASTStatementProto | null);
  'targetPath'?: (_zetasql_ASTPathExpressionProto | null);
  'alias'?: (_zetasql_ASTAliasProto | null);
  'tableExpression'?: (_zetasql_AnyASTTableExpressionProto | null);
  'mergeCondition'?: (_zetasql_AnyASTExpressionProto | null);
  'whenClauses'?: (_zetasql_ASTMergeWhenClauseListProto | null);
}

export interface ASTMergeStatementProto__Output {
  'parent': (_zetasql_ASTStatementProto__Output | null);
  'targetPath': (_zetasql_ASTPathExpressionProto__Output | null);
  'alias': (_zetasql_ASTAliasProto__Output | null);
  'tableExpression': (_zetasql_AnyASTTableExpressionProto__Output | null);
  'mergeCondition': (_zetasql_AnyASTExpressionProto__Output | null);
  'whenClauses': (_zetasql_ASTMergeWhenClauseListProto__Output | null);
}
