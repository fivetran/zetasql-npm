// Original file: src/snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTStatementProto as _zetasql_ASTStatementProto, ASTStatementProto__Output as _zetasql_ASTStatementProto__Output } from '../zetasql/ASTStatementProto';
import type { ASTPathExpressionProto as _zetasql_ASTPathExpressionProto, ASTPathExpressionProto__Output as _zetasql_ASTPathExpressionProto__Output } from '../zetasql/ASTPathExpressionProto';
import type { ASTWithConnectionClauseProto as _zetasql_ASTWithConnectionClauseProto, ASTWithConnectionClauseProto__Output as _zetasql_ASTWithConnectionClauseProto__Output } from '../zetasql/ASTWithConnectionClauseProto';
import type { ASTOptionsListProto as _zetasql_ASTOptionsListProto, ASTOptionsListProto__Output as _zetasql_ASTOptionsListProto__Output } from '../zetasql/ASTOptionsListProto';

export interface ASTExportModelStatementProto {
  'parent'?: (_zetasql_ASTStatementProto | null);
  'modelNamePath'?: (_zetasql_ASTPathExpressionProto | null);
  'withConnectionClause'?: (_zetasql_ASTWithConnectionClauseProto | null);
  'optionsList'?: (_zetasql_ASTOptionsListProto | null);
}

export interface ASTExportModelStatementProto__Output {
  'parent': (_zetasql_ASTStatementProto__Output | null);
  'modelNamePath': (_zetasql_ASTPathExpressionProto__Output | null);
  'withConnectionClause': (_zetasql_ASTWithConnectionClauseProto__Output | null);
  'optionsList': (_zetasql_ASTOptionsListProto__Output | null);
}
