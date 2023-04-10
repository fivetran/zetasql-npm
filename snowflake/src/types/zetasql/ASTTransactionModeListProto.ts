// Original file: src/zetasql-snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { AnyASTTransactionModeProto as _zetasql_AnyASTTransactionModeProto, AnyASTTransactionModeProto__Output as _zetasql_AnyASTTransactionModeProto__Output } from '../zetasql/AnyASTTransactionModeProto';

export interface ASTTransactionModeListProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'elements'?: (_zetasql_AnyASTTransactionModeProto)[];
}

export interface ASTTransactionModeListProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'elements': (_zetasql_AnyASTTransactionModeProto__Output)[];
}
