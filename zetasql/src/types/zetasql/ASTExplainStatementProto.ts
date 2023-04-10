// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTStatementProto as _zetasql_ASTStatementProto, ASTStatementProto__Output as _zetasql_ASTStatementProto__Output } from '../zetasql/ASTStatementProto';
import type { AnyASTStatementProto as _zetasql_AnyASTStatementProto, AnyASTStatementProto__Output as _zetasql_AnyASTStatementProto__Output } from '../zetasql/AnyASTStatementProto';

export interface ASTExplainStatementProto {
  'parent'?: (_zetasql_ASTStatementProto | null);
  'statement'?: (_zetasql_AnyASTStatementProto | null);
}

export interface ASTExplainStatementProto__Output {
  'parent': (_zetasql_ASTStatementProto__Output | null);
  'statement': (_zetasql_AnyASTStatementProto__Output | null);
}
