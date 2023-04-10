// Original file: src/snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTExpressionProto as _zetasql_ASTExpressionProto, ASTExpressionProto__Output as _zetasql_ASTExpressionProto__Output } from '../zetasql/ASTExpressionProto';
import type { ASTStructTypeProto as _zetasql_ASTStructTypeProto, ASTStructTypeProto__Output as _zetasql_ASTStructTypeProto__Output } from '../zetasql/ASTStructTypeProto';
import type { ASTStructConstructorArgProto as _zetasql_ASTStructConstructorArgProto, ASTStructConstructorArgProto__Output as _zetasql_ASTStructConstructorArgProto__Output } from '../zetasql/ASTStructConstructorArgProto';

export interface ASTStructConstructorWithKeywordProto {
  'parent'?: (_zetasql_ASTExpressionProto | null);
  'structType'?: (_zetasql_ASTStructTypeProto | null);
  'fields'?: (_zetasql_ASTStructConstructorArgProto)[];
}

export interface ASTStructConstructorWithKeywordProto__Output {
  'parent': (_zetasql_ASTExpressionProto__Output | null);
  'structType': (_zetasql_ASTStructTypeProto__Output | null);
  'fields': (_zetasql_ASTStructConstructorArgProto__Output)[];
}
