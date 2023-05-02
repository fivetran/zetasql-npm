// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTColumnWithOptionsProto as _zetasql_ASTColumnWithOptionsProto, ASTColumnWithOptionsProto__Output as _zetasql_ASTColumnWithOptionsProto__Output } from '../zetasql/ASTColumnWithOptionsProto';

export interface ASTColumnWithOptionsListProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'columnWithOptions'?: (_zetasql_ASTColumnWithOptionsProto)[];
}

export interface ASTColumnWithOptionsListProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'columnWithOptions': (_zetasql_ASTColumnWithOptionsProto__Output)[];
}
