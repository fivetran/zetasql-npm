// Original file: src/zetasql-snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTIdentifierProto as _zetasql_ASTIdentifierProto, ASTIdentifierProto__Output as _zetasql_ASTIdentifierProto__Output } from '../zetasql/ASTIdentifierProto';

export interface ASTColumnListProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'identifiers'?: (_zetasql_ASTIdentifierProto)[];
}

export interface ASTColumnListProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'identifiers': (_zetasql_ASTIdentifierProto__Output)[];
}
