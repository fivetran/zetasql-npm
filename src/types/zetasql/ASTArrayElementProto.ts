// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTGeneralizedPathExpressionProto as _zetasql_ASTGeneralizedPathExpressionProto, ASTGeneralizedPathExpressionProto__Output as _zetasql_ASTGeneralizedPathExpressionProto__Output } from '../zetasql/ASTGeneralizedPathExpressionProto';
import type { AnyASTExpressionProto as _zetasql_AnyASTExpressionProto, AnyASTExpressionProto__Output as _zetasql_AnyASTExpressionProto__Output } from '../zetasql/AnyASTExpressionProto';

export interface ASTArrayElementProto {
  'parent'?: (_zetasql_ASTGeneralizedPathExpressionProto | null);
  'array'?: (_zetasql_AnyASTExpressionProto | null);
  'position'?: (_zetasql_AnyASTExpressionProto | null);
}

export interface ASTArrayElementProto__Output {
  'parent': (_zetasql_ASTGeneralizedPathExpressionProto__Output | null);
  'array': (_zetasql_AnyASTExpressionProto__Output | null);
  'position': (_zetasql_AnyASTExpressionProto__Output | null);
}
