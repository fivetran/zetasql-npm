// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTColumnDefinitionProto as _zetasql_ASTColumnDefinitionProto, ASTColumnDefinitionProto__Output as _zetasql_ASTColumnDefinitionProto__Output } from '../zetasql/ASTColumnDefinitionProto';
import type { AnyASTTableConstraintProto as _zetasql_AnyASTTableConstraintProto, AnyASTTableConstraintProto__Output as _zetasql_AnyASTTableConstraintProto__Output } from '../zetasql/AnyASTTableConstraintProto';

export interface AnyASTTableElementProto {
  'astColumnDefinitionNode'?: (_zetasql_ASTColumnDefinitionProto | null);
  'astTableConstraintNode'?: (_zetasql_AnyASTTableConstraintProto | null);
  'node'?: "astColumnDefinitionNode"|"astTableConstraintNode";
}

export interface AnyASTTableElementProto__Output {
  'astColumnDefinitionNode'?: (_zetasql_ASTColumnDefinitionProto__Output | null);
  'astTableConstraintNode'?: (_zetasql_AnyASTTableConstraintProto__Output | null);
  'node': "astColumnDefinitionNode"|"astTableConstraintNode";
}
