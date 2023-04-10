// Original file: src/zetasql-snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTAlterActionProto as _zetasql_ASTAlterActionProto, ASTAlterActionProto__Output as _zetasql_ASTAlterActionProto__Output } from '../zetasql/ASTAlterActionProto';
import type { ASTIdentifierProto as _zetasql_ASTIdentifierProto, ASTIdentifierProto__Output as _zetasql_ASTIdentifierProto__Output } from '../zetasql/ASTIdentifierProto';

export interface ASTDropSubEntityActionProto {
  'parent'?: (_zetasql_ASTAlterActionProto | null);
  'type'?: (_zetasql_ASTIdentifierProto | null);
  'name'?: (_zetasql_ASTIdentifierProto | null);
  'isIfExists'?: (boolean);
}

export interface ASTDropSubEntityActionProto__Output {
  'parent': (_zetasql_ASTAlterActionProto__Output | null);
  'type': (_zetasql_ASTIdentifierProto__Output | null);
  'name': (_zetasql_ASTIdentifierProto__Output | null);
  'isIfExists': (boolean);
}
