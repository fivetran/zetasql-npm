// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { AnyASTLeafProto as _zetasql_AnyASTLeafProto, AnyASTLeafProto__Output as _zetasql_AnyASTLeafProto__Output } from '../zetasql/AnyASTLeafProto';

export interface ASTTypeParameterListProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'parameters'?: (_zetasql_AnyASTLeafProto)[];
}

export interface ASTTypeParameterListProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'parameters': (_zetasql_AnyASTLeafProto__Output)[];
}
