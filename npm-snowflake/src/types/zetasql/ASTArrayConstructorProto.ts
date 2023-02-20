// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTExpressionProto as _zetasql_ASTExpressionProto, ASTExpressionProto__Output as _zetasql_ASTExpressionProto__Output } from '../zetasql/ASTExpressionProto';
import type { ASTArrayTypeProto as _zetasql_ASTArrayTypeProto, ASTArrayTypeProto__Output as _zetasql_ASTArrayTypeProto__Output } from '../zetasql/ASTArrayTypeProto';
import type { AnyASTExpressionProto as _zetasql_AnyASTExpressionProto, AnyASTExpressionProto__Output as _zetasql_AnyASTExpressionProto__Output } from '../zetasql/AnyASTExpressionProto';

export interface ASTArrayConstructorProto {
  'parent'?: (_zetasql_ASTExpressionProto | null);
  'type'?: (_zetasql_ASTArrayTypeProto | null);
  'elements'?: (_zetasql_AnyASTExpressionProto)[];
}

export interface ASTArrayConstructorProto__Output {
  'parent': (_zetasql_ASTExpressionProto__Output | null);
  'type': (_zetasql_ASTArrayTypeProto__Output | null);
  'elements': (_zetasql_AnyASTExpressionProto__Output)[];
}
