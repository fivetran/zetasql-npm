// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTTableExpressionProto as _zetasql_ASTTableExpressionProto, ASTTableExpressionProto__Output as _zetasql_ASTTableExpressionProto__Output } from '../zetasql/ASTTableExpressionProto';
import type { ASTPathExpressionProto as _zetasql_ASTPathExpressionProto, ASTPathExpressionProto__Output as _zetasql_ASTPathExpressionProto__Output } from '../zetasql/ASTPathExpressionProto';
import type { ASTForSystemTimeProto as _zetasql_ASTForSystemTimeProto, ASTForSystemTimeProto__Output as _zetasql_ASTForSystemTimeProto__Output } from '../zetasql/ASTForSystemTimeProto';
import type { ASTWhereClauseProto as _zetasql_ASTWhereClauseProto, ASTWhereClauseProto__Output as _zetasql_ASTWhereClauseProto__Output } from '../zetasql/ASTWhereClauseProto';

export interface ASTTableDataSourceProto {
  'parent'?: (_zetasql_ASTTableExpressionProto | null);
  'pathExpr'?: (_zetasql_ASTPathExpressionProto | null);
  'forSystemTime'?: (_zetasql_ASTForSystemTimeProto | null);
  'whereClause'?: (_zetasql_ASTWhereClauseProto | null);
}

export interface ASTTableDataSourceProto__Output {
  'parent': (_zetasql_ASTTableExpressionProto__Output | null);
  'pathExpr': (_zetasql_ASTPathExpressionProto__Output | null);
  'forSystemTime': (_zetasql_ASTForSystemTimeProto__Output | null);
  'whereClause': (_zetasql_ASTWhereClauseProto__Output | null);
}
