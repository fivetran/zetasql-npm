// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTAlterActionProto as _zetasql_ASTAlterActionProto, ASTAlterActionProto__Output as _zetasql_ASTAlterActionProto__Output } from '../zetasql/ASTAlterActionProto';
import type { ASTPathExpressionProto as _zetasql_ASTPathExpressionProto, ASTPathExpressionProto__Output as _zetasql_ASTPathExpressionProto__Output } from '../zetasql/ASTPathExpressionProto';

export interface ASTRenameToClauseProto {
  'parent'?: (_zetasql_ASTAlterActionProto | null);
  'newName'?: (_zetasql_ASTPathExpressionProto | null);
}

export interface ASTRenameToClauseProto__Output {
  'parent': (_zetasql_ASTAlterActionProto__Output | null);
  'newName': (_zetasql_ASTPathExpressionProto__Output | null);
}
