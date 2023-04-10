// Original file: src/zetasql-snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTCreateStatementProto as _zetasql_ASTCreateStatementProto, ASTCreateStatementProto__Output as _zetasql_ASTCreateStatementProto__Output } from '../zetasql/ASTCreateStatementProto';
import type { ASTPathExpressionProto as _zetasql_ASTPathExpressionProto, ASTPathExpressionProto__Output as _zetasql_ASTPathExpressionProto__Output } from '../zetasql/ASTPathExpressionProto';
import type { ASTCloneDataSourceProto as _zetasql_ASTCloneDataSourceProto, ASTCloneDataSourceProto__Output as _zetasql_ASTCloneDataSourceProto__Output } from '../zetasql/ASTCloneDataSourceProto';
import type { ASTOptionsListProto as _zetasql_ASTOptionsListProto, ASTOptionsListProto__Output as _zetasql_ASTOptionsListProto__Output } from '../zetasql/ASTOptionsListProto';

export interface ASTCreateSnapshotTableStatementProto {
  'parent'?: (_zetasql_ASTCreateStatementProto | null);
  'name'?: (_zetasql_ASTPathExpressionProto | null);
  'cloneDataSource'?: (_zetasql_ASTCloneDataSourceProto | null);
  'optionsList'?: (_zetasql_ASTOptionsListProto | null);
}

export interface ASTCreateSnapshotTableStatementProto__Output {
  'parent': (_zetasql_ASTCreateStatementProto__Output | null);
  'name': (_zetasql_ASTPathExpressionProto__Output | null);
  'cloneDataSource': (_zetasql_ASTCloneDataSourceProto__Output | null);
  'optionsList': (_zetasql_ASTOptionsListProto__Output | null);
}
