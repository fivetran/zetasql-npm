// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTIdentifierProto as _zetasql_ASTIdentifierProto, ASTIdentifierProto__Output as _zetasql_ASTIdentifierProto__Output } from '../zetasql/ASTIdentifierProto';

export interface ASTDescriptorColumnProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'name'?: (_zetasql_ASTIdentifierProto | null);
}

export interface ASTDescriptorColumnProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'name': (_zetasql_ASTIdentifierProto__Output | null);
}
