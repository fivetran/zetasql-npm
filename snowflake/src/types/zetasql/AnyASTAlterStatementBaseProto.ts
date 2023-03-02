// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTAlterDatabaseStatementProto as _zetasql_ASTAlterDatabaseStatementProto, ASTAlterDatabaseStatementProto__Output as _zetasql_ASTAlterDatabaseStatementProto__Output } from '../zetasql/ASTAlterDatabaseStatementProto';
import type { ASTAlterSchemaStatementProto as _zetasql_ASTAlterSchemaStatementProto, ASTAlterSchemaStatementProto__Output as _zetasql_ASTAlterSchemaStatementProto__Output } from '../zetasql/ASTAlterSchemaStatementProto';
import type { ASTAlterTableStatementProto as _zetasql_ASTAlterTableStatementProto, ASTAlterTableStatementProto__Output as _zetasql_ASTAlterTableStatementProto__Output } from '../zetasql/ASTAlterTableStatementProto';
import type { ASTAlterViewStatementProto as _zetasql_ASTAlterViewStatementProto, ASTAlterViewStatementProto__Output as _zetasql_ASTAlterViewStatementProto__Output } from '../zetasql/ASTAlterViewStatementProto';
import type { ASTAlterMaterializedViewStatementProto as _zetasql_ASTAlterMaterializedViewStatementProto, ASTAlterMaterializedViewStatementProto__Output as _zetasql_ASTAlterMaterializedViewStatementProto__Output } from '../zetasql/ASTAlterMaterializedViewStatementProto';
import type { ASTAlterRowAccessPolicyStatementProto as _zetasql_ASTAlterRowAccessPolicyStatementProto, ASTAlterRowAccessPolicyStatementProto__Output as _zetasql_ASTAlterRowAccessPolicyStatementProto__Output } from '../zetasql/ASTAlterRowAccessPolicyStatementProto';
import type { ASTAlterEntityStatementProto as _zetasql_ASTAlterEntityStatementProto, ASTAlterEntityStatementProto__Output as _zetasql_ASTAlterEntityStatementProto__Output } from '../zetasql/ASTAlterEntityStatementProto';
import type { ASTAlterPrivilegeRestrictionStatementProto as _zetasql_ASTAlterPrivilegeRestrictionStatementProto, ASTAlterPrivilegeRestrictionStatementProto__Output as _zetasql_ASTAlterPrivilegeRestrictionStatementProto__Output } from '../zetasql/ASTAlterPrivilegeRestrictionStatementProto';
import type { ASTAlterModelStatementProto as _zetasql_ASTAlterModelStatementProto, ASTAlterModelStatementProto__Output as _zetasql_ASTAlterModelStatementProto__Output } from '../zetasql/ASTAlterModelStatementProto';

export interface AnyASTAlterStatementBaseProto {
  'astAlterDatabaseStatementNode'?: (_zetasql_ASTAlterDatabaseStatementProto | null);
  'astAlterSchemaStatementNode'?: (_zetasql_ASTAlterSchemaStatementProto | null);
  'astAlterTableStatementNode'?: (_zetasql_ASTAlterTableStatementProto | null);
  'astAlterViewStatementNode'?: (_zetasql_ASTAlterViewStatementProto | null);
  'astAlterMaterializedViewStatementNode'?: (_zetasql_ASTAlterMaterializedViewStatementProto | null);
  'astAlterRowAccessPolicyStatementNode'?: (_zetasql_ASTAlterRowAccessPolicyStatementProto | null);
  'astAlterEntityStatementNode'?: (_zetasql_ASTAlterEntityStatementProto | null);
  'astAlterPrivilegeRestrictionStatementNode'?: (_zetasql_ASTAlterPrivilegeRestrictionStatementProto | null);
  'astAlterModelStatementNode'?: (_zetasql_ASTAlterModelStatementProto | null);
  'node'?: "astAlterDatabaseStatementNode"|"astAlterSchemaStatementNode"|"astAlterTableStatementNode"|"astAlterViewStatementNode"|"astAlterMaterializedViewStatementNode"|"astAlterRowAccessPolicyStatementNode"|"astAlterEntityStatementNode"|"astAlterPrivilegeRestrictionStatementNode"|"astAlterModelStatementNode";
}

export interface AnyASTAlterStatementBaseProto__Output {
  'astAlterDatabaseStatementNode'?: (_zetasql_ASTAlterDatabaseStatementProto__Output | null);
  'astAlterSchemaStatementNode'?: (_zetasql_ASTAlterSchemaStatementProto__Output | null);
  'astAlterTableStatementNode'?: (_zetasql_ASTAlterTableStatementProto__Output | null);
  'astAlterViewStatementNode'?: (_zetasql_ASTAlterViewStatementProto__Output | null);
  'astAlterMaterializedViewStatementNode'?: (_zetasql_ASTAlterMaterializedViewStatementProto__Output | null);
  'astAlterRowAccessPolicyStatementNode'?: (_zetasql_ASTAlterRowAccessPolicyStatementProto__Output | null);
  'astAlterEntityStatementNode'?: (_zetasql_ASTAlterEntityStatementProto__Output | null);
  'astAlterPrivilegeRestrictionStatementNode'?: (_zetasql_ASTAlterPrivilegeRestrictionStatementProto__Output | null);
  'astAlterModelStatementNode'?: (_zetasql_ASTAlterModelStatementProto__Output | null);
  'node': "astAlterDatabaseStatementNode"|"astAlterSchemaStatementNode"|"astAlterTableStatementNode"|"astAlterViewStatementNode"|"astAlterMaterializedViewStatementNode"|"astAlterRowAccessPolicyStatementNode"|"astAlterEntityStatementNode"|"astAlterPrivilegeRestrictionStatementNode"|"astAlterModelStatementNode";
}
