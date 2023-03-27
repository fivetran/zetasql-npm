// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { _zetasql_ASTAnySomeAllOpEnums_Op } from '../zetasql/ASTAnySomeAllOpEnums';

export interface ASTAnySomeAllOpProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'op'?: (_zetasql_ASTAnySomeAllOpEnums_Op | keyof typeof _zetasql_ASTAnySomeAllOpEnums_Op);
}

export interface ASTAnySomeAllOpProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'op': (_zetasql_ASTAnySomeAllOpEnums_Op);
}
