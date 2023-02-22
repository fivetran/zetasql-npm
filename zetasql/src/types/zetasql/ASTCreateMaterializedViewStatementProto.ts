// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTCreateViewStatementBaseProto as _zetasql_ASTCreateViewStatementBaseProto, ASTCreateViewStatementBaseProto__Output as _zetasql_ASTCreateViewStatementBaseProto__Output } from '../zetasql/ASTCreateViewStatementBaseProto';
import type { ASTPartitionByProto as _zetasql_ASTPartitionByProto, ASTPartitionByProto__Output as _zetasql_ASTPartitionByProto__Output } from '../zetasql/ASTPartitionByProto';
import type { ASTClusterByProto as _zetasql_ASTClusterByProto, ASTClusterByProto__Output as _zetasql_ASTClusterByProto__Output } from '../zetasql/ASTClusterByProto';

export interface ASTCreateMaterializedViewStatementProto {
  'parent'?: (_zetasql_ASTCreateViewStatementBaseProto | null);
  'partitionBy'?: (_zetasql_ASTPartitionByProto | null);
  'clusterBy'?: (_zetasql_ASTClusterByProto | null);
}

export interface ASTCreateMaterializedViewStatementProto__Output {
  'parent': (_zetasql_ASTCreateViewStatementBaseProto__Output | null);
  'partitionBy': (_zetasql_ASTPartitionByProto__Output | null);
  'clusterBy': (_zetasql_ASTClusterByProto__Output | null);
}
