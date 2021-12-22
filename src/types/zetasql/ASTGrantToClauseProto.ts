// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTAlterActionProto as _zetasql_ASTAlterActionProto, ASTAlterActionProto__Output as _zetasql_ASTAlterActionProto__Output } from '../zetasql/ASTAlterActionProto';
import type { ASTGranteeListProto as _zetasql_ASTGranteeListProto, ASTGranteeListProto__Output as _zetasql_ASTGranteeListProto__Output } from '../zetasql/ASTGranteeListProto';

export interface ASTGrantToClauseProto {
  'parent'?: (_zetasql_ASTAlterActionProto | null);
  'granteeList'?: (_zetasql_ASTGranteeListProto | null);
  'hasGrantKeywordAndParens'?: (boolean);
}

export interface ASTGrantToClauseProto__Output {
  'parent': (_zetasql_ASTAlterActionProto__Output | null);
  'granteeList': (_zetasql_ASTGranteeListProto__Output | null);
  'hasGrantKeywordAndParens': (boolean);
}
