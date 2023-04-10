// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTAlterActionProto as _zetasql_ASTAlterActionProto, ASTAlterActionProto__Output as _zetasql_ASTAlterActionProto__Output } from '../zetasql/ASTAlterActionProto';
import type { ASTCollateProto as _zetasql_ASTCollateProto, ASTCollateProto__Output as _zetasql_ASTCollateProto__Output } from '../zetasql/ASTCollateProto';

export interface ASTSetCollateClauseProto {
  'parent'?: (_zetasql_ASTAlterActionProto | null);
  'collate'?: (_zetasql_ASTCollateProto | null);
}

export interface ASTSetCollateClauseProto__Output {
  'parent': (_zetasql_ASTAlterActionProto__Output | null);
  'collate': (_zetasql_ASTCollateProto__Output | null);
}
