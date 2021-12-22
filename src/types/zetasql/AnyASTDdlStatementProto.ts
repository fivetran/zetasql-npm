// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTDropEntityStatementProto as _zetasql_ASTDropEntityStatementProto, ASTDropEntityStatementProto__Output as _zetasql_ASTDropEntityStatementProto__Output } from '../zetasql/ASTDropEntityStatementProto';
import type { ASTDropFunctionStatementProto as _zetasql_ASTDropFunctionStatementProto, ASTDropFunctionStatementProto__Output as _zetasql_ASTDropFunctionStatementProto__Output } from '../zetasql/ASTDropFunctionStatementProto';
import type { ASTDropTableFunctionStatementProto as _zetasql_ASTDropTableFunctionStatementProto, ASTDropTableFunctionStatementProto__Output as _zetasql_ASTDropTableFunctionStatementProto__Output } from '../zetasql/ASTDropTableFunctionStatementProto';
import type { ASTDropMaterializedViewStatementProto as _zetasql_ASTDropMaterializedViewStatementProto, ASTDropMaterializedViewStatementProto__Output as _zetasql_ASTDropMaterializedViewStatementProto__Output } from '../zetasql/ASTDropMaterializedViewStatementProto';
import type { ASTDropSnapshotTableStatementProto as _zetasql_ASTDropSnapshotTableStatementProto, ASTDropSnapshotTableStatementProto__Output as _zetasql_ASTDropSnapshotTableStatementProto__Output } from '../zetasql/ASTDropSnapshotTableStatementProto';
import type { ASTDropSearchIndexStatementProto as _zetasql_ASTDropSearchIndexStatementProto, ASTDropSearchIndexStatementProto__Output as _zetasql_ASTDropSearchIndexStatementProto__Output } from '../zetasql/ASTDropSearchIndexStatementProto';
import type { AnyASTCreateStatementProto as _zetasql_AnyASTCreateStatementProto, AnyASTCreateStatementProto__Output as _zetasql_AnyASTCreateStatementProto__Output } from '../zetasql/AnyASTCreateStatementProto';
import type { ASTDropRowAccessPolicyStatementProto as _zetasql_ASTDropRowAccessPolicyStatementProto, ASTDropRowAccessPolicyStatementProto__Output as _zetasql_ASTDropRowAccessPolicyStatementProto__Output } from '../zetasql/ASTDropRowAccessPolicyStatementProto';
import type { ASTDropStatementProto as _zetasql_ASTDropStatementProto, ASTDropStatementProto__Output as _zetasql_ASTDropStatementProto__Output } from '../zetasql/ASTDropStatementProto';
import type { AnyASTAlterStatementBaseProto as _zetasql_AnyASTAlterStatementBaseProto, AnyASTAlterStatementBaseProto__Output as _zetasql_AnyASTAlterStatementBaseProto__Output } from '../zetasql/AnyASTAlterStatementBaseProto';
import type { ASTDropPrivilegeRestrictionStatementProto as _zetasql_ASTDropPrivilegeRestrictionStatementProto, ASTDropPrivilegeRestrictionStatementProto__Output as _zetasql_ASTDropPrivilegeRestrictionStatementProto__Output } from '../zetasql/ASTDropPrivilegeRestrictionStatementProto';

export interface AnyASTDdlStatementProto {
  'astDropEntityStatementNode'?: (_zetasql_ASTDropEntityStatementProto | null);
  'astDropFunctionStatementNode'?: (_zetasql_ASTDropFunctionStatementProto | null);
  'astDropTableFunctionStatementNode'?: (_zetasql_ASTDropTableFunctionStatementProto | null);
  'astDropMaterializedViewStatementNode'?: (_zetasql_ASTDropMaterializedViewStatementProto | null);
  'astDropSnapshotTableStatementNode'?: (_zetasql_ASTDropSnapshotTableStatementProto | null);
  'astDropSearchIndexStatementNode'?: (_zetasql_ASTDropSearchIndexStatementProto | null);
  'astCreateStatementNode'?: (_zetasql_AnyASTCreateStatementProto | null);
  'astDropRowAccessPolicyStatementNode'?: (_zetasql_ASTDropRowAccessPolicyStatementProto | null);
  'astDropStatementNode'?: (_zetasql_ASTDropStatementProto | null);
  'astAlterStatementBaseNode'?: (_zetasql_AnyASTAlterStatementBaseProto | null);
  'astDropPrivilegeRestrictionStatementNode'?: (_zetasql_ASTDropPrivilegeRestrictionStatementProto | null);
  'node'?: "astDropEntityStatementNode"|"astDropFunctionStatementNode"|"astDropTableFunctionStatementNode"|"astDropMaterializedViewStatementNode"|"astDropSnapshotTableStatementNode"|"astDropSearchIndexStatementNode"|"astCreateStatementNode"|"astDropRowAccessPolicyStatementNode"|"astDropStatementNode"|"astAlterStatementBaseNode"|"astDropPrivilegeRestrictionStatementNode";
}

export interface AnyASTDdlStatementProto__Output {
  'astDropEntityStatementNode'?: (_zetasql_ASTDropEntityStatementProto__Output | null);
  'astDropFunctionStatementNode'?: (_zetasql_ASTDropFunctionStatementProto__Output | null);
  'astDropTableFunctionStatementNode'?: (_zetasql_ASTDropTableFunctionStatementProto__Output | null);
  'astDropMaterializedViewStatementNode'?: (_zetasql_ASTDropMaterializedViewStatementProto__Output | null);
  'astDropSnapshotTableStatementNode'?: (_zetasql_ASTDropSnapshotTableStatementProto__Output | null);
  'astDropSearchIndexStatementNode'?: (_zetasql_ASTDropSearchIndexStatementProto__Output | null);
  'astCreateStatementNode'?: (_zetasql_AnyASTCreateStatementProto__Output | null);
  'astDropRowAccessPolicyStatementNode'?: (_zetasql_ASTDropRowAccessPolicyStatementProto__Output | null);
  'astDropStatementNode'?: (_zetasql_ASTDropStatementProto__Output | null);
  'astAlterStatementBaseNode'?: (_zetasql_AnyASTAlterStatementBaseProto__Output | null);
  'astDropPrivilegeRestrictionStatementNode'?: (_zetasql_ASTDropPrivilegeRestrictionStatementProto__Output | null);
  'node': "astDropEntityStatementNode"|"astDropFunctionStatementNode"|"astDropTableFunctionStatementNode"|"astDropMaterializedViewStatementNode"|"astDropSnapshotTableStatementNode"|"astDropSearchIndexStatementNode"|"astCreateStatementNode"|"astDropRowAccessPolicyStatementNode"|"astDropStatementNode"|"astAlterStatementBaseNode"|"astDropPrivilegeRestrictionStatementNode";
}
