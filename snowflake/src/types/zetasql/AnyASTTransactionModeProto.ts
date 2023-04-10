// Original file: src/snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTTransactionIsolationLevelProto as _zetasql_ASTTransactionIsolationLevelProto, ASTTransactionIsolationLevelProto__Output as _zetasql_ASTTransactionIsolationLevelProto__Output } from '../zetasql/ASTTransactionIsolationLevelProto';
import type { ASTTransactionReadWriteModeProto as _zetasql_ASTTransactionReadWriteModeProto, ASTTransactionReadWriteModeProto__Output as _zetasql_ASTTransactionReadWriteModeProto__Output } from '../zetasql/ASTTransactionReadWriteModeProto';

export interface AnyASTTransactionModeProto {
  'astTransactionIsolationLevelNode'?: (_zetasql_ASTTransactionIsolationLevelProto | null);
  'astTransactionReadWriteModeNode'?: (_zetasql_ASTTransactionReadWriteModeProto | null);
  'node'?: "astTransactionIsolationLevelNode"|"astTransactionReadWriteModeNode";
}

export interface AnyASTTransactionModeProto__Output {
  'astTransactionIsolationLevelNode'?: (_zetasql_ASTTransactionIsolationLevelProto__Output | null);
  'astTransactionReadWriteModeNode'?: (_zetasql_ASTTransactionReadWriteModeProto__Output | null);
  'node': "astTransactionIsolationLevelNode"|"astTransactionReadWriteModeNode";
}
