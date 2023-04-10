// Original file: src/zetasql-snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTTableConstraintProto as _zetasql_ASTTableConstraintProto, ASTTableConstraintProto__Output as _zetasql_ASTTableConstraintProto__Output } from '../zetasql/ASTTableConstraintProto';
import type { AnyASTExpressionProto as _zetasql_AnyASTExpressionProto, AnyASTExpressionProto__Output as _zetasql_AnyASTExpressionProto__Output } from '../zetasql/AnyASTExpressionProto';
import type { ASTOptionsListProto as _zetasql_ASTOptionsListProto, ASTOptionsListProto__Output as _zetasql_ASTOptionsListProto__Output } from '../zetasql/ASTOptionsListProto';
import type { ASTIdentifierProto as _zetasql_ASTIdentifierProto, ASTIdentifierProto__Output as _zetasql_ASTIdentifierProto__Output } from '../zetasql/ASTIdentifierProto';

export interface ASTCheckConstraintProto {
  'parent'?: (_zetasql_ASTTableConstraintProto | null);
  'expression'?: (_zetasql_AnyASTExpressionProto | null);
  'optionsList'?: (_zetasql_ASTOptionsListProto | null);
  'constraintName'?: (_zetasql_ASTIdentifierProto | null);
  'isEnforced'?: (boolean);
}

export interface ASTCheckConstraintProto__Output {
  'parent': (_zetasql_ASTTableConstraintProto__Output | null);
  'expression': (_zetasql_AnyASTExpressionProto__Output | null);
  'optionsList': (_zetasql_ASTOptionsListProto__Output | null);
  'constraintName': (_zetasql_ASTIdentifierProto__Output | null);
  'isEnforced': (boolean);
}
