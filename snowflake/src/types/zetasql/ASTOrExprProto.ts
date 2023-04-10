// Original file: src/zetasql-snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTExpressionProto as _zetasql_ASTExpressionProto, ASTExpressionProto__Output as _zetasql_ASTExpressionProto__Output } from '../zetasql/ASTExpressionProto';
import type { AnyASTExpressionProto as _zetasql_AnyASTExpressionProto, AnyASTExpressionProto__Output as _zetasql_AnyASTExpressionProto__Output } from '../zetasql/AnyASTExpressionProto';

export interface ASTOrExprProto {
  'parent'?: (_zetasql_ASTExpressionProto | null);
  'disjuncts'?: (_zetasql_AnyASTExpressionProto)[];
}

export interface ASTOrExprProto__Output {
  'parent': (_zetasql_ASTExpressionProto__Output | null);
  'disjuncts': (_zetasql_AnyASTExpressionProto__Output)[];
}
