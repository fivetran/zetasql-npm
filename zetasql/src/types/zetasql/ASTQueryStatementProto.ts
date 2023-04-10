// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTStatementProto as _zetasql_ASTStatementProto, ASTStatementProto__Output as _zetasql_ASTStatementProto__Output } from '../zetasql/ASTStatementProto';
import type { ASTQueryProto as _zetasql_ASTQueryProto, ASTQueryProto__Output as _zetasql_ASTQueryProto__Output } from '../zetasql/ASTQueryProto';

export interface ASTQueryStatementProto {
  'parent'?: (_zetasql_ASTStatementProto | null);
  'query'?: (_zetasql_ASTQueryProto | null);
}

export interface ASTQueryStatementProto__Output {
  'parent': (_zetasql_ASTStatementProto__Output | null);
  'query': (_zetasql_ASTQueryProto__Output | null);
}
