// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTSelectColumnProto as _zetasql_ASTSelectColumnProto, ASTSelectColumnProto__Output as _zetasql_ASTSelectColumnProto__Output } from '../zetasql/ASTSelectColumnProto';

export interface ASTSelectListProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'columns'?: (_zetasql_ASTSelectColumnProto)[];
}

export interface ASTSelectListProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'columns': (_zetasql_ASTSelectColumnProto__Output)[];
}
