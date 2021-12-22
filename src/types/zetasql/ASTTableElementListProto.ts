// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { AnyASTTableElementProto as _zetasql_AnyASTTableElementProto, AnyASTTableElementProto__Output as _zetasql_AnyASTTableElementProto__Output } from '../zetasql/AnyASTTableElementProto';

export interface ASTTableElementListProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'elements'?: (_zetasql_AnyASTTableElementProto)[];
}

export interface ASTTableElementListProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'elements': (_zetasql_AnyASTTableElementProto__Output)[];
}
