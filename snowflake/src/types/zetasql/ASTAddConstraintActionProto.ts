// Original file: src/snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTAlterActionProto as _zetasql_ASTAlterActionProto, ASTAlterActionProto__Output as _zetasql_ASTAlterActionProto__Output } from '../zetasql/ASTAlterActionProto';
import type { AnyASTTableConstraintProto as _zetasql_AnyASTTableConstraintProto, AnyASTTableConstraintProto__Output as _zetasql_AnyASTTableConstraintProto__Output } from '../zetasql/AnyASTTableConstraintProto';

export interface ASTAddConstraintActionProto {
  'parent'?: (_zetasql_ASTAlterActionProto | null);
  'constraint'?: (_zetasql_AnyASTTableConstraintProto | null);
  'isIfNotExists'?: (boolean);
}

export interface ASTAddConstraintActionProto__Output {
  'parent': (_zetasql_ASTAlterActionProto__Output | null);
  'constraint': (_zetasql_AnyASTTableConstraintProto__Output | null);
  'isIfNotExists': (boolean);
}
