// Original file: src/snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTAlterActionProto as _zetasql_ASTAlterActionProto, ASTAlterActionProto__Output as _zetasql_ASTAlterActionProto__Output } from '../zetasql/ASTAlterActionProto';
import type { ASTIdentifierProto as _zetasql_ASTIdentifierProto, ASTIdentifierProto__Output as _zetasql_ASTIdentifierProto__Output } from '../zetasql/ASTIdentifierProto';
import type { AnyASTAlterActionProto as _zetasql_AnyASTAlterActionProto, AnyASTAlterActionProto__Output as _zetasql_AnyASTAlterActionProto__Output } from '../zetasql/AnyASTAlterActionProto';

export interface ASTAlterSubEntityActionProto {
  'parent'?: (_zetasql_ASTAlterActionProto | null);
  'type'?: (_zetasql_ASTIdentifierProto | null);
  'name'?: (_zetasql_ASTIdentifierProto | null);
  'action'?: (_zetasql_AnyASTAlterActionProto | null);
  'isIfExists'?: (boolean);
}

export interface ASTAlterSubEntityActionProto__Output {
  'parent': (_zetasql_ASTAlterActionProto__Output | null);
  'type': (_zetasql_ASTIdentifierProto__Output | null);
  'name': (_zetasql_ASTIdentifierProto__Output | null);
  'action': (_zetasql_AnyASTAlterActionProto__Output | null);
  'isIfExists': (boolean);
}
