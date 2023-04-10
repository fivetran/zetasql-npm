// Original file: src/zetasql-snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { AnyASTGeneralizedPathExpressionProto as _zetasql_AnyASTGeneralizedPathExpressionProto, AnyASTGeneralizedPathExpressionProto__Output as _zetasql_AnyASTGeneralizedPathExpressionProto__Output } from '../zetasql/AnyASTGeneralizedPathExpressionProto';
import type { AnyASTExpressionProto as _zetasql_AnyASTExpressionProto, AnyASTExpressionProto__Output as _zetasql_AnyASTExpressionProto__Output } from '../zetasql/AnyASTExpressionProto';

export interface ASTUpdateSetValueProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'path'?: (_zetasql_AnyASTGeneralizedPathExpressionProto | null);
  'value'?: (_zetasql_AnyASTExpressionProto | null);
}

export interface ASTUpdateSetValueProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'path': (_zetasql_AnyASTGeneralizedPathExpressionProto__Output | null);
  'value': (_zetasql_AnyASTExpressionProto__Output | null);
}
