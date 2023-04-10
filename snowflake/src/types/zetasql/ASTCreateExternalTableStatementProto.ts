// Original file: src/zetasql-snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTCreateTableStmtBaseProto as _zetasql_ASTCreateTableStmtBaseProto, ASTCreateTableStmtBaseProto__Output as _zetasql_ASTCreateTableStmtBaseProto__Output } from '../zetasql/ASTCreateTableStmtBaseProto';
import type { ASTWithPartitionColumnsClauseProto as _zetasql_ASTWithPartitionColumnsClauseProto, ASTWithPartitionColumnsClauseProto__Output as _zetasql_ASTWithPartitionColumnsClauseProto__Output } from '../zetasql/ASTWithPartitionColumnsClauseProto';
import type { ASTWithConnectionClauseProto as _zetasql_ASTWithConnectionClauseProto, ASTWithConnectionClauseProto__Output as _zetasql_ASTWithConnectionClauseProto__Output } from '../zetasql/ASTWithConnectionClauseProto';

export interface ASTCreateExternalTableStatementProto {
  'parent'?: (_zetasql_ASTCreateTableStmtBaseProto | null);
  'withPartitionColumnsClause'?: (_zetasql_ASTWithPartitionColumnsClauseProto | null);
  'withConnectionClause'?: (_zetasql_ASTWithConnectionClauseProto | null);
}

export interface ASTCreateExternalTableStatementProto__Output {
  'parent': (_zetasql_ASTCreateTableStmtBaseProto__Output | null);
  'withPartitionColumnsClause': (_zetasql_ASTWithPartitionColumnsClauseProto__Output | null);
  'withConnectionClause': (_zetasql_ASTWithConnectionClauseProto__Output | null);
}
