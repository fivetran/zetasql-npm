// Original file: src/snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { _zetasql_ASTAnySomeAllOpEnums_Op, _zetasql_ASTAnySomeAllOpEnums_Op__Output } from '../zetasql/ASTAnySomeAllOpEnums';

export interface ASTAnySomeAllOpProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'op'?: (_zetasql_ASTAnySomeAllOpEnums_Op);
}

export interface ASTAnySomeAllOpProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'op': (_zetasql_ASTAnySomeAllOpEnums_Op__Output);
}
