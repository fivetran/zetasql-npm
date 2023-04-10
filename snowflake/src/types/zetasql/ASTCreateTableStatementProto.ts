// Original file: src/zetasql-snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTCreateTableStmtBaseProto as _zetasql_ASTCreateTableStmtBaseProto, ASTCreateTableStmtBaseProto__Output as _zetasql_ASTCreateTableStmtBaseProto__Output } from '../zetasql/ASTCreateTableStmtBaseProto';
import type { ASTCloneDataSourceProto as _zetasql_ASTCloneDataSourceProto, ASTCloneDataSourceProto__Output as _zetasql_ASTCloneDataSourceProto__Output } from '../zetasql/ASTCloneDataSourceProto';
import type { ASTCopyDataSourceProto as _zetasql_ASTCopyDataSourceProto, ASTCopyDataSourceProto__Output as _zetasql_ASTCopyDataSourceProto__Output } from '../zetasql/ASTCopyDataSourceProto';
import type { ASTPartitionByProto as _zetasql_ASTPartitionByProto, ASTPartitionByProto__Output as _zetasql_ASTPartitionByProto__Output } from '../zetasql/ASTPartitionByProto';
import type { ASTClusterByProto as _zetasql_ASTClusterByProto, ASTClusterByProto__Output as _zetasql_ASTClusterByProto__Output } from '../zetasql/ASTClusterByProto';
import type { ASTQueryProto as _zetasql_ASTQueryProto, ASTQueryProto__Output as _zetasql_ASTQueryProto__Output } from '../zetasql/ASTQueryProto';
import type { ASTSpannerTableOptionsProto as _zetasql_ASTSpannerTableOptionsProto, ASTSpannerTableOptionsProto__Output as _zetasql_ASTSpannerTableOptionsProto__Output } from '../zetasql/ASTSpannerTableOptionsProto';
import type { ASTTtlClauseProto as _zetasql_ASTTtlClauseProto, ASTTtlClauseProto__Output as _zetasql_ASTTtlClauseProto__Output } from '../zetasql/ASTTtlClauseProto';

export interface ASTCreateTableStatementProto {
  'parent'?: (_zetasql_ASTCreateTableStmtBaseProto | null);
  'cloneDataSource'?: (_zetasql_ASTCloneDataSourceProto | null);
  'copyDataSource'?: (_zetasql_ASTCopyDataSourceProto | null);
  'partitionBy'?: (_zetasql_ASTPartitionByProto | null);
  'clusterBy'?: (_zetasql_ASTClusterByProto | null);
  'query'?: (_zetasql_ASTQueryProto | null);
  'spannerOptions'?: (_zetasql_ASTSpannerTableOptionsProto | null);
  'ttl'?: (_zetasql_ASTTtlClauseProto | null);
}

export interface ASTCreateTableStatementProto__Output {
  'parent': (_zetasql_ASTCreateTableStmtBaseProto__Output | null);
  'cloneDataSource': (_zetasql_ASTCloneDataSourceProto__Output | null);
  'copyDataSource': (_zetasql_ASTCopyDataSourceProto__Output | null);
  'partitionBy': (_zetasql_ASTPartitionByProto__Output | null);
  'clusterBy': (_zetasql_ASTClusterByProto__Output | null);
  'query': (_zetasql_ASTQueryProto__Output | null);
  'spannerOptions': (_zetasql_ASTSpannerTableOptionsProto__Output | null);
  'ttl': (_zetasql_ASTTtlClauseProto__Output | null);
}
