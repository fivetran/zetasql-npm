// Original file: src/zetasql-snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTExpressionProto as _zetasql_ASTExpressionProto, ASTExpressionProto__Output as _zetasql_ASTExpressionProto__Output } from '../zetasql/ASTExpressionProto';
import type { ASTBracedConstructorFieldProto as _zetasql_ASTBracedConstructorFieldProto, ASTBracedConstructorFieldProto__Output as _zetasql_ASTBracedConstructorFieldProto__Output } from '../zetasql/ASTBracedConstructorFieldProto';

export interface ASTBracedConstructorProto {
  'parent'?: (_zetasql_ASTExpressionProto | null);
  'fields'?: (_zetasql_ASTBracedConstructorFieldProto)[];
}

export interface ASTBracedConstructorProto__Output {
  'parent': (_zetasql_ASTExpressionProto__Output | null);
  'fields': (_zetasql_ASTBracedConstructorFieldProto__Output)[];
}
