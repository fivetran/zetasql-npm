// Original file: src/snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTDdlStatementProto as _zetasql_ASTDdlStatementProto, ASTDdlStatementProto__Output as _zetasql_ASTDdlStatementProto__Output } from '../zetasql/ASTDdlStatementProto';
import type { ASTPrivilegesProto as _zetasql_ASTPrivilegesProto, ASTPrivilegesProto__Output as _zetasql_ASTPrivilegesProto__Output } from '../zetasql/ASTPrivilegesProto';
import type { ASTIdentifierProto as _zetasql_ASTIdentifierProto, ASTIdentifierProto__Output as _zetasql_ASTIdentifierProto__Output } from '../zetasql/ASTIdentifierProto';
import type { ASTPathExpressionProto as _zetasql_ASTPathExpressionProto, ASTPathExpressionProto__Output as _zetasql_ASTPathExpressionProto__Output } from '../zetasql/ASTPathExpressionProto';

export interface ASTDropPrivilegeRestrictionStatementProto {
  'parent'?: (_zetasql_ASTDdlStatementProto | null);
  'isIfExists'?: (boolean);
  'privileges'?: (_zetasql_ASTPrivilegesProto | null);
  'objectType'?: (_zetasql_ASTIdentifierProto | null);
  'namePath'?: (_zetasql_ASTPathExpressionProto | null);
}

export interface ASTDropPrivilegeRestrictionStatementProto__Output {
  'parent': (_zetasql_ASTDdlStatementProto__Output | null);
  'isIfExists': (boolean);
  'privileges': (_zetasql_ASTPrivilegesProto__Output | null);
  'objectType': (_zetasql_ASTIdentifierProto__Output | null);
  'namePath': (_zetasql_ASTPathExpressionProto__Output | null);
}
