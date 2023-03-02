// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTAlterActionProto as _zetasql_ASTAlterActionProto, ASTAlterActionProto__Output as _zetasql_ASTAlterActionProto__Output } from '../zetasql/ASTAlterActionProto';

export interface ASTDropTtlActionProto {
  'parent'?: (_zetasql_ASTAlterActionProto | null);
  'isIfExists'?: (boolean);
}

export interface ASTDropTtlActionProto__Output {
  'parent': (_zetasql_ASTAlterActionProto__Output | null);
  'isIfExists': (boolean);
}
