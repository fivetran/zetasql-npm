// Original file: src/snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTStatementProto as _zetasql_ASTStatementProto, ASTStatementProto__Output as _zetasql_ASTStatementProto__Output } from '../zetasql/ASTStatementProto';
import type { ASTHintProto as _zetasql_ASTHintProto, ASTHintProto__Output as _zetasql_ASTHintProto__Output } from '../zetasql/ASTHintProto';
import type { AnyASTStatementProto as _zetasql_AnyASTStatementProto, AnyASTStatementProto__Output as _zetasql_AnyASTStatementProto__Output } from '../zetasql/AnyASTStatementProto';

export interface ASTHintedStatementProto {
  'parent'?: (_zetasql_ASTStatementProto | null);
  'hint'?: (_zetasql_ASTHintProto | null);
  'statement'?: (_zetasql_AnyASTStatementProto | null);
}

export interface ASTHintedStatementProto__Output {
  'parent': (_zetasql_ASTStatementProto__Output | null);
  'hint': (_zetasql_ASTHintProto__Output | null);
  'statement': (_zetasql_AnyASTStatementProto__Output | null);
}
