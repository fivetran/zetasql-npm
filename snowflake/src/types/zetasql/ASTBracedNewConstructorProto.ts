// Original file: src/snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTExpressionProto as _zetasql_ASTExpressionProto, ASTExpressionProto__Output as _zetasql_ASTExpressionProto__Output } from '../zetasql/ASTExpressionProto';
import type { ASTSimpleTypeProto as _zetasql_ASTSimpleTypeProto, ASTSimpleTypeProto__Output as _zetasql_ASTSimpleTypeProto__Output } from '../zetasql/ASTSimpleTypeProto';
import type { ASTBracedConstructorProto as _zetasql_ASTBracedConstructorProto, ASTBracedConstructorProto__Output as _zetasql_ASTBracedConstructorProto__Output } from '../zetasql/ASTBracedConstructorProto';

export interface ASTBracedNewConstructorProto {
  'parent'?: (_zetasql_ASTExpressionProto | null);
  'typeName'?: (_zetasql_ASTSimpleTypeProto | null);
  'bracedConstructor'?: (_zetasql_ASTBracedConstructorProto | null);
}

export interface ASTBracedNewConstructorProto__Output {
  'parent': (_zetasql_ASTExpressionProto__Output | null);
  'typeName': (_zetasql_ASTSimpleTypeProto__Output | null);
  'bracedConstructor': (_zetasql_ASTBracedConstructorProto__Output | null);
}
