// Original file: src/snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTAlterActionProto as _zetasql_ASTAlterActionProto, ASTAlterActionProto__Output as _zetasql_ASTAlterActionProto__Output } from '../zetasql/ASTAlterActionProto';
import type { ASTIdentifierProto as _zetasql_ASTIdentifierProto, ASTIdentifierProto__Output as _zetasql_ASTIdentifierProto__Output } from '../zetasql/ASTIdentifierProto';

export interface ASTDropColumnActionProto {
  'parent'?: (_zetasql_ASTAlterActionProto | null);
  'columnName'?: (_zetasql_ASTIdentifierProto | null);
  'isIfExists'?: (boolean);
}

export interface ASTDropColumnActionProto__Output {
  'parent': (_zetasql_ASTAlterActionProto__Output | null);
  'columnName': (_zetasql_ASTIdentifierProto__Output | null);
  'isIfExists': (boolean);
}
