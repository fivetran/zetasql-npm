// Original file: src/zetasql-snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTAlterActionProto as _zetasql_ASTAlterActionProto, ASTAlterActionProto__Output as _zetasql_ASTAlterActionProto__Output } from '../zetasql/ASTAlterActionProto';
import type { ASTColumnDefinitionProto as _zetasql_ASTColumnDefinitionProto, ASTColumnDefinitionProto__Output as _zetasql_ASTColumnDefinitionProto__Output } from '../zetasql/ASTColumnDefinitionProto';
import type { ASTColumnPositionProto as _zetasql_ASTColumnPositionProto, ASTColumnPositionProto__Output as _zetasql_ASTColumnPositionProto__Output } from '../zetasql/ASTColumnPositionProto';
import type { AnyASTExpressionProto as _zetasql_AnyASTExpressionProto, AnyASTExpressionProto__Output as _zetasql_AnyASTExpressionProto__Output } from '../zetasql/AnyASTExpressionProto';

export interface ASTAddColumnActionProto {
  'parent'?: (_zetasql_ASTAlterActionProto | null);
  'columnDefinition'?: (_zetasql_ASTColumnDefinitionProto | null);
  'columnPosition'?: (_zetasql_ASTColumnPositionProto | null);
  'fillExpression'?: (_zetasql_AnyASTExpressionProto | null);
  'isIfNotExists'?: (boolean);
}

export interface ASTAddColumnActionProto__Output {
  'parent': (_zetasql_ASTAlterActionProto__Output | null);
  'columnDefinition': (_zetasql_ASTColumnDefinitionProto__Output | null);
  'columnPosition': (_zetasql_ASTColumnPositionProto__Output | null);
  'fillExpression': (_zetasql_AnyASTExpressionProto__Output | null);
  'isIfNotExists': (boolean);
}
