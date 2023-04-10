// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTGeneralizedPathExpressionProto as _zetasql_ASTGeneralizedPathExpressionProto, ASTGeneralizedPathExpressionProto__Output as _zetasql_ASTGeneralizedPathExpressionProto__Output } from '../zetasql/ASTGeneralizedPathExpressionProto';
import type { AnyASTExpressionProto as _zetasql_AnyASTExpressionProto, AnyASTExpressionProto__Output as _zetasql_AnyASTExpressionProto__Output } from '../zetasql/AnyASTExpressionProto';
import type { ASTPathExpressionProto as _zetasql_ASTPathExpressionProto, ASTPathExpressionProto__Output as _zetasql_ASTPathExpressionProto__Output } from '../zetasql/ASTPathExpressionProto';

export interface ASTDotGeneralizedFieldProto {
  'parent'?: (_zetasql_ASTGeneralizedPathExpressionProto | null);
  'expr'?: (_zetasql_AnyASTExpressionProto | null);
  'path'?: (_zetasql_ASTPathExpressionProto | null);
}

export interface ASTDotGeneralizedFieldProto__Output {
  'parent': (_zetasql_ASTGeneralizedPathExpressionProto__Output | null);
  'expr': (_zetasql_AnyASTExpressionProto__Output | null);
  'path': (_zetasql_ASTPathExpressionProto__Output | null);
}
