// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { AnyASTColumnAttributeProto as _zetasql_AnyASTColumnAttributeProto, AnyASTColumnAttributeProto__Output as _zetasql_AnyASTColumnAttributeProto__Output } from '../zetasql/AnyASTColumnAttributeProto';

export interface ASTColumnAttributeListProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'values'?: (_zetasql_AnyASTColumnAttributeProto)[];
}

export interface ASTColumnAttributeListProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'values': (_zetasql_AnyASTColumnAttributeProto__Output)[];
}
