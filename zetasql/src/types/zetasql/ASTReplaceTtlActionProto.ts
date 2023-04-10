// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTAlterActionProto as _zetasql_ASTAlterActionProto, ASTAlterActionProto__Output as _zetasql_ASTAlterActionProto__Output } from '../zetasql/ASTAlterActionProto';
import type { AnyASTExpressionProto as _zetasql_AnyASTExpressionProto, AnyASTExpressionProto__Output as _zetasql_AnyASTExpressionProto__Output } from '../zetasql/AnyASTExpressionProto';

export interface ASTReplaceTtlActionProto {
  'parent'?: (_zetasql_ASTAlterActionProto | null);
  'expression'?: (_zetasql_AnyASTExpressionProto | null);
  'isIfExists'?: (boolean);
}

export interface ASTReplaceTtlActionProto__Output {
  'parent': (_zetasql_ASTAlterActionProto__Output | null);
  'expression': (_zetasql_AnyASTExpressionProto__Output | null);
  'isIfExists': (boolean);
}
