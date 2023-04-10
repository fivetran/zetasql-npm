// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTExpressionProto as _zetasql_ASTExpressionProto, ASTExpressionProto__Output as _zetasql_ASTExpressionProto__Output } from '../zetasql/ASTExpressionProto';
import type { ASTIdentifierProto as _zetasql_ASTIdentifierProto, ASTIdentifierProto__Output as _zetasql_ASTIdentifierProto__Output } from '../zetasql/ASTIdentifierProto';
import type { AnyASTExpressionProto as _zetasql_AnyASTExpressionProto, AnyASTExpressionProto__Output as _zetasql_AnyASTExpressionProto__Output } from '../zetasql/AnyASTExpressionProto';

export interface ASTNamedArgumentProto {
  'parent'?: (_zetasql_ASTExpressionProto | null);
  'name'?: (_zetasql_ASTIdentifierProto | null);
  'expr'?: (_zetasql_AnyASTExpressionProto | null);
}

export interface ASTNamedArgumentProto__Output {
  'parent': (_zetasql_ASTExpressionProto__Output | null);
  'name': (_zetasql_ASTIdentifierProto__Output | null);
  'expr': (_zetasql_AnyASTExpressionProto__Output | null);
}
