// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTIdentifierProto as _zetasql_ASTIdentifierProto, ASTIdentifierProto__Output as _zetasql_ASTIdentifierProto__Output } from '../zetasql/ASTIdentifierProto';

export interface ASTUsingClauseProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'keys'?: (_zetasql_ASTIdentifierProto)[];
}

export interface ASTUsingClauseProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'keys': (_zetasql_ASTIdentifierProto__Output)[];
}
