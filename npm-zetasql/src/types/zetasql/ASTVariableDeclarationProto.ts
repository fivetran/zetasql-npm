// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTScriptStatementProto as _zetasql_ASTScriptStatementProto, ASTScriptStatementProto__Output as _zetasql_ASTScriptStatementProto__Output } from '../zetasql/ASTScriptStatementProto';
import type { ASTIdentifierListProto as _zetasql_ASTIdentifierListProto, ASTIdentifierListProto__Output as _zetasql_ASTIdentifierListProto__Output } from '../zetasql/ASTIdentifierListProto';
import type { AnyASTTypeProto as _zetasql_AnyASTTypeProto, AnyASTTypeProto__Output as _zetasql_AnyASTTypeProto__Output } from '../zetasql/AnyASTTypeProto';
import type { AnyASTExpressionProto as _zetasql_AnyASTExpressionProto, AnyASTExpressionProto__Output as _zetasql_AnyASTExpressionProto__Output } from '../zetasql/AnyASTExpressionProto';

export interface ASTVariableDeclarationProto {
  'parent'?: (_zetasql_ASTScriptStatementProto | null);
  'variableList'?: (_zetasql_ASTIdentifierListProto | null);
  'type'?: (_zetasql_AnyASTTypeProto | null);
  'defaultValue'?: (_zetasql_AnyASTExpressionProto | null);
}

export interface ASTVariableDeclarationProto__Output {
  'parent': (_zetasql_ASTScriptStatementProto__Output | null);
  'variableList': (_zetasql_ASTIdentifierListProto__Output | null);
  'type': (_zetasql_AnyASTTypeProto__Output | null);
  'defaultValue': (_zetasql_AnyASTExpressionProto__Output | null);
}
