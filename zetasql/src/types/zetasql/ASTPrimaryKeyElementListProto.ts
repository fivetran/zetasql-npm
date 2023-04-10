// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTPrimaryKeyElementProto as _zetasql_ASTPrimaryKeyElementProto, ASTPrimaryKeyElementProto__Output as _zetasql_ASTPrimaryKeyElementProto__Output } from '../zetasql/ASTPrimaryKeyElementProto';

export interface ASTPrimaryKeyElementListProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'elements'?: (_zetasql_ASTPrimaryKeyElementProto)[];
}

export interface ASTPrimaryKeyElementListProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'elements': (_zetasql_ASTPrimaryKeyElementProto__Output)[];
}
