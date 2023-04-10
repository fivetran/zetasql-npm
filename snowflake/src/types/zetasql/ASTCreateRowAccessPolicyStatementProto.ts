// Original file: src/zetasql-snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTCreateStatementProto as _zetasql_ASTCreateStatementProto, ASTCreateStatementProto__Output as _zetasql_ASTCreateStatementProto__Output } from '../zetasql/ASTCreateStatementProto';
import type { ASTPathExpressionProto as _zetasql_ASTPathExpressionProto, ASTPathExpressionProto__Output as _zetasql_ASTPathExpressionProto__Output } from '../zetasql/ASTPathExpressionProto';
import type { ASTGrantToClauseProto as _zetasql_ASTGrantToClauseProto, ASTGrantToClauseProto__Output as _zetasql_ASTGrantToClauseProto__Output } from '../zetasql/ASTGrantToClauseProto';
import type { ASTFilterUsingClauseProto as _zetasql_ASTFilterUsingClauseProto, ASTFilterUsingClauseProto__Output as _zetasql_ASTFilterUsingClauseProto__Output } from '../zetasql/ASTFilterUsingClauseProto';

export interface ASTCreateRowAccessPolicyStatementProto {
  'parent'?: (_zetasql_ASTCreateStatementProto | null);
  'targetPath'?: (_zetasql_ASTPathExpressionProto | null);
  'grantTo'?: (_zetasql_ASTGrantToClauseProto | null);
  'filterUsing'?: (_zetasql_ASTFilterUsingClauseProto | null);
  'name'?: (_zetasql_ASTPathExpressionProto | null);
  'hasAccessKeyword'?: (boolean);
}

export interface ASTCreateRowAccessPolicyStatementProto__Output {
  'parent': (_zetasql_ASTCreateStatementProto__Output | null);
  'targetPath': (_zetasql_ASTPathExpressionProto__Output | null);
  'grantTo': (_zetasql_ASTGrantToClauseProto__Output | null);
  'filterUsing': (_zetasql_ASTFilterUsingClauseProto__Output | null);
  'name': (_zetasql_ASTPathExpressionProto__Output | null);
  'hasAccessKeyword': (boolean);
}
