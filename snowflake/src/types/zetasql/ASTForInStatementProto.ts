// Original file: src/zetasql-snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTLoopStatementProto as _zetasql_ASTLoopStatementProto, ASTLoopStatementProto__Output as _zetasql_ASTLoopStatementProto__Output } from '../zetasql/ASTLoopStatementProto';
import type { ASTIdentifierProto as _zetasql_ASTIdentifierProto, ASTIdentifierProto__Output as _zetasql_ASTIdentifierProto__Output } from '../zetasql/ASTIdentifierProto';
import type { ASTQueryProto as _zetasql_ASTQueryProto, ASTQueryProto__Output as _zetasql_ASTQueryProto__Output } from '../zetasql/ASTQueryProto';

export interface ASTForInStatementProto {
  'parent'?: (_zetasql_ASTLoopStatementProto | null);
  'variable'?: (_zetasql_ASTIdentifierProto | null);
  'query'?: (_zetasql_ASTQueryProto | null);
}

export interface ASTForInStatementProto__Output {
  'parent': (_zetasql_ASTLoopStatementProto__Output | null);
  'variable': (_zetasql_ASTIdentifierProto__Output | null);
  'query': (_zetasql_ASTQueryProto__Output | null);
}
