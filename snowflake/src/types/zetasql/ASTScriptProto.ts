// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTStatementListProto as _zetasql_ASTStatementListProto, ASTStatementListProto__Output as _zetasql_ASTStatementListProto__Output } from '../zetasql/ASTStatementListProto';

export interface ASTScriptProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'statementListNode'?: (_zetasql_ASTStatementListProto | null);
}

export interface ASTScriptProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'statementListNode': (_zetasql_ASTStatementListProto__Output | null);
}
