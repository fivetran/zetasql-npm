// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTAlterStatementBaseProto as _zetasql_ASTAlterStatementBaseProto, ASTAlterStatementBaseProto__Output as _zetasql_ASTAlterStatementBaseProto__Output } from '../zetasql/ASTAlterStatementBaseProto';
import type { ASTIdentifierProto as _zetasql_ASTIdentifierProto, ASTIdentifierProto__Output as _zetasql_ASTIdentifierProto__Output } from '../zetasql/ASTIdentifierProto';

export interface ASTAlterEntityStatementProto {
  'parent'?: (_zetasql_ASTAlterStatementBaseProto | null);
  'type'?: (_zetasql_ASTIdentifierProto | null);
}

export interface ASTAlterEntityStatementProto__Output {
  'parent': (_zetasql_ASTAlterStatementBaseProto__Output | null);
  'type': (_zetasql_ASTIdentifierProto__Output | null);
}
