// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTIdentifierProto as _zetasql_ASTIdentifierProto, ASTIdentifierProto__Output as _zetasql_ASTIdentifierProto__Output } from '../zetasql/ASTIdentifierProto';
import type { ASTPathExpressionListProto as _zetasql_ASTPathExpressionListProto, ASTPathExpressionListProto__Output as _zetasql_ASTPathExpressionListProto__Output } from '../zetasql/ASTPathExpressionListProto';

export interface ASTPrivilegeProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'privilegeAction'?: (_zetasql_ASTIdentifierProto | null);
  'paths'?: (_zetasql_ASTPathExpressionListProto | null);
}

export interface ASTPrivilegeProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'privilegeAction': (_zetasql_ASTIdentifierProto__Output | null);
  'paths': (_zetasql_ASTPathExpressionListProto__Output | null);
}
