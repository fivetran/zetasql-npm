// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { AnyASTExpressionProto as _zetasql_AnyASTExpressionProto, AnyASTExpressionProto__Output as _zetasql_AnyASTExpressionProto__Output } from '../zetasql/AnyASTExpressionProto';
import type { _zetasql_ASTWindowFrameExprEnums_BoundaryType, _zetasql_ASTWindowFrameExprEnums_BoundaryType__Output } from '../zetasql/ASTWindowFrameExprEnums';

export interface ASTWindowFrameExprProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'expression'?: (_zetasql_AnyASTExpressionProto | null);
  'boundaryType'?: (_zetasql_ASTWindowFrameExprEnums_BoundaryType);
}

export interface ASTWindowFrameExprProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'expression': (_zetasql_AnyASTExpressionProto__Output | null);
  'boundaryType': (_zetasql_ASTWindowFrameExprEnums_BoundaryType__Output);
}
