// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTSelectListProto as _zetasql_ASTSelectListProto, ASTSelectListProto__Output as _zetasql_ASTSelectListProto__Output } from '../zetasql/ASTSelectListProto';

export interface ASTTransformClauseProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'selectList'?: (_zetasql_ASTSelectListProto | null);
}

export interface ASTTransformClauseProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'selectList': (_zetasql_ASTSelectListProto__Output | null);
}
