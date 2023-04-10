// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTIdentifierListProto as _zetasql_ASTIdentifierListProto, ASTIdentifierListProto__Output as _zetasql_ASTIdentifierListProto__Output } from '../zetasql/ASTIdentifierListProto';

export interface ASTExecuteIntoClauseProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'identifiers'?: (_zetasql_ASTIdentifierListProto | null);
}

export interface ASTExecuteIntoClauseProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'identifiers': (_zetasql_ASTIdentifierListProto__Output | null);
}
