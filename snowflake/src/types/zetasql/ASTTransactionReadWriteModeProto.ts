// Original file: src/zetasql-snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTTransactionModeProto as _zetasql_ASTTransactionModeProto, ASTTransactionModeProto__Output as _zetasql_ASTTransactionModeProto__Output } from '../zetasql/ASTTransactionModeProto';
import type { _zetasql_ASTTransactionReadWriteModeEnums_Mode, _zetasql_ASTTransactionReadWriteModeEnums_Mode__Output } from '../zetasql/ASTTransactionReadWriteModeEnums';

export interface ASTTransactionReadWriteModeProto {
  'parent'?: (_zetasql_ASTTransactionModeProto | null);
  'mode'?: (_zetasql_ASTTransactionReadWriteModeEnums_Mode);
}

export interface ASTTransactionReadWriteModeProto__Output {
  'parent': (_zetasql_ASTTransactionModeProto__Output | null);
  'mode': (_zetasql_ASTTransactionReadWriteModeEnums_Mode__Output);
}
