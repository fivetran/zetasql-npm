// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTColumnAttributeProto as _zetasql_ASTColumnAttributeProto, ASTColumnAttributeProto__Output as _zetasql_ASTColumnAttributeProto__Output } from '../zetasql/ASTColumnAttributeProto';

export interface ASTPrimaryKeyColumnAttributeProto {
  'parent'?: (_zetasql_ASTColumnAttributeProto | null);
  'enforced'?: (boolean);
}

export interface ASTPrimaryKeyColumnAttributeProto__Output {
  'parent': (_zetasql_ASTColumnAttributeProto__Output | null);
  'enforced': (boolean);
}
