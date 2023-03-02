// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTScriptStatementProto as _zetasql_ASTScriptStatementProto, ASTScriptStatementProto__Output as _zetasql_ASTScriptStatementProto__Output } from '../zetasql/ASTScriptStatementProto';
import type { ASTIdentifierProto as _zetasql_ASTIdentifierProto, ASTIdentifierProto__Output as _zetasql_ASTIdentifierProto__Output } from '../zetasql/ASTIdentifierProto';
import type { AnyASTExpressionProto as _zetasql_AnyASTExpressionProto, AnyASTExpressionProto__Output as _zetasql_AnyASTExpressionProto__Output } from '../zetasql/AnyASTExpressionProto';

export interface ASTSingleAssignmentProto {
  'parent'?: (_zetasql_ASTScriptStatementProto | null);
  'variable'?: (_zetasql_ASTIdentifierProto | null);
  'expression'?: (_zetasql_AnyASTExpressionProto | null);
}

export interface ASTSingleAssignmentProto__Output {
  'parent': (_zetasql_ASTScriptStatementProto__Output | null);
  'variable': (_zetasql_ASTIdentifierProto__Output | null);
  'expression': (_zetasql_AnyASTExpressionProto__Output | null);
}
