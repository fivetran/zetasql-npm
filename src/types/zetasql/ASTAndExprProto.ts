// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTExpressionProto as _zetasql_ASTExpressionProto, ASTExpressionProto__Output as _zetasql_ASTExpressionProto__Output } from '../zetasql/ASTExpressionProto';
import type { AnyASTExpressionProto as _zetasql_AnyASTExpressionProto, AnyASTExpressionProto__Output as _zetasql_AnyASTExpressionProto__Output } from '../zetasql/AnyASTExpressionProto';

export interface ASTAndExprProto {
  'parent'?: (_zetasql_ASTExpressionProto | null);
  'conjuncts'?: (_zetasql_AnyASTExpressionProto)[];
}

export interface ASTAndExprProto__Output {
  'parent': (_zetasql_ASTExpressionProto__Output | null);
  'conjuncts': (_zetasql_AnyASTExpressionProto__Output)[];
}
