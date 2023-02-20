// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTAlterActionProto as _zetasql_ASTAlterActionProto, ASTAlterActionProto__Output as _zetasql_ASTAlterActionProto__Output } from '../zetasql/ASTAlterActionProto';
import type { ASTIdentifierProto as _zetasql_ASTIdentifierProto, ASTIdentifierProto__Output as _zetasql_ASTIdentifierProto__Output } from '../zetasql/ASTIdentifierProto';
import type { AnyASTExpressionProto as _zetasql_AnyASTExpressionProto, AnyASTExpressionProto__Output as _zetasql_AnyASTExpressionProto__Output } from '../zetasql/AnyASTExpressionProto';

export interface ASTAlterColumnSetDefaultActionProto {
  'parent'?: (_zetasql_ASTAlterActionProto | null);
  'columnName'?: (_zetasql_ASTIdentifierProto | null);
  'defaultExpression'?: (_zetasql_AnyASTExpressionProto | null);
  'isIfExists'?: (boolean);
}

export interface ASTAlterColumnSetDefaultActionProto__Output {
  'parent': (_zetasql_ASTAlterActionProto__Output | null);
  'columnName': (_zetasql_ASTIdentifierProto__Output | null);
  'defaultExpression': (_zetasql_AnyASTExpressionProto__Output | null);
  'isIfExists': (boolean);
}
