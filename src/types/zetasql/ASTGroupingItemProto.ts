// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { AnyASTExpressionProto as _zetasql_AnyASTExpressionProto, AnyASTExpressionProto__Output as _zetasql_AnyASTExpressionProto__Output } from '../zetasql/AnyASTExpressionProto';
import type { ASTRollupProto as _zetasql_ASTRollupProto, ASTRollupProto__Output as _zetasql_ASTRollupProto__Output } from '../zetasql/ASTRollupProto';

export interface ASTGroupingItemProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'expression'?: (_zetasql_AnyASTExpressionProto | null);
  'rollup'?: (_zetasql_ASTRollupProto | null);
}

export interface ASTGroupingItemProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'expression': (_zetasql_AnyASTExpressionProto__Output | null);
  'rollup': (_zetasql_ASTRollupProto__Output | null);
}
