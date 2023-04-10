// Original file: src/zetasql-snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTExpressionProto as _zetasql_ASTExpressionProto, ASTExpressionProto__Output as _zetasql_ASTExpressionProto__Output } from '../zetasql/ASTExpressionProto';
import type { AnyASTExpressionProto as _zetasql_AnyASTExpressionProto, AnyASTExpressionProto__Output as _zetasql_AnyASTExpressionProto__Output } from '../zetasql/AnyASTExpressionProto';
import type { ASTWindowSpecificationProto as _zetasql_ASTWindowSpecificationProto, ASTWindowSpecificationProto__Output as _zetasql_ASTWindowSpecificationProto__Output } from '../zetasql/ASTWindowSpecificationProto';

export interface ASTAnalyticFunctionCallProto {
  'parent'?: (_zetasql_ASTExpressionProto | null);
  'expression'?: (_zetasql_AnyASTExpressionProto | null);
  'windowSpec'?: (_zetasql_ASTWindowSpecificationProto | null);
}

export interface ASTAnalyticFunctionCallProto__Output {
  'parent': (_zetasql_ASTExpressionProto__Output | null);
  'expression': (_zetasql_AnyASTExpressionProto__Output | null);
  'windowSpec': (_zetasql_ASTWindowSpecificationProto__Output | null);
}
