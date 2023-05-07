// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTCreateStatementProto as _zetasql_ASTCreateStatementProto, ASTCreateStatementProto__Output as _zetasql_ASTCreateStatementProto__Output } from '../zetasql/ASTCreateStatementProto';
import type { ASTPathExpressionProto as _zetasql_ASTPathExpressionProto, ASTPathExpressionProto__Output as _zetasql_ASTPathExpressionProto__Output } from '../zetasql/ASTPathExpressionProto';
import type { ASTTableElementListProto as _zetasql_ASTTableElementListProto, ASTTableElementListProto__Output as _zetasql_ASTTableElementListProto__Output } from '../zetasql/ASTTableElementListProto';
import type { ASTOptionsListProto as _zetasql_ASTOptionsListProto, ASTOptionsListProto__Output as _zetasql_ASTOptionsListProto__Output } from '../zetasql/ASTOptionsListProto';
import type { ASTCollateProto as _zetasql_ASTCollateProto, ASTCollateProto__Output as _zetasql_ASTCollateProto__Output } from '../zetasql/ASTCollateProto';
import type { ASTWithConnectionClauseProto as _zetasql_ASTWithConnectionClauseProto, ASTWithConnectionClauseProto__Output as _zetasql_ASTWithConnectionClauseProto__Output } from '../zetasql/ASTWithConnectionClauseProto';

export interface ASTCreateTableStmtBaseProto {
  'parent'?: (_zetasql_ASTCreateStatementProto | null);
  'name'?: (_zetasql_ASTPathExpressionProto | null);
  'tableElementList'?: (_zetasql_ASTTableElementListProto | null);
  'optionsList'?: (_zetasql_ASTOptionsListProto | null);
  'likeTableName'?: (_zetasql_ASTPathExpressionProto | null);
  'collate'?: (_zetasql_ASTCollateProto | null);
  'withConnectionClause'?: (_zetasql_ASTWithConnectionClauseProto | null);
}

export interface ASTCreateTableStmtBaseProto__Output {
  'parent': (_zetasql_ASTCreateStatementProto__Output | null);
  'name': (_zetasql_ASTPathExpressionProto__Output | null);
  'tableElementList': (_zetasql_ASTTableElementListProto__Output | null);
  'optionsList': (_zetasql_ASTOptionsListProto__Output | null);
  'likeTableName': (_zetasql_ASTPathExpressionProto__Output | null);
  'collate': (_zetasql_ASTCollateProto__Output | null);
  'withConnectionClause': (_zetasql_ASTWithConnectionClauseProto__Output | null);
}
