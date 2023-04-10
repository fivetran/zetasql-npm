// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTAlterStatementBaseProto as _zetasql_ASTAlterStatementBaseProto, ASTAlterStatementBaseProto__Output as _zetasql_ASTAlterStatementBaseProto__Output } from '../zetasql/ASTAlterStatementBaseProto';
import type { ASTPrivilegesProto as _zetasql_ASTPrivilegesProto, ASTPrivilegesProto__Output as _zetasql_ASTPrivilegesProto__Output } from '../zetasql/ASTPrivilegesProto';
import type { ASTIdentifierProto as _zetasql_ASTIdentifierProto, ASTIdentifierProto__Output as _zetasql_ASTIdentifierProto__Output } from '../zetasql/ASTIdentifierProto';

export interface ASTAlterPrivilegeRestrictionStatementProto {
  'parent'?: (_zetasql_ASTAlterStatementBaseProto | null);
  'privileges'?: (_zetasql_ASTPrivilegesProto | null);
  'objectType'?: (_zetasql_ASTIdentifierProto | null);
}

export interface ASTAlterPrivilegeRestrictionStatementProto__Output {
  'parent': (_zetasql_ASTAlterStatementBaseProto__Output | null);
  'privileges': (_zetasql_ASTPrivilegesProto__Output | null);
  'objectType': (_zetasql_ASTIdentifierProto__Output | null);
}
