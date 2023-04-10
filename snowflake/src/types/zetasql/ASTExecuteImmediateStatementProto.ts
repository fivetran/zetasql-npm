// Original file: src/snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTStatementProto as _zetasql_ASTStatementProto, ASTStatementProto__Output as _zetasql_ASTStatementProto__Output } from '../zetasql/ASTStatementProto';
import type { AnyASTExpressionProto as _zetasql_AnyASTExpressionProto, AnyASTExpressionProto__Output as _zetasql_AnyASTExpressionProto__Output } from '../zetasql/AnyASTExpressionProto';
import type { ASTExecuteIntoClauseProto as _zetasql_ASTExecuteIntoClauseProto, ASTExecuteIntoClauseProto__Output as _zetasql_ASTExecuteIntoClauseProto__Output } from '../zetasql/ASTExecuteIntoClauseProto';
import type { ASTExecuteUsingClauseProto as _zetasql_ASTExecuteUsingClauseProto, ASTExecuteUsingClauseProto__Output as _zetasql_ASTExecuteUsingClauseProto__Output } from '../zetasql/ASTExecuteUsingClauseProto';

export interface ASTExecuteImmediateStatementProto {
  'parent'?: (_zetasql_ASTStatementProto | null);
  'sql'?: (_zetasql_AnyASTExpressionProto | null);
  'intoClause'?: (_zetasql_ASTExecuteIntoClauseProto | null);
  'usingClause'?: (_zetasql_ASTExecuteUsingClauseProto | null);
}

export interface ASTExecuteImmediateStatementProto__Output {
  'parent': (_zetasql_ASTStatementProto__Output | null);
  'sql': (_zetasql_AnyASTExpressionProto__Output | null);
  'intoClause': (_zetasql_ASTExecuteIntoClauseProto__Output | null);
  'usingClause': (_zetasql_ASTExecuteUsingClauseProto__Output | null);
}
