// Original file: src/snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTPrivilegeProto as _zetasql_ASTPrivilegeProto, ASTPrivilegeProto__Output as _zetasql_ASTPrivilegeProto__Output } from '../zetasql/ASTPrivilegeProto';

export interface ASTPrivilegesProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'privileges'?: (_zetasql_ASTPrivilegeProto)[];
}

export interface ASTPrivilegesProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'privileges': (_zetasql_ASTPrivilegeProto__Output)[];
}
