// Original file: src/zetasql-snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { AnyASTAlterActionProto as _zetasql_AnyASTAlterActionProto, AnyASTAlterActionProto__Output as _zetasql_AnyASTAlterActionProto__Output } from '../zetasql/AnyASTAlterActionProto';

export interface ASTAlterActionListProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'actions'?: (_zetasql_AnyASTAlterActionProto)[];
}

export interface ASTAlterActionListProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'actions': (_zetasql_AnyASTAlterActionProto__Output)[];
}
