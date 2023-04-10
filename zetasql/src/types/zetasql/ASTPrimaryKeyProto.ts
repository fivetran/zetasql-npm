// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTTableConstraintProto as _zetasql_ASTTableConstraintProto, ASTTableConstraintProto__Output as _zetasql_ASTTableConstraintProto__Output } from '../zetasql/ASTTableConstraintProto';
import type { ASTPrimaryKeyElementListProto as _zetasql_ASTPrimaryKeyElementListProto, ASTPrimaryKeyElementListProto__Output as _zetasql_ASTPrimaryKeyElementListProto__Output } from '../zetasql/ASTPrimaryKeyElementListProto';
import type { ASTOptionsListProto as _zetasql_ASTOptionsListProto, ASTOptionsListProto__Output as _zetasql_ASTOptionsListProto__Output } from '../zetasql/ASTOptionsListProto';
import type { ASTIdentifierProto as _zetasql_ASTIdentifierProto, ASTIdentifierProto__Output as _zetasql_ASTIdentifierProto__Output } from '../zetasql/ASTIdentifierProto';

export interface ASTPrimaryKeyProto {
  'parent'?: (_zetasql_ASTTableConstraintProto | null);
  'elementList'?: (_zetasql_ASTPrimaryKeyElementListProto | null);
  'optionsList'?: (_zetasql_ASTOptionsListProto | null);
  'constraintName'?: (_zetasql_ASTIdentifierProto | null);
  'enforced'?: (boolean);
}

export interface ASTPrimaryKeyProto__Output {
  'parent': (_zetasql_ASTTableConstraintProto__Output | null);
  'elementList': (_zetasql_ASTPrimaryKeyElementListProto__Output | null);
  'optionsList': (_zetasql_ASTOptionsListProto__Output | null);
  'constraintName': (_zetasql_ASTIdentifierProto__Output | null);
  'enforced': (boolean);
}
