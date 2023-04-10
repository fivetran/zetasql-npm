// Original file: src/zetasql-snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTStatementProto as _zetasql_ASTStatementProto, ASTStatementProto__Output as _zetasql_ASTStatementProto__Output } from '../zetasql/ASTStatementProto';
import type { ASTPathExpressionProto as _zetasql_ASTPathExpressionProto, ASTPathExpressionProto__Output as _zetasql_ASTPathExpressionProto__Output } from '../zetasql/ASTPathExpressionProto';
import type { ASTCloneDataSourceListProto as _zetasql_ASTCloneDataSourceListProto, ASTCloneDataSourceListProto__Output as _zetasql_ASTCloneDataSourceListProto__Output } from '../zetasql/ASTCloneDataSourceListProto';

export interface ASTCloneDataStatementProto {
  'parent'?: (_zetasql_ASTStatementProto | null);
  'targetPath'?: (_zetasql_ASTPathExpressionProto | null);
  'dataSourceList'?: (_zetasql_ASTCloneDataSourceListProto | null);
}

export interface ASTCloneDataStatementProto__Output {
  'parent': (_zetasql_ASTStatementProto__Output | null);
  'targetPath': (_zetasql_ASTPathExpressionProto__Output | null);
  'dataSourceList': (_zetasql_ASTCloneDataSourceListProto__Output | null);
}
