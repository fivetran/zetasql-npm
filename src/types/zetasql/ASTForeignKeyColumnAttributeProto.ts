// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTColumnAttributeProto as _zetasql_ASTColumnAttributeProto, ASTColumnAttributeProto__Output as _zetasql_ASTColumnAttributeProto__Output } from '../zetasql/ASTColumnAttributeProto';
import type { ASTIdentifierProto as _zetasql_ASTIdentifierProto, ASTIdentifierProto__Output as _zetasql_ASTIdentifierProto__Output } from '../zetasql/ASTIdentifierProto';
import type { ASTForeignKeyReferenceProto as _zetasql_ASTForeignKeyReferenceProto, ASTForeignKeyReferenceProto__Output as _zetasql_ASTForeignKeyReferenceProto__Output } from '../zetasql/ASTForeignKeyReferenceProto';

export interface ASTForeignKeyColumnAttributeProto {
  'parent'?: (_zetasql_ASTColumnAttributeProto | null);
  'constraintName'?: (_zetasql_ASTIdentifierProto | null);
  'reference'?: (_zetasql_ASTForeignKeyReferenceProto | null);
}

export interface ASTForeignKeyColumnAttributeProto__Output {
  'parent': (_zetasql_ASTColumnAttributeProto__Output | null);
  'constraintName': (_zetasql_ASTIdentifierProto__Output | null);
  'reference': (_zetasql_ASTForeignKeyReferenceProto__Output | null);
}
