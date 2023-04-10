// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';

export interface ASTNullOrderProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'nullsFirst'?: (boolean);
}

export interface ASTNullOrderProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'nullsFirst': (boolean);
}
