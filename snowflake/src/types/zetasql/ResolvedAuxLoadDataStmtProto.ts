// Original file: src/snowflake/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedStatementProto as _zetasql_ResolvedStatementProto, ResolvedStatementProto__Output as _zetasql_ResolvedStatementProto__Output } from '../zetasql/ResolvedStatementProto';
import type { _zetasql_ResolvedAuxLoadDataStmtEnums_InsertionMode, _zetasql_ResolvedAuxLoadDataStmtEnums_InsertionMode__Output } from '../zetasql/ResolvedAuxLoadDataStmtEnums';
import type { ResolvedOutputColumnProto as _zetasql_ResolvedOutputColumnProto, ResolvedOutputColumnProto__Output as _zetasql_ResolvedOutputColumnProto__Output } from '../zetasql/ResolvedOutputColumnProto';
import type { ResolvedColumnDefinitionProto as _zetasql_ResolvedColumnDefinitionProto, ResolvedColumnDefinitionProto__Output as _zetasql_ResolvedColumnDefinitionProto__Output } from '../zetasql/ResolvedColumnDefinitionProto';
import type { ResolvedColumnProto as _zetasql_ResolvedColumnProto, ResolvedColumnProto__Output as _zetasql_ResolvedColumnProto__Output } from '../zetasql/ResolvedColumnProto';
import type { ResolvedPrimaryKeyProto as _zetasql_ResolvedPrimaryKeyProto, ResolvedPrimaryKeyProto__Output as _zetasql_ResolvedPrimaryKeyProto__Output } from '../zetasql/ResolvedPrimaryKeyProto';
import type { ResolvedForeignKeyProto as _zetasql_ResolvedForeignKeyProto, ResolvedForeignKeyProto__Output as _zetasql_ResolvedForeignKeyProto__Output } from '../zetasql/ResolvedForeignKeyProto';
import type { ResolvedCheckConstraintProto as _zetasql_ResolvedCheckConstraintProto, ResolvedCheckConstraintProto__Output as _zetasql_ResolvedCheckConstraintProto__Output } from '../zetasql/ResolvedCheckConstraintProto';
import type { AnyResolvedExprProto as _zetasql_AnyResolvedExprProto, AnyResolvedExprProto__Output as _zetasql_AnyResolvedExprProto__Output } from '../zetasql/AnyResolvedExprProto';
import type { ResolvedOptionProto as _zetasql_ResolvedOptionProto, ResolvedOptionProto__Output as _zetasql_ResolvedOptionProto__Output } from '../zetasql/ResolvedOptionProto';
import type { ResolvedWithPartitionColumnsProto as _zetasql_ResolvedWithPartitionColumnsProto, ResolvedWithPartitionColumnsProto__Output as _zetasql_ResolvedWithPartitionColumnsProto__Output } from '../zetasql/ResolvedWithPartitionColumnsProto';
import type { ResolvedConnectionProto as _zetasql_ResolvedConnectionProto, ResolvedConnectionProto__Output as _zetasql_ResolvedConnectionProto__Output } from '../zetasql/ResolvedConnectionProto';
import type { ResolvedAuxLoadDataPartitionFilterProto as _zetasql_ResolvedAuxLoadDataPartitionFilterProto, ResolvedAuxLoadDataPartitionFilterProto__Output as _zetasql_ResolvedAuxLoadDataPartitionFilterProto__Output } from '../zetasql/ResolvedAuxLoadDataPartitionFilterProto';

export interface ResolvedAuxLoadDataStmtProto {
  'parent'?: (_zetasql_ResolvedStatementProto | null);
  'insertionMode'?: (_zetasql_ResolvedAuxLoadDataStmtEnums_InsertionMode);
  'namePath'?: (string)[];
  'outputColumnList'?: (_zetasql_ResolvedOutputColumnProto)[];
  'columnDefinitionList'?: (_zetasql_ResolvedColumnDefinitionProto)[];
  'pseudoColumnList'?: (_zetasql_ResolvedColumnProto)[];
  'primaryKey'?: (_zetasql_ResolvedPrimaryKeyProto | null);
  'foreignKeyList'?: (_zetasql_ResolvedForeignKeyProto)[];
  'checkConstraintList'?: (_zetasql_ResolvedCheckConstraintProto)[];
  'partitionByList'?: (_zetasql_AnyResolvedExprProto)[];
  'clusterByList'?: (_zetasql_AnyResolvedExprProto)[];
  'optionList'?: (_zetasql_ResolvedOptionProto)[];
  'withPartitionColumns'?: (_zetasql_ResolvedWithPartitionColumnsProto | null);
  'connection'?: (_zetasql_ResolvedConnectionProto | null);
  'fromFilesOptionList'?: (_zetasql_ResolvedOptionProto)[];
  'partitionFilter'?: (_zetasql_ResolvedAuxLoadDataPartitionFilterProto | null);
  'isTempTable'?: (boolean);
}

export interface ResolvedAuxLoadDataStmtProto__Output {
  'parent': (_zetasql_ResolvedStatementProto__Output | null);
  'insertionMode': (_zetasql_ResolvedAuxLoadDataStmtEnums_InsertionMode__Output);
  'namePath': (string)[];
  'outputColumnList': (_zetasql_ResolvedOutputColumnProto__Output)[];
  'columnDefinitionList': (_zetasql_ResolvedColumnDefinitionProto__Output)[];
  'pseudoColumnList': (_zetasql_ResolvedColumnProto__Output)[];
  'primaryKey': (_zetasql_ResolvedPrimaryKeyProto__Output | null);
  'foreignKeyList': (_zetasql_ResolvedForeignKeyProto__Output)[];
  'checkConstraintList': (_zetasql_ResolvedCheckConstraintProto__Output)[];
  'partitionByList': (_zetasql_AnyResolvedExprProto__Output)[];
  'clusterByList': (_zetasql_AnyResolvedExprProto__Output)[];
  'optionList': (_zetasql_ResolvedOptionProto__Output)[];
  'withPartitionColumns': (_zetasql_ResolvedWithPartitionColumnsProto__Output | null);
  'connection': (_zetasql_ResolvedConnectionProto__Output | null);
  'fromFilesOptionList': (_zetasql_ResolvedOptionProto__Output)[];
  'partitionFilter': (_zetasql_ResolvedAuxLoadDataPartitionFilterProto__Output | null);
  'isTempTable': (boolean);
}
