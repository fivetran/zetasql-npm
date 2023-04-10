// Original file: src/snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTIdentifierProto as _zetasql_ASTIdentifierProto, ASTIdentifierProto__Output as _zetasql_ASTIdentifierProto__Output } from '../zetasql/ASTIdentifierProto';
import type { ASTQueryProto as _zetasql_ASTQueryProto, ASTQueryProto__Output as _zetasql_ASTQueryProto__Output } from '../zetasql/ASTQueryProto';

export interface ASTWithClauseEntryProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'alias'?: (_zetasql_ASTIdentifierProto | null);
  'query'?: (_zetasql_ASTQueryProto | null);
}

export interface ASTWithClauseEntryProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'alias': (_zetasql_ASTIdentifierProto__Output | null);
  'query': (_zetasql_ASTQueryProto__Output | null);
}
