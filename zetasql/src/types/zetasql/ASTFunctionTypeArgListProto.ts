// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { AnyASTTypeProto as _zetasql_AnyASTTypeProto, AnyASTTypeProto__Output as _zetasql_AnyASTTypeProto__Output } from '../zetasql/AnyASTTypeProto';

export interface ASTFunctionTypeArgListProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'args'?: (_zetasql_AnyASTTypeProto)[];
}

export interface ASTFunctionTypeArgListProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'args': (_zetasql_AnyASTTypeProto__Output)[];
}
