// Original file: src/zetasql-snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTExpressionProto as _zetasql_ASTExpressionProto, ASTExpressionProto__Output as _zetasql_ASTExpressionProto__Output } from '../zetasql/ASTExpressionProto';
import type { ASTSimpleTypeProto as _zetasql_ASTSimpleTypeProto, ASTSimpleTypeProto__Output as _zetasql_ASTSimpleTypeProto__Output } from '../zetasql/ASTSimpleTypeProto';
import type { ASTNewConstructorArgProto as _zetasql_ASTNewConstructorArgProto, ASTNewConstructorArgProto__Output as _zetasql_ASTNewConstructorArgProto__Output } from '../zetasql/ASTNewConstructorArgProto';

export interface ASTNewConstructorProto {
  'parent'?: (_zetasql_ASTExpressionProto | null);
  'typeName'?: (_zetasql_ASTSimpleTypeProto | null);
  'arguments'?: (_zetasql_ASTNewConstructorArgProto)[];
}

export interface ASTNewConstructorProto__Output {
  'parent': (_zetasql_ASTExpressionProto__Output | null);
  'typeName': (_zetasql_ASTSimpleTypeProto__Output | null);
  'arguments': (_zetasql_ASTNewConstructorArgProto__Output)[];
}
