// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTPrimaryKeyProto as _zetasql_ASTPrimaryKeyProto, ASTPrimaryKeyProto__Output as _zetasql_ASTPrimaryKeyProto__Output } from '../zetasql/ASTPrimaryKeyProto';
import type { ASTForeignKeyProto as _zetasql_ASTForeignKeyProto, ASTForeignKeyProto__Output as _zetasql_ASTForeignKeyProto__Output } from '../zetasql/ASTForeignKeyProto';
import type { ASTCheckConstraintProto as _zetasql_ASTCheckConstraintProto, ASTCheckConstraintProto__Output as _zetasql_ASTCheckConstraintProto__Output } from '../zetasql/ASTCheckConstraintProto';

export interface AnyASTTableConstraintProto {
  'astPrimaryKeyNode'?: (_zetasql_ASTPrimaryKeyProto | null);
  'astForeignKeyNode'?: (_zetasql_ASTForeignKeyProto | null);
  'astCheckConstraintNode'?: (_zetasql_ASTCheckConstraintProto | null);
  'node'?: "astPrimaryKeyNode"|"astForeignKeyNode"|"astCheckConstraintNode";
}

export interface AnyASTTableConstraintProto__Output {
  'astPrimaryKeyNode'?: (_zetasql_ASTPrimaryKeyProto__Output | null);
  'astForeignKeyNode'?: (_zetasql_ASTForeignKeyProto__Output | null);
  'astCheckConstraintNode'?: (_zetasql_ASTCheckConstraintProto__Output | null);
  'node': "astPrimaryKeyNode"|"astForeignKeyNode"|"astCheckConstraintNode";
}
