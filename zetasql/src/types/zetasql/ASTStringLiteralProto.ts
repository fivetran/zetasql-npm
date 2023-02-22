// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTLeafProto as _zetasql_ASTLeafProto, ASTLeafProto__Output as _zetasql_ASTLeafProto__Output } from '../zetasql/ASTLeafProto';

export interface ASTStringLiteralProto {
  'parent'?: (_zetasql_ASTLeafProto | null);
  'stringValue'?: (string);
}

export interface ASTStringLiteralProto__Output {
  'parent': (_zetasql_ASTLeafProto__Output | null);
  'stringValue': (string);
}
