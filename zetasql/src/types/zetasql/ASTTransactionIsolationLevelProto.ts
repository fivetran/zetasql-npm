// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTTransactionModeProto as _zetasql_ASTTransactionModeProto, ASTTransactionModeProto__Output as _zetasql_ASTTransactionModeProto__Output } from '../zetasql/ASTTransactionModeProto';
import type { ASTIdentifierProto as _zetasql_ASTIdentifierProto, ASTIdentifierProto__Output as _zetasql_ASTIdentifierProto__Output } from '../zetasql/ASTIdentifierProto';

export interface ASTTransactionIsolationLevelProto {
  'parent'?: (_zetasql_ASTTransactionModeProto | null);
  'identifier1'?: (_zetasql_ASTIdentifierProto | null);
  'identifier2'?: (_zetasql_ASTIdentifierProto | null);
}

export interface ASTTransactionIsolationLevelProto__Output {
  'parent': (_zetasql_ASTTransactionModeProto__Output | null);
  'identifier1': (_zetasql_ASTIdentifierProto__Output | null);
  'identifier2': (_zetasql_ASTIdentifierProto__Output | null);
}
