// Original file: src/snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTTableConstraintProto as _zetasql_ASTTableConstraintProto, ASTTableConstraintProto__Output as _zetasql_ASTTableConstraintProto__Output } from '../zetasql/ASTTableConstraintProto';
import type { ASTColumnListProto as _zetasql_ASTColumnListProto, ASTColumnListProto__Output as _zetasql_ASTColumnListProto__Output } from '../zetasql/ASTColumnListProto';
import type { ASTForeignKeyReferenceProto as _zetasql_ASTForeignKeyReferenceProto, ASTForeignKeyReferenceProto__Output as _zetasql_ASTForeignKeyReferenceProto__Output } from '../zetasql/ASTForeignKeyReferenceProto';
import type { ASTOptionsListProto as _zetasql_ASTOptionsListProto, ASTOptionsListProto__Output as _zetasql_ASTOptionsListProto__Output } from '../zetasql/ASTOptionsListProto';
import type { ASTIdentifierProto as _zetasql_ASTIdentifierProto, ASTIdentifierProto__Output as _zetasql_ASTIdentifierProto__Output } from '../zetasql/ASTIdentifierProto';

export interface ASTForeignKeyProto {
  'parent'?: (_zetasql_ASTTableConstraintProto | null);
  'columnList'?: (_zetasql_ASTColumnListProto | null);
  'reference'?: (_zetasql_ASTForeignKeyReferenceProto | null);
  'optionsList'?: (_zetasql_ASTOptionsListProto | null);
  'constraintName'?: (_zetasql_ASTIdentifierProto | null);
}

export interface ASTForeignKeyProto__Output {
  'parent': (_zetasql_ASTTableConstraintProto__Output | null);
  'columnList': (_zetasql_ASTColumnListProto__Output | null);
  'reference': (_zetasql_ASTForeignKeyReferenceProto__Output | null);
  'optionsList': (_zetasql_ASTOptionsListProto__Output | null);
  'constraintName': (_zetasql_ASTIdentifierProto__Output | null);
}
