// Original file: src/zetasql-snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTStatementProto as _zetasql_ASTStatementProto, ASTStatementProto__Output as _zetasql_ASTStatementProto__Output } from '../zetasql/ASTStatementProto';
import type { ASTTransactionModeListProto as _zetasql_ASTTransactionModeListProto, ASTTransactionModeListProto__Output as _zetasql_ASTTransactionModeListProto__Output } from '../zetasql/ASTTransactionModeListProto';

export interface ASTSetTransactionStatementProto {
  'parent'?: (_zetasql_ASTStatementProto | null);
  'modeList'?: (_zetasql_ASTTransactionModeListProto | null);
}

export interface ASTSetTransactionStatementProto__Output {
  'parent': (_zetasql_ASTStatementProto__Output | null);
  'modeList': (_zetasql_ASTTransactionModeListProto__Output | null);
}
