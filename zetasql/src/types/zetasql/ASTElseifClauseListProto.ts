// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTElseifClauseProto as _zetasql_ASTElseifClauseProto, ASTElseifClauseProto__Output as _zetasql_ASTElseifClauseProto__Output } from '../zetasql/ASTElseifClauseProto';

export interface ASTElseifClauseListProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'elseifClauses'?: (_zetasql_ASTElseifClauseProto)[];
}

export interface ASTElseifClauseListProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'elseifClauses': (_zetasql_ASTElseifClauseProto__Output)[];
}
