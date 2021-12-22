// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTScriptStatementProto as _zetasql_ASTScriptStatementProto, ASTScriptStatementProto__Output as _zetasql_ASTScriptStatementProto__Output } from '../zetasql/ASTScriptStatementProto';
import type { AnyASTExpressionProto as _zetasql_AnyASTExpressionProto, AnyASTExpressionProto__Output as _zetasql_AnyASTExpressionProto__Output } from '../zetasql/AnyASTExpressionProto';

export interface ASTRaiseStatementProto {
  'parent'?: (_zetasql_ASTScriptStatementProto | null);
  'message'?: (_zetasql_AnyASTExpressionProto | null);
}

export interface ASTRaiseStatementProto__Output {
  'parent': (_zetasql_ASTScriptStatementProto__Output | null);
  'message': (_zetasql_AnyASTExpressionProto__Output | null);
}
