// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTGeneralizedPathExpressionProto as _zetasql_ASTGeneralizedPathExpressionProto, ASTGeneralizedPathExpressionProto__Output as _zetasql_ASTGeneralizedPathExpressionProto__Output } from '../zetasql/ASTGeneralizedPathExpressionProto';
import type { AnyASTExpressionProto as _zetasql_AnyASTExpressionProto, AnyASTExpressionProto__Output as _zetasql_AnyASTExpressionProto__Output } from '../zetasql/AnyASTExpressionProto';
import type { ASTIdentifierProto as _zetasql_ASTIdentifierProto, ASTIdentifierProto__Output as _zetasql_ASTIdentifierProto__Output } from '../zetasql/ASTIdentifierProto';

export interface ASTDotIdentifierProto {
  'parent'?: (_zetasql_ASTGeneralizedPathExpressionProto | null);
  'expr'?: (_zetasql_AnyASTExpressionProto | null);
  'name'?: (_zetasql_ASTIdentifierProto | null);
}

export interface ASTDotIdentifierProto__Output {
  'parent': (_zetasql_ASTGeneralizedPathExpressionProto__Output | null);
  'expr': (_zetasql_AnyASTExpressionProto__Output | null);
  'name': (_zetasql_ASTIdentifierProto__Output | null);
}
