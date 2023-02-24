// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTTableAndColumnInfoProto as _zetasql_ASTTableAndColumnInfoProto, ASTTableAndColumnInfoProto__Output as _zetasql_ASTTableAndColumnInfoProto__Output } from '../zetasql/ASTTableAndColumnInfoProto';

export interface ASTTableAndColumnInfoListProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'tableAndColumnInfoEntries'?: (_zetasql_ASTTableAndColumnInfoProto)[];
}

export interface ASTTableAndColumnInfoListProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'tableAndColumnInfoEntries': (_zetasql_ASTTableAndColumnInfoProto__Output)[];
}
