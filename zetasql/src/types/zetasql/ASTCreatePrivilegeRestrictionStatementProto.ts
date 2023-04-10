// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTCreateStatementProto as _zetasql_ASTCreateStatementProto, ASTCreateStatementProto__Output as _zetasql_ASTCreateStatementProto__Output } from '../zetasql/ASTCreateStatementProto';
import type { ASTPrivilegesProto as _zetasql_ASTPrivilegesProto, ASTPrivilegesProto__Output as _zetasql_ASTPrivilegesProto__Output } from '../zetasql/ASTPrivilegesProto';
import type { ASTIdentifierProto as _zetasql_ASTIdentifierProto, ASTIdentifierProto__Output as _zetasql_ASTIdentifierProto__Output } from '../zetasql/ASTIdentifierProto';
import type { ASTPathExpressionProto as _zetasql_ASTPathExpressionProto, ASTPathExpressionProto__Output as _zetasql_ASTPathExpressionProto__Output } from '../zetasql/ASTPathExpressionProto';
import type { ASTRestrictToClauseProto as _zetasql_ASTRestrictToClauseProto, ASTRestrictToClauseProto__Output as _zetasql_ASTRestrictToClauseProto__Output } from '../zetasql/ASTRestrictToClauseProto';

export interface ASTCreatePrivilegeRestrictionStatementProto {
  'parent'?: (_zetasql_ASTCreateStatementProto | null);
  'privileges'?: (_zetasql_ASTPrivilegesProto | null);
  'objectType'?: (_zetasql_ASTIdentifierProto | null);
  'namePath'?: (_zetasql_ASTPathExpressionProto | null);
  'restrictTo'?: (_zetasql_ASTRestrictToClauseProto | null);
}

export interface ASTCreatePrivilegeRestrictionStatementProto__Output {
  'parent': (_zetasql_ASTCreateStatementProto__Output | null);
  'privileges': (_zetasql_ASTPrivilegesProto__Output | null);
  'objectType': (_zetasql_ASTIdentifierProto__Output | null);
  'namePath': (_zetasql_ASTPathExpressionProto__Output | null);
  'restrictTo': (_zetasql_ASTRestrictToClauseProto__Output | null);
}
