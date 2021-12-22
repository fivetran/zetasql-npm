// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { AnyASTStatementProto as _zetasql_AnyASTStatementProto, AnyASTStatementProto__Output as _zetasql_AnyASTStatementProto__Output } from '../zetasql/AnyASTStatementProto';

export interface ASTStatementListProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'statementList'?: (_zetasql_AnyASTStatementProto)[];
  'variableDeclarationsAllowed'?: (boolean);
}

export interface ASTStatementListProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'statementList': (_zetasql_AnyASTStatementProto__Output)[];
  'variableDeclarationsAllowed': (boolean);
}
