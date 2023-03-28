// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { AnyASTExpressionProto as _zetasql_AnyASTExpressionProto, AnyASTExpressionProto__Output as _zetasql_AnyASTExpressionProto__Output } from '../zetasql/AnyASTExpressionProto';
import type { ASTPartitionByProto as _zetasql_ASTPartitionByProto, ASTPartitionByProto__Output as _zetasql_ASTPartitionByProto__Output } from '../zetasql/ASTPartitionByProto';
import type { _zetasql_ASTSampleSizeEnums_Unit, _zetasql_ASTSampleSizeEnums_Unit__Output } from '../zetasql/ASTSampleSizeEnums';

export interface ASTSampleSizeProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'size'?: (_zetasql_AnyASTExpressionProto | null);
  'partitionBy'?: (_zetasql_ASTPartitionByProto | null);
  'unit'?: (_zetasql_ASTSampleSizeEnums_Unit);
}

export interface ASTSampleSizeProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'size': (_zetasql_AnyASTExpressionProto__Output | null);
  'partitionBy': (_zetasql_ASTPartitionByProto__Output | null);
  'unit': (_zetasql_ASTSampleSizeEnums_Unit__Output);
}
