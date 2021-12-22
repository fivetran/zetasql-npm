// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTIdentifierProto as _zetasql_ASTIdentifierProto, ASTIdentifierProto__Output as _zetasql_ASTIdentifierProto__Output } from '../zetasql/ASTIdentifierProto';
import type { ASTColumnListProto as _zetasql_ASTColumnListProto, ASTColumnListProto__Output as _zetasql_ASTColumnListProto__Output } from '../zetasql/ASTColumnListProto';

export interface ASTPrivilegeProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'privilegeAction'?: (_zetasql_ASTIdentifierProto | null);
  'columnList'?: (_zetasql_ASTColumnListProto | null);
}

export interface ASTPrivilegeProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'privilegeAction': (_zetasql_ASTIdentifierProto__Output | null);
  'columnList': (_zetasql_ASTColumnListProto__Output | null);
}
