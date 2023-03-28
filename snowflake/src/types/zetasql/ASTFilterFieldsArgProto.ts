// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { AnyASTGeneralizedPathExpressionProto as _zetasql_AnyASTGeneralizedPathExpressionProto, AnyASTGeneralizedPathExpressionProto__Output as _zetasql_AnyASTGeneralizedPathExpressionProto__Output } from '../zetasql/AnyASTGeneralizedPathExpressionProto';
import type { _zetasql_ASTFilterFieldsArgEnums_FilterType, _zetasql_ASTFilterFieldsArgEnums_FilterType__Output } from '../zetasql/ASTFilterFieldsArgEnums';

export interface ASTFilterFieldsArgProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'pathExpression'?: (_zetasql_AnyASTGeneralizedPathExpressionProto | null);
  'filterType'?: (_zetasql_ASTFilterFieldsArgEnums_FilterType);
}

export interface ASTFilterFieldsArgProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'pathExpression': (_zetasql_AnyASTGeneralizedPathExpressionProto__Output | null);
  'filterType': (_zetasql_ASTFilterFieldsArgEnums_FilterType__Output);
}
