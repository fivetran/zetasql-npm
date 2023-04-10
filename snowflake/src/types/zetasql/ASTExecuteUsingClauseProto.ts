// Original file: src/snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTExecuteUsingArgumentProto as _zetasql_ASTExecuteUsingArgumentProto, ASTExecuteUsingArgumentProto__Output as _zetasql_ASTExecuteUsingArgumentProto__Output } from '../zetasql/ASTExecuteUsingArgumentProto';

export interface ASTExecuteUsingClauseProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'arguments'?: (_zetasql_ASTExecuteUsingArgumentProto)[];
}

export interface ASTExecuteUsingClauseProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'arguments': (_zetasql_ASTExecuteUsingArgumentProto__Output)[];
}
