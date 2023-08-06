// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { AnyASTExpressionProto as _zetasql_AnyASTExpressionProto, AnyASTExpressionProto__Output as _zetasql_AnyASTExpressionProto__Output } from '../zetasql/AnyASTExpressionProto';
import type { ASTRollupProto as _zetasql_ASTRollupProto, ASTRollupProto__Output as _zetasql_ASTRollupProto__Output } from '../zetasql/ASTRollupProto';
import type { ASTCubeProto as _zetasql_ASTCubeProto, ASTCubeProto__Output as _zetasql_ASTCubeProto__Output } from '../zetasql/ASTCubeProto';

export interface ASTGroupingSetProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'expression'?: (_zetasql_AnyASTExpressionProto | null);
  'rollup'?: (_zetasql_ASTRollupProto | null);
  'cube'?: (_zetasql_ASTCubeProto | null);
}

export interface ASTGroupingSetProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'expression': (_zetasql_AnyASTExpressionProto__Output | null);
  'rollup': (_zetasql_ASTRollupProto__Output | null);
  'cube': (_zetasql_ASTCubeProto__Output | null);
}
