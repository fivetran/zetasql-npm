// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTAlterActionProto as _zetasql_ASTAlterActionProto, ASTAlterActionProto__Output as _zetasql_ASTAlterActionProto__Output } from '../zetasql/ASTAlterActionProto';
import type { ASTIdentifierProto as _zetasql_ASTIdentifierProto, ASTIdentifierProto__Output as _zetasql_ASTIdentifierProto__Output } from '../zetasql/ASTIdentifierProto';
import type { ASTOptionsListProto as _zetasql_ASTOptionsListProto, ASTOptionsListProto__Output as _zetasql_ASTOptionsListProto__Output } from '../zetasql/ASTOptionsListProto';

export interface ASTAlterConstraintSetOptionsActionProto {
  'parent'?: (_zetasql_ASTAlterActionProto | null);
  'constraintName'?: (_zetasql_ASTIdentifierProto | null);
  'optionsList'?: (_zetasql_ASTOptionsListProto | null);
  'isIfExists'?: (boolean);
}

export interface ASTAlterConstraintSetOptionsActionProto__Output {
  'parent': (_zetasql_ASTAlterActionProto__Output | null);
  'constraintName': (_zetasql_ASTIdentifierProto__Output | null);
  'optionsList': (_zetasql_ASTOptionsListProto__Output | null);
  'isIfExists': (boolean);
}
