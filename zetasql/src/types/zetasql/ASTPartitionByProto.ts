// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTHintProto as _zetasql_ASTHintProto, ASTHintProto__Output as _zetasql_ASTHintProto__Output } from '../zetasql/ASTHintProto';
import type { AnyASTExpressionProto as _zetasql_AnyASTExpressionProto, AnyASTExpressionProto__Output as _zetasql_AnyASTExpressionProto__Output } from '../zetasql/AnyASTExpressionProto';

export interface ASTPartitionByProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'hint'?: (_zetasql_ASTHintProto | null);
  'partitioningExpressions'?: (_zetasql_AnyASTExpressionProto)[];
}

export interface ASTPartitionByProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'hint': (_zetasql_ASTHintProto__Output | null);
  'partitioningExpressions': (_zetasql_AnyASTExpressionProto__Output)[];
}
