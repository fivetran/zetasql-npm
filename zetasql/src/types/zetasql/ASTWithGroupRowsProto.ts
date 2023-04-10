// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTQueryProto as _zetasql_ASTQueryProto, ASTQueryProto__Output as _zetasql_ASTQueryProto__Output } from '../zetasql/ASTQueryProto';

export interface ASTWithGroupRowsProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'subquery'?: (_zetasql_ASTQueryProto | null);
}

export interface ASTWithGroupRowsProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'subquery': (_zetasql_ASTQueryProto__Output | null);
}
