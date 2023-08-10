// Original file: src/zetasql/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedExplainStmtProto as _zetasql_ResolvedExplainStmtProto, ResolvedExplainStmtProto__Output as _zetasql_ResolvedExplainStmtProto__Output } from '../zetasql/ResolvedExplainStmtProto';
import type { ResolvedQueryStmtProto as _zetasql_ResolvedQueryStmtProto, ResolvedQueryStmtProto__Output as _zetasql_ResolvedQueryStmtProto__Output } from '../zetasql/ResolvedQueryStmtProto';
import type { AnyResolvedCreateStatementProto as _zetasql_AnyResolvedCreateStatementProto, AnyResolvedCreateStatementProto__Output as _zetasql_AnyResolvedCreateStatementProto__Output } from '../zetasql/AnyResolvedCreateStatementProto';
import type { ResolvedExportDataStmtProto as _zetasql_ResolvedExportDataStmtProto, ResolvedExportDataStmtProto__Output as _zetasql_ResolvedExportDataStmtProto__Output } from '../zetasql/ResolvedExportDataStmtProto';
import type { ResolvedDefineTableStmtProto as _zetasql_ResolvedDefineTableStmtProto, ResolvedDefineTableStmtProto__Output as _zetasql_ResolvedDefineTableStmtProto__Output } from '../zetasql/ResolvedDefineTableStmtProto';
import type { ResolvedDescribeStmtProto as _zetasql_ResolvedDescribeStmtProto, ResolvedDescribeStmtProto__Output as _zetasql_ResolvedDescribeStmtProto__Output } from '../zetasql/ResolvedDescribeStmtProto';
import type { ResolvedShowStmtProto as _zetasql_ResolvedShowStmtProto, ResolvedShowStmtProto__Output as _zetasql_ResolvedShowStmtProto__Output } from '../zetasql/ResolvedShowStmtProto';
import type { ResolvedBeginStmtProto as _zetasql_ResolvedBeginStmtProto, ResolvedBeginStmtProto__Output as _zetasql_ResolvedBeginStmtProto__Output } from '../zetasql/ResolvedBeginStmtProto';
import type { ResolvedCommitStmtProto as _zetasql_ResolvedCommitStmtProto, ResolvedCommitStmtProto__Output as _zetasql_ResolvedCommitStmtProto__Output } from '../zetasql/ResolvedCommitStmtProto';
import type { ResolvedRollbackStmtProto as _zetasql_ResolvedRollbackStmtProto, ResolvedRollbackStmtProto__Output as _zetasql_ResolvedRollbackStmtProto__Output } from '../zetasql/ResolvedRollbackStmtProto';
import type { ResolvedDropStmtProto as _zetasql_ResolvedDropStmtProto, ResolvedDropStmtProto__Output as _zetasql_ResolvedDropStmtProto__Output } from '../zetasql/ResolvedDropStmtProto';
import type { ResolvedInsertStmtProto as _zetasql_ResolvedInsertStmtProto, ResolvedInsertStmtProto__Output as _zetasql_ResolvedInsertStmtProto__Output } from '../zetasql/ResolvedInsertStmtProto';
import type { ResolvedDeleteStmtProto as _zetasql_ResolvedDeleteStmtProto, ResolvedDeleteStmtProto__Output as _zetasql_ResolvedDeleteStmtProto__Output } from '../zetasql/ResolvedDeleteStmtProto';
import type { ResolvedUpdateStmtProto as _zetasql_ResolvedUpdateStmtProto, ResolvedUpdateStmtProto__Output as _zetasql_ResolvedUpdateStmtProto__Output } from '../zetasql/ResolvedUpdateStmtProto';
import type { AnyResolvedGrantOrRevokeStmtProto as _zetasql_AnyResolvedGrantOrRevokeStmtProto, AnyResolvedGrantOrRevokeStmtProto__Output as _zetasql_AnyResolvedGrantOrRevokeStmtProto__Output } from '../zetasql/AnyResolvedGrantOrRevokeStmtProto';
import type { ResolvedAlterTableSetOptionsStmtProto as _zetasql_ResolvedAlterTableSetOptionsStmtProto, ResolvedAlterTableSetOptionsStmtProto__Output as _zetasql_ResolvedAlterTableSetOptionsStmtProto__Output } from '../zetasql/ResolvedAlterTableSetOptionsStmtProto';
import type { ResolvedRenameStmtProto as _zetasql_ResolvedRenameStmtProto, ResolvedRenameStmtProto__Output as _zetasql_ResolvedRenameStmtProto__Output } from '../zetasql/ResolvedRenameStmtProto';
import type { ResolvedCreateRowAccessPolicyStmtProto as _zetasql_ResolvedCreateRowAccessPolicyStmtProto, ResolvedCreateRowAccessPolicyStmtProto__Output as _zetasql_ResolvedCreateRowAccessPolicyStmtProto__Output } from '../zetasql/ResolvedCreateRowAccessPolicyStmtProto';
import type { ResolvedDropRowAccessPolicyStmtProto as _zetasql_ResolvedDropRowAccessPolicyStmtProto, ResolvedDropRowAccessPolicyStmtProto__Output as _zetasql_ResolvedDropRowAccessPolicyStmtProto__Output } from '../zetasql/ResolvedDropRowAccessPolicyStmtProto';
import type { ResolvedDropFunctionStmtProto as _zetasql_ResolvedDropFunctionStmtProto, ResolvedDropFunctionStmtProto__Output as _zetasql_ResolvedDropFunctionStmtProto__Output } from '../zetasql/ResolvedDropFunctionStmtProto';
import type { ResolvedCallStmtProto as _zetasql_ResolvedCallStmtProto, ResolvedCallStmtProto__Output as _zetasql_ResolvedCallStmtProto__Output } from '../zetasql/ResolvedCallStmtProto';
import type { ResolvedImportStmtProto as _zetasql_ResolvedImportStmtProto, ResolvedImportStmtProto__Output as _zetasql_ResolvedImportStmtProto__Output } from '../zetasql/ResolvedImportStmtProto';
import type { ResolvedModuleStmtProto as _zetasql_ResolvedModuleStmtProto, ResolvedModuleStmtProto__Output as _zetasql_ResolvedModuleStmtProto__Output } from '../zetasql/ResolvedModuleStmtProto';
import type { ResolvedCreateDatabaseStmtProto as _zetasql_ResolvedCreateDatabaseStmtProto, ResolvedCreateDatabaseStmtProto__Output as _zetasql_ResolvedCreateDatabaseStmtProto__Output } from '../zetasql/ResolvedCreateDatabaseStmtProto';
import type { ResolvedAssertStmtProto as _zetasql_ResolvedAssertStmtProto, ResolvedAssertStmtProto__Output as _zetasql_ResolvedAssertStmtProto__Output } from '../zetasql/ResolvedAssertStmtProto';
import type { ResolvedMergeStmtProto as _zetasql_ResolvedMergeStmtProto, ResolvedMergeStmtProto__Output as _zetasql_ResolvedMergeStmtProto__Output } from '../zetasql/ResolvedMergeStmtProto';
import type { AnyResolvedAlterObjectStmtProto as _zetasql_AnyResolvedAlterObjectStmtProto, AnyResolvedAlterObjectStmtProto__Output as _zetasql_AnyResolvedAlterObjectStmtProto__Output } from '../zetasql/AnyResolvedAlterObjectStmtProto';
import type { ResolvedSetTransactionStmtProto as _zetasql_ResolvedSetTransactionStmtProto, ResolvedSetTransactionStmtProto__Output as _zetasql_ResolvedSetTransactionStmtProto__Output } from '../zetasql/ResolvedSetTransactionStmtProto';
import type { ResolvedDropMaterializedViewStmtProto as _zetasql_ResolvedDropMaterializedViewStmtProto, ResolvedDropMaterializedViewStmtProto__Output as _zetasql_ResolvedDropMaterializedViewStmtProto__Output } from '../zetasql/ResolvedDropMaterializedViewStmtProto';
import type { ResolvedStartBatchStmtProto as _zetasql_ResolvedStartBatchStmtProto, ResolvedStartBatchStmtProto__Output as _zetasql_ResolvedStartBatchStmtProto__Output } from '../zetasql/ResolvedStartBatchStmtProto';
import type { ResolvedRunBatchStmtProto as _zetasql_ResolvedRunBatchStmtProto, ResolvedRunBatchStmtProto__Output as _zetasql_ResolvedRunBatchStmtProto__Output } from '../zetasql/ResolvedRunBatchStmtProto';
import type { ResolvedAbortBatchStmtProto as _zetasql_ResolvedAbortBatchStmtProto, ResolvedAbortBatchStmtProto__Output as _zetasql_ResolvedAbortBatchStmtProto__Output } from '../zetasql/ResolvedAbortBatchStmtProto';
import type { ResolvedTruncateStmtProto as _zetasql_ResolvedTruncateStmtProto, ResolvedTruncateStmtProto__Output as _zetasql_ResolvedTruncateStmtProto__Output } from '../zetasql/ResolvedTruncateStmtProto';
import type { ResolvedExecuteImmediateStmtProto as _zetasql_ResolvedExecuteImmediateStmtProto, ResolvedExecuteImmediateStmtProto__Output as _zetasql_ResolvedExecuteImmediateStmtProto__Output } from '../zetasql/ResolvedExecuteImmediateStmtProto';
import type { ResolvedAssignmentStmtProto as _zetasql_ResolvedAssignmentStmtProto, ResolvedAssignmentStmtProto__Output as _zetasql_ResolvedAssignmentStmtProto__Output } from '../zetasql/ResolvedAssignmentStmtProto';
import type { ResolvedExportModelStmtProto as _zetasql_ResolvedExportModelStmtProto, ResolvedExportModelStmtProto__Output as _zetasql_ResolvedExportModelStmtProto__Output } from '../zetasql/ResolvedExportModelStmtProto';
import type { ResolvedDropTableFunctionStmtProto as _zetasql_ResolvedDropTableFunctionStmtProto, ResolvedDropTableFunctionStmtProto__Output as _zetasql_ResolvedDropTableFunctionStmtProto__Output } from '../zetasql/ResolvedDropTableFunctionStmtProto';
import type { ResolvedCloneDataStmtProto as _zetasql_ResolvedCloneDataStmtProto, ResolvedCloneDataStmtProto__Output as _zetasql_ResolvedCloneDataStmtProto__Output } from '../zetasql/ResolvedCloneDataStmtProto';
import type { ResolvedAnalyzeStmtProto as _zetasql_ResolvedAnalyzeStmtProto, ResolvedAnalyzeStmtProto__Output as _zetasql_ResolvedAnalyzeStmtProto__Output } from '../zetasql/ResolvedAnalyzeStmtProto';
import type { ResolvedDropSnapshotTableStmtProto as _zetasql_ResolvedDropSnapshotTableStmtProto, ResolvedDropSnapshotTableStmtProto__Output as _zetasql_ResolvedDropSnapshotTableStmtProto__Output } from '../zetasql/ResolvedDropSnapshotTableStmtProto';
import type { ResolvedAuxLoadDataStmtProto as _zetasql_ResolvedAuxLoadDataStmtProto, ResolvedAuxLoadDataStmtProto__Output as _zetasql_ResolvedAuxLoadDataStmtProto__Output } from '../zetasql/ResolvedAuxLoadDataStmtProto';
import type { ResolvedDropPrivilegeRestrictionStmtProto as _zetasql_ResolvedDropPrivilegeRestrictionStmtProto, ResolvedDropPrivilegeRestrictionStmtProto__Output as _zetasql_ResolvedDropPrivilegeRestrictionStmtProto__Output } from '../zetasql/ResolvedDropPrivilegeRestrictionStmtProto';
import type { ResolvedUndropStmtProto as _zetasql_ResolvedUndropStmtProto, ResolvedUndropStmtProto__Output as _zetasql_ResolvedUndropStmtProto__Output } from '../zetasql/ResolvedUndropStmtProto';
import type { ResolvedExportMetadataStmtProto as _zetasql_ResolvedExportMetadataStmtProto, ResolvedExportMetadataStmtProto__Output as _zetasql_ResolvedExportMetadataStmtProto__Output } from '../zetasql/ResolvedExportMetadataStmtProto';
import type { ResolvedDropIndexStmtProto as _zetasql_ResolvedDropIndexStmtProto, ResolvedDropIndexStmtProto__Output as _zetasql_ResolvedDropIndexStmtProto__Output } from '../zetasql/ResolvedDropIndexStmtProto';

export interface AnyResolvedStatementProto {
  'resolvedExplainStmtNode'?: (_zetasql_ResolvedExplainStmtProto | null);
  'resolvedQueryStmtNode'?: (_zetasql_ResolvedQueryStmtProto | null);
  'resolvedCreateStatementNode'?: (_zetasql_AnyResolvedCreateStatementProto | null);
  'resolvedExportDataStmtNode'?: (_zetasql_ResolvedExportDataStmtProto | null);
  'resolvedDefineTableStmtNode'?: (_zetasql_ResolvedDefineTableStmtProto | null);
  'resolvedDescribeStmtNode'?: (_zetasql_ResolvedDescribeStmtProto | null);
  'resolvedShowStmtNode'?: (_zetasql_ResolvedShowStmtProto | null);
  'resolvedBeginStmtNode'?: (_zetasql_ResolvedBeginStmtProto | null);
  'resolvedCommitStmtNode'?: (_zetasql_ResolvedCommitStmtProto | null);
  'resolvedRollbackStmtNode'?: (_zetasql_ResolvedRollbackStmtProto | null);
  'resolvedDropStmtNode'?: (_zetasql_ResolvedDropStmtProto | null);
  'resolvedInsertStmtNode'?: (_zetasql_ResolvedInsertStmtProto | null);
  'resolvedDeleteStmtNode'?: (_zetasql_ResolvedDeleteStmtProto | null);
  'resolvedUpdateStmtNode'?: (_zetasql_ResolvedUpdateStmtProto | null);
  'resolvedGrantOrRevokeStmtNode'?: (_zetasql_AnyResolvedGrantOrRevokeStmtProto | null);
  'resolvedAlterTableSetOptionsStmtNode'?: (_zetasql_ResolvedAlterTableSetOptionsStmtProto | null);
  'resolvedRenameStmtNode'?: (_zetasql_ResolvedRenameStmtProto | null);
  'resolvedCreateRowAccessPolicyStmtNode'?: (_zetasql_ResolvedCreateRowAccessPolicyStmtProto | null);
  'resolvedDropRowAccessPolicyStmtNode'?: (_zetasql_ResolvedDropRowAccessPolicyStmtProto | null);
  'resolvedDropFunctionStmtNode'?: (_zetasql_ResolvedDropFunctionStmtProto | null);
  'resolvedCallStmtNode'?: (_zetasql_ResolvedCallStmtProto | null);
  'resolvedImportStmtNode'?: (_zetasql_ResolvedImportStmtProto | null);
  'resolvedModuleStmtNode'?: (_zetasql_ResolvedModuleStmtProto | null);
  'resolvedCreateDatabaseStmtNode'?: (_zetasql_ResolvedCreateDatabaseStmtProto | null);
  'resolvedAssertStmtNode'?: (_zetasql_ResolvedAssertStmtProto | null);
  'resolvedMergeStmtNode'?: (_zetasql_ResolvedMergeStmtProto | null);
  'resolvedAlterObjectStmtNode'?: (_zetasql_AnyResolvedAlterObjectStmtProto | null);
  'resolvedSetTransactionStmtNode'?: (_zetasql_ResolvedSetTransactionStmtProto | null);
  'resolvedDropMaterializedViewStmtNode'?: (_zetasql_ResolvedDropMaterializedViewStmtProto | null);
  'resolvedStartBatchStmtNode'?: (_zetasql_ResolvedStartBatchStmtProto | null);
  'resolvedRunBatchStmtNode'?: (_zetasql_ResolvedRunBatchStmtProto | null);
  'resolvedAbortBatchStmtNode'?: (_zetasql_ResolvedAbortBatchStmtProto | null);
  'resolvedTruncateStmtNode'?: (_zetasql_ResolvedTruncateStmtProto | null);
  'resolvedExecuteImmediateStmtNode'?: (_zetasql_ResolvedExecuteImmediateStmtProto | null);
  'resolvedAssignmentStmtNode'?: (_zetasql_ResolvedAssignmentStmtProto | null);
  'resolvedExportModelStmtNode'?: (_zetasql_ResolvedExportModelStmtProto | null);
  'resolvedDropTableFunctionStmtNode'?: (_zetasql_ResolvedDropTableFunctionStmtProto | null);
  'resolvedCloneDataStmtNode'?: (_zetasql_ResolvedCloneDataStmtProto | null);
  'resolvedAnalyzeStmtNode'?: (_zetasql_ResolvedAnalyzeStmtProto | null);
  'resolvedDropSnapshotTableStmtNode'?: (_zetasql_ResolvedDropSnapshotTableStmtProto | null);
  'resolvedAuxLoadDataStmtNode'?: (_zetasql_ResolvedAuxLoadDataStmtProto | null);
  'resolvedDropPrivilegeRestrictionStmtNode'?: (_zetasql_ResolvedDropPrivilegeRestrictionStmtProto | null);
  'resolvedUndropStmtNode'?: (_zetasql_ResolvedUndropStmtProto | null);
  'resolvedExportMetadataStmtNode'?: (_zetasql_ResolvedExportMetadataStmtProto | null);
  'resolvedDropIndexStmtNode'?: (_zetasql_ResolvedDropIndexStmtProto | null);
  'node'?: "resolvedExplainStmtNode"|"resolvedQueryStmtNode"|"resolvedCreateStatementNode"|"resolvedExportDataStmtNode"|"resolvedDefineTableStmtNode"|"resolvedDescribeStmtNode"|"resolvedShowStmtNode"|"resolvedBeginStmtNode"|"resolvedCommitStmtNode"|"resolvedRollbackStmtNode"|"resolvedDropStmtNode"|"resolvedInsertStmtNode"|"resolvedDeleteStmtNode"|"resolvedUpdateStmtNode"|"resolvedGrantOrRevokeStmtNode"|"resolvedAlterTableSetOptionsStmtNode"|"resolvedRenameStmtNode"|"resolvedCreateRowAccessPolicyStmtNode"|"resolvedDropRowAccessPolicyStmtNode"|"resolvedDropFunctionStmtNode"|"resolvedCallStmtNode"|"resolvedImportStmtNode"|"resolvedModuleStmtNode"|"resolvedCreateDatabaseStmtNode"|"resolvedAssertStmtNode"|"resolvedMergeStmtNode"|"resolvedAlterObjectStmtNode"|"resolvedSetTransactionStmtNode"|"resolvedDropMaterializedViewStmtNode"|"resolvedStartBatchStmtNode"|"resolvedRunBatchStmtNode"|"resolvedAbortBatchStmtNode"|"resolvedTruncateStmtNode"|"resolvedExecuteImmediateStmtNode"|"resolvedAssignmentStmtNode"|"resolvedExportModelStmtNode"|"resolvedDropTableFunctionStmtNode"|"resolvedCloneDataStmtNode"|"resolvedAnalyzeStmtNode"|"resolvedDropSnapshotTableStmtNode"|"resolvedAuxLoadDataStmtNode"|"resolvedDropPrivilegeRestrictionStmtNode"|"resolvedUndropStmtNode"|"resolvedExportMetadataStmtNode"|"resolvedDropIndexStmtNode";
}

export interface AnyResolvedStatementProto__Output {
  'resolvedExplainStmtNode'?: (_zetasql_ResolvedExplainStmtProto__Output | null);
  'resolvedQueryStmtNode'?: (_zetasql_ResolvedQueryStmtProto__Output | null);
  'resolvedCreateStatementNode'?: (_zetasql_AnyResolvedCreateStatementProto__Output | null);
  'resolvedExportDataStmtNode'?: (_zetasql_ResolvedExportDataStmtProto__Output | null);
  'resolvedDefineTableStmtNode'?: (_zetasql_ResolvedDefineTableStmtProto__Output | null);
  'resolvedDescribeStmtNode'?: (_zetasql_ResolvedDescribeStmtProto__Output | null);
  'resolvedShowStmtNode'?: (_zetasql_ResolvedShowStmtProto__Output | null);
  'resolvedBeginStmtNode'?: (_zetasql_ResolvedBeginStmtProto__Output | null);
  'resolvedCommitStmtNode'?: (_zetasql_ResolvedCommitStmtProto__Output | null);
  'resolvedRollbackStmtNode'?: (_zetasql_ResolvedRollbackStmtProto__Output | null);
  'resolvedDropStmtNode'?: (_zetasql_ResolvedDropStmtProto__Output | null);
  'resolvedInsertStmtNode'?: (_zetasql_ResolvedInsertStmtProto__Output | null);
  'resolvedDeleteStmtNode'?: (_zetasql_ResolvedDeleteStmtProto__Output | null);
  'resolvedUpdateStmtNode'?: (_zetasql_ResolvedUpdateStmtProto__Output | null);
  'resolvedGrantOrRevokeStmtNode'?: (_zetasql_AnyResolvedGrantOrRevokeStmtProto__Output | null);
  'resolvedAlterTableSetOptionsStmtNode'?: (_zetasql_ResolvedAlterTableSetOptionsStmtProto__Output | null);
  'resolvedRenameStmtNode'?: (_zetasql_ResolvedRenameStmtProto__Output | null);
  'resolvedCreateRowAccessPolicyStmtNode'?: (_zetasql_ResolvedCreateRowAccessPolicyStmtProto__Output | null);
  'resolvedDropRowAccessPolicyStmtNode'?: (_zetasql_ResolvedDropRowAccessPolicyStmtProto__Output | null);
  'resolvedDropFunctionStmtNode'?: (_zetasql_ResolvedDropFunctionStmtProto__Output | null);
  'resolvedCallStmtNode'?: (_zetasql_ResolvedCallStmtProto__Output | null);
  'resolvedImportStmtNode'?: (_zetasql_ResolvedImportStmtProto__Output | null);
  'resolvedModuleStmtNode'?: (_zetasql_ResolvedModuleStmtProto__Output | null);
  'resolvedCreateDatabaseStmtNode'?: (_zetasql_ResolvedCreateDatabaseStmtProto__Output | null);
  'resolvedAssertStmtNode'?: (_zetasql_ResolvedAssertStmtProto__Output | null);
  'resolvedMergeStmtNode'?: (_zetasql_ResolvedMergeStmtProto__Output | null);
  'resolvedAlterObjectStmtNode'?: (_zetasql_AnyResolvedAlterObjectStmtProto__Output | null);
  'resolvedSetTransactionStmtNode'?: (_zetasql_ResolvedSetTransactionStmtProto__Output | null);
  'resolvedDropMaterializedViewStmtNode'?: (_zetasql_ResolvedDropMaterializedViewStmtProto__Output | null);
  'resolvedStartBatchStmtNode'?: (_zetasql_ResolvedStartBatchStmtProto__Output | null);
  'resolvedRunBatchStmtNode'?: (_zetasql_ResolvedRunBatchStmtProto__Output | null);
  'resolvedAbortBatchStmtNode'?: (_zetasql_ResolvedAbortBatchStmtProto__Output | null);
  'resolvedTruncateStmtNode'?: (_zetasql_ResolvedTruncateStmtProto__Output | null);
  'resolvedExecuteImmediateStmtNode'?: (_zetasql_ResolvedExecuteImmediateStmtProto__Output | null);
  'resolvedAssignmentStmtNode'?: (_zetasql_ResolvedAssignmentStmtProto__Output | null);
  'resolvedExportModelStmtNode'?: (_zetasql_ResolvedExportModelStmtProto__Output | null);
  'resolvedDropTableFunctionStmtNode'?: (_zetasql_ResolvedDropTableFunctionStmtProto__Output | null);
  'resolvedCloneDataStmtNode'?: (_zetasql_ResolvedCloneDataStmtProto__Output | null);
  'resolvedAnalyzeStmtNode'?: (_zetasql_ResolvedAnalyzeStmtProto__Output | null);
  'resolvedDropSnapshotTableStmtNode'?: (_zetasql_ResolvedDropSnapshotTableStmtProto__Output | null);
  'resolvedAuxLoadDataStmtNode'?: (_zetasql_ResolvedAuxLoadDataStmtProto__Output | null);
  'resolvedDropPrivilegeRestrictionStmtNode'?: (_zetasql_ResolvedDropPrivilegeRestrictionStmtProto__Output | null);
  'resolvedUndropStmtNode'?: (_zetasql_ResolvedUndropStmtProto__Output | null);
  'resolvedExportMetadataStmtNode'?: (_zetasql_ResolvedExportMetadataStmtProto__Output | null);
  'resolvedDropIndexStmtNode'?: (_zetasql_ResolvedDropIndexStmtProto__Output | null);
  'node': "resolvedExplainStmtNode"|"resolvedQueryStmtNode"|"resolvedCreateStatementNode"|"resolvedExportDataStmtNode"|"resolvedDefineTableStmtNode"|"resolvedDescribeStmtNode"|"resolvedShowStmtNode"|"resolvedBeginStmtNode"|"resolvedCommitStmtNode"|"resolvedRollbackStmtNode"|"resolvedDropStmtNode"|"resolvedInsertStmtNode"|"resolvedDeleteStmtNode"|"resolvedUpdateStmtNode"|"resolvedGrantOrRevokeStmtNode"|"resolvedAlterTableSetOptionsStmtNode"|"resolvedRenameStmtNode"|"resolvedCreateRowAccessPolicyStmtNode"|"resolvedDropRowAccessPolicyStmtNode"|"resolvedDropFunctionStmtNode"|"resolvedCallStmtNode"|"resolvedImportStmtNode"|"resolvedModuleStmtNode"|"resolvedCreateDatabaseStmtNode"|"resolvedAssertStmtNode"|"resolvedMergeStmtNode"|"resolvedAlterObjectStmtNode"|"resolvedSetTransactionStmtNode"|"resolvedDropMaterializedViewStmtNode"|"resolvedStartBatchStmtNode"|"resolvedRunBatchStmtNode"|"resolvedAbortBatchStmtNode"|"resolvedTruncateStmtNode"|"resolvedExecuteImmediateStmtNode"|"resolvedAssignmentStmtNode"|"resolvedExportModelStmtNode"|"resolvedDropTableFunctionStmtNode"|"resolvedCloneDataStmtNode"|"resolvedAnalyzeStmtNode"|"resolvedDropSnapshotTableStmtNode"|"resolvedAuxLoadDataStmtNode"|"resolvedDropPrivilegeRestrictionStmtNode"|"resolvedUndropStmtNode"|"resolvedExportMetadataStmtNode"|"resolvedDropIndexStmtNode";
}
