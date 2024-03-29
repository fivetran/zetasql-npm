// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTIdentifierProto as _zetasql_ASTIdentifierProto, ASTIdentifierProto__Output as _zetasql_ASTIdentifierProto__Output } from '../zetasql/ASTIdentifierProto';
import type { ASTOptionsListProto as _zetasql_ASTOptionsListProto, ASTOptionsListProto__Output as _zetasql_ASTOptionsListProto__Output } from '../zetasql/ASTOptionsListProto';

export interface ASTSelectWithProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'identifier'?: (_zetasql_ASTIdentifierProto | null);
  'options'?: (_zetasql_ASTOptionsListProto | null);
}

export interface ASTSelectWithProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'identifier': (_zetasql_ASTIdentifierProto__Output | null);
  'options': (_zetasql_ASTOptionsListProto__Output | null);
}
