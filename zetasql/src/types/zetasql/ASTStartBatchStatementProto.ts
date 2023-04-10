// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTStatementProto as _zetasql_ASTStatementProto, ASTStatementProto__Output as _zetasql_ASTStatementProto__Output } from '../zetasql/ASTStatementProto';
import type { ASTIdentifierProto as _zetasql_ASTIdentifierProto, ASTIdentifierProto__Output as _zetasql_ASTIdentifierProto__Output } from '../zetasql/ASTIdentifierProto';

export interface ASTStartBatchStatementProto {
  'parent'?: (_zetasql_ASTStatementProto | null);
  'batchType'?: (_zetasql_ASTIdentifierProto | null);
}

export interface ASTStartBatchStatementProto__Output {
  'parent': (_zetasql_ASTStatementProto__Output | null);
  'batchType': (_zetasql_ASTIdentifierProto__Output | null);
}
