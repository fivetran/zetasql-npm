// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTCreateTableStmtBaseProto as _zetasql_ASTCreateTableStmtBaseProto, ASTCreateTableStmtBaseProto__Output as _zetasql_ASTCreateTableStmtBaseProto__Output } from '../zetasql/ASTCreateTableStmtBaseProto';
import type { _zetasql_ASTAuxLoadDataStatementEnums_InsertionMode, _zetasql_ASTAuxLoadDataStatementEnums_InsertionMode__Output } from '../zetasql/ASTAuxLoadDataStatementEnums';
import type { ASTPartitionByProto as _zetasql_ASTPartitionByProto, ASTPartitionByProto__Output as _zetasql_ASTPartitionByProto__Output } from '../zetasql/ASTPartitionByProto';
import type { ASTClusterByProto as _zetasql_ASTClusterByProto, ASTClusterByProto__Output as _zetasql_ASTClusterByProto__Output } from '../zetasql/ASTClusterByProto';
import type { ASTAuxLoadDataFromFilesOptionsListProto as _zetasql_ASTAuxLoadDataFromFilesOptionsListProto, ASTAuxLoadDataFromFilesOptionsListProto__Output as _zetasql_ASTAuxLoadDataFromFilesOptionsListProto__Output } from '../zetasql/ASTAuxLoadDataFromFilesOptionsListProto';
import type { ASTWithPartitionColumnsClauseProto as _zetasql_ASTWithPartitionColumnsClauseProto, ASTWithPartitionColumnsClauseProto__Output as _zetasql_ASTWithPartitionColumnsClauseProto__Output } from '../zetasql/ASTWithPartitionColumnsClauseProto';
import type { ASTWithConnectionClauseProto as _zetasql_ASTWithConnectionClauseProto, ASTWithConnectionClauseProto__Output as _zetasql_ASTWithConnectionClauseProto__Output } from '../zetasql/ASTWithConnectionClauseProto';

export interface ASTAuxLoadDataStatementProto {
  'parent'?: (_zetasql_ASTCreateTableStmtBaseProto | null);
  'insertionMode'?: (_zetasql_ASTAuxLoadDataStatementEnums_InsertionMode);
  'partitionBy'?: (_zetasql_ASTPartitionByProto | null);
  'clusterBy'?: (_zetasql_ASTClusterByProto | null);
  'fromFiles'?: (_zetasql_ASTAuxLoadDataFromFilesOptionsListProto | null);
  'withPartitionColumnsClause'?: (_zetasql_ASTWithPartitionColumnsClauseProto | null);
  'withConnectionClause'?: (_zetasql_ASTWithConnectionClauseProto | null);
}

export interface ASTAuxLoadDataStatementProto__Output {
  'parent': (_zetasql_ASTCreateTableStmtBaseProto__Output | null);
  'insertionMode': (_zetasql_ASTAuxLoadDataStatementEnums_InsertionMode__Output);
  'partitionBy': (_zetasql_ASTPartitionByProto__Output | null);
  'clusterBy': (_zetasql_ASTClusterByProto__Output | null);
  'fromFiles': (_zetasql_ASTAuxLoadDataFromFilesOptionsListProto__Output | null);
  'withPartitionColumnsClause': (_zetasql_ASTWithPartitionColumnsClauseProto__Output | null);
  'withConnectionClause': (_zetasql_ASTWithConnectionClauseProto__Output | null);
}
