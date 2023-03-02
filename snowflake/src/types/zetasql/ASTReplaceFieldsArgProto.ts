// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { AnyASTExpressionProto as _zetasql_AnyASTExpressionProto, AnyASTExpressionProto__Output as _zetasql_AnyASTExpressionProto__Output } from '../zetasql/AnyASTExpressionProto';
import type { AnyASTGeneralizedPathExpressionProto as _zetasql_AnyASTGeneralizedPathExpressionProto, AnyASTGeneralizedPathExpressionProto__Output as _zetasql_AnyASTGeneralizedPathExpressionProto__Output } from '../zetasql/AnyASTGeneralizedPathExpressionProto';

export interface ASTReplaceFieldsArgProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'expression'?: (_zetasql_AnyASTExpressionProto | null);
  'pathExpression'?: (_zetasql_AnyASTGeneralizedPathExpressionProto | null);
}

export interface ASTReplaceFieldsArgProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'expression': (_zetasql_AnyASTExpressionProto__Output | null);
  'pathExpression': (_zetasql_AnyASTGeneralizedPathExpressionProto__Output | null);
}
