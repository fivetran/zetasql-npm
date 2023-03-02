// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTWithClauseEntryProto as _zetasql_ASTWithClauseEntryProto, ASTWithClauseEntryProto__Output as _zetasql_ASTWithClauseEntryProto__Output } from '../zetasql/ASTWithClauseEntryProto';

export interface ASTWithClauseProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'with'?: (_zetasql_ASTWithClauseEntryProto)[];
  'recursive'?: (boolean);
}

export interface ASTWithClauseProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'with': (_zetasql_ASTWithClauseEntryProto__Output)[];
  'recursive': (boolean);
}
