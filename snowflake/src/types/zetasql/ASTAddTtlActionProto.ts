// Original file: src/zetasql-snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTAlterActionProto as _zetasql_ASTAlterActionProto, ASTAlterActionProto__Output as _zetasql_ASTAlterActionProto__Output } from '../zetasql/ASTAlterActionProto';
import type { AnyASTExpressionProto as _zetasql_AnyASTExpressionProto, AnyASTExpressionProto__Output as _zetasql_AnyASTExpressionProto__Output } from '../zetasql/AnyASTExpressionProto';

export interface ASTAddTtlActionProto {
  'parent'?: (_zetasql_ASTAlterActionProto | null);
  'expression'?: (_zetasql_AnyASTExpressionProto | null);
  'isIfNotExists'?: (boolean);
}

export interface ASTAddTtlActionProto__Output {
  'parent': (_zetasql_ASTAlterActionProto__Output | null);
  'expression': (_zetasql_AnyASTExpressionProto__Output | null);
  'isIfNotExists': (boolean);
}
