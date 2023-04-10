// Original file: src/snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTAliasProto as _zetasql_ASTAliasProto, ASTAliasProto__Output as _zetasql_ASTAliasProto__Output } from '../zetasql/ASTAliasProto';

export interface ASTWithOffsetProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'alias'?: (_zetasql_ASTAliasProto | null);
}

export interface ASTWithOffsetProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'alias': (_zetasql_ASTAliasProto__Output | null);
}
