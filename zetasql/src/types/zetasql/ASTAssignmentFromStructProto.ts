// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTScriptStatementProto as _zetasql_ASTScriptStatementProto, ASTScriptStatementProto__Output as _zetasql_ASTScriptStatementProto__Output } from '../zetasql/ASTScriptStatementProto';
import type { ASTIdentifierListProto as _zetasql_ASTIdentifierListProto, ASTIdentifierListProto__Output as _zetasql_ASTIdentifierListProto__Output } from '../zetasql/ASTIdentifierListProto';
import type { AnyASTExpressionProto as _zetasql_AnyASTExpressionProto, AnyASTExpressionProto__Output as _zetasql_AnyASTExpressionProto__Output } from '../zetasql/AnyASTExpressionProto';

export interface ASTAssignmentFromStructProto {
  'parent'?: (_zetasql_ASTScriptStatementProto | null);
  'variables'?: (_zetasql_ASTIdentifierListProto | null);
  'structExpression'?: (_zetasql_AnyASTExpressionProto | null);
}

export interface ASTAssignmentFromStructProto__Output {
  'parent': (_zetasql_ASTScriptStatementProto__Output | null);
  'variables': (_zetasql_ASTIdentifierListProto__Output | null);
  'structExpression': (_zetasql_AnyASTExpressionProto__Output | null);
}
