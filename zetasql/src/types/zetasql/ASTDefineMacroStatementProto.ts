// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTStatementProto as _zetasql_ASTStatementProto, ASTStatementProto__Output as _zetasql_ASTStatementProto__Output } from '../zetasql/ASTStatementProto';
import type { ASTIdentifierProto as _zetasql_ASTIdentifierProto, ASTIdentifierProto__Output as _zetasql_ASTIdentifierProto__Output } from '../zetasql/ASTIdentifierProto';
import type { ASTMacroBodyProto as _zetasql_ASTMacroBodyProto, ASTMacroBodyProto__Output as _zetasql_ASTMacroBodyProto__Output } from '../zetasql/ASTMacroBodyProto';

export interface ASTDefineMacroStatementProto {
  'parent'?: (_zetasql_ASTStatementProto | null);
  'name'?: (_zetasql_ASTIdentifierProto | null);
  'body'?: (_zetasql_ASTMacroBodyProto | null);
}

export interface ASTDefineMacroStatementProto__Output {
  'parent': (_zetasql_ASTStatementProto__Output | null);
  'name': (_zetasql_ASTIdentifierProto__Output | null);
  'body': (_zetasql_ASTMacroBodyProto__Output | null);
}
