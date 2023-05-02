// Original file: src/snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTQueryStatementProto as _zetasql_ASTQueryStatementProto, ASTQueryStatementProto__Output as _zetasql_ASTQueryStatementProto__Output } from '../zetasql/ASTQueryStatementProto';
import type { AnyASTScriptStatementProto as _zetasql_AnyASTScriptStatementProto, AnyASTScriptStatementProto__Output as _zetasql_AnyASTScriptStatementProto__Output } from '../zetasql/AnyASTScriptStatementProto';
import type { ASTHintedStatementProto as _zetasql_ASTHintedStatementProto, ASTHintedStatementProto__Output as _zetasql_ASTHintedStatementProto__Output } from '../zetasql/ASTHintedStatementProto';
import type { ASTExplainStatementProto as _zetasql_ASTExplainStatementProto, ASTExplainStatementProto__Output as _zetasql_ASTExplainStatementProto__Output } from '../zetasql/ASTExplainStatementProto';
import type { ASTDescribeStatementProto as _zetasql_ASTDescribeStatementProto, ASTDescribeStatementProto__Output as _zetasql_ASTDescribeStatementProto__Output } from '../zetasql/ASTDescribeStatementProto';
import type { ASTShowStatementProto as _zetasql_ASTShowStatementProto, ASTShowStatementProto__Output as _zetasql_ASTShowStatementProto__Output } from '../zetasql/ASTShowStatementProto';
import type { ASTBeginStatementProto as _zetasql_ASTBeginStatementProto, ASTBeginStatementProto__Output as _zetasql_ASTBeginStatementProto__Output } from '../zetasql/ASTBeginStatementProto';
import type { ASTSetTransactionStatementProto as _zetasql_ASTSetTransactionStatementProto, ASTSetTransactionStatementProto__Output as _zetasql_ASTSetTransactionStatementProto__Output } from '../zetasql/ASTSetTransactionStatementProto';
import type { ASTCommitStatementProto as _zetasql_ASTCommitStatementProto, ASTCommitStatementProto__Output as _zetasql_ASTCommitStatementProto__Output } from '../zetasql/ASTCommitStatementProto';
import type { ASTRollbackStatementProto as _zetasql_ASTRollbackStatementProto, ASTRollbackStatementProto__Output as _zetasql_ASTRollbackStatementProto__Output } from '../zetasql/ASTRollbackStatementProto';
import type { ASTStartBatchStatementProto as _zetasql_ASTStartBatchStatementProto, ASTStartBatchStatementProto__Output as _zetasql_ASTStartBatchStatementProto__Output } from '../zetasql/ASTStartBatchStatementProto';
import type { ASTRunBatchStatementProto as _zetasql_ASTRunBatchStatementProto, ASTRunBatchStatementProto__Output as _zetasql_ASTRunBatchStatementProto__Output } from '../zetasql/ASTRunBatchStatementProto';
import type { ASTAbortBatchStatementProto as _zetasql_ASTAbortBatchStatementProto, ASTAbortBatchStatementProto__Output as _zetasql_ASTAbortBatchStatementProto__Output } from '../zetasql/ASTAbortBatchStatementProto';
import type { AnyASTDdlStatementProto as _zetasql_AnyASTDdlStatementProto, AnyASTDdlStatementProto__Output as _zetasql_AnyASTDdlStatementProto__Output } from '../zetasql/AnyASTDdlStatementProto';
import type { ASTDropAllRowAccessPoliciesStatementProto as _zetasql_ASTDropAllRowAccessPoliciesStatementProto, ASTDropAllRowAccessPoliciesStatementProto__Output as _zetasql_ASTDropAllRowAccessPoliciesStatementProto__Output } from '../zetasql/ASTDropAllRowAccessPoliciesStatementProto';
import type { ASTRenameStatementProto as _zetasql_ASTRenameStatementProto, ASTRenameStatementProto__Output as _zetasql_ASTRenameStatementProto__Output } from '../zetasql/ASTRenameStatementProto';
import type { ASTImportStatementProto as _zetasql_ASTImportStatementProto, ASTImportStatementProto__Output as _zetasql_ASTImportStatementProto__Output } from '../zetasql/ASTImportStatementProto';
import type { ASTModuleStatementProto as _zetasql_ASTModuleStatementProto, ASTModuleStatementProto__Output as _zetasql_ASTModuleStatementProto__Output } from '../zetasql/ASTModuleStatementProto';
import type { ASTCloneDataStatementProto as _zetasql_ASTCloneDataStatementProto, ASTCloneDataStatementProto__Output as _zetasql_ASTCloneDataStatementProto__Output } from '../zetasql/ASTCloneDataStatementProto';
import type { ASTCreateDatabaseStatementProto as _zetasql_ASTCreateDatabaseStatementProto, ASTCreateDatabaseStatementProto__Output as _zetasql_ASTCreateDatabaseStatementProto__Output } from '../zetasql/ASTCreateDatabaseStatementProto';
import type { ASTExportDataStatementProto as _zetasql_ASTExportDataStatementProto, ASTExportDataStatementProto__Output as _zetasql_ASTExportDataStatementProto__Output } from '../zetasql/ASTExportDataStatementProto';
import type { ASTExportModelStatementProto as _zetasql_ASTExportModelStatementProto, ASTExportModelStatementProto__Output as _zetasql_ASTExportModelStatementProto__Output } from '../zetasql/ASTExportModelStatementProto';
import type { ASTCallStatementProto as _zetasql_ASTCallStatementProto, ASTCallStatementProto__Output as _zetasql_ASTCallStatementProto__Output } from '../zetasql/ASTCallStatementProto';
import type { ASTDefineTableStatementProto as _zetasql_ASTDefineTableStatementProto, ASTDefineTableStatementProto__Output as _zetasql_ASTDefineTableStatementProto__Output } from '../zetasql/ASTDefineTableStatementProto';
import type { ASTAnalyzeStatementProto as _zetasql_ASTAnalyzeStatementProto, ASTAnalyzeStatementProto__Output as _zetasql_ASTAnalyzeStatementProto__Output } from '../zetasql/ASTAnalyzeStatementProto';
import type { ASTAssertStatementProto as _zetasql_ASTAssertStatementProto, ASTAssertStatementProto__Output as _zetasql_ASTAssertStatementProto__Output } from '../zetasql/ASTAssertStatementProto';
import type { ASTDeleteStatementProto as _zetasql_ASTDeleteStatementProto, ASTDeleteStatementProto__Output as _zetasql_ASTDeleteStatementProto__Output } from '../zetasql/ASTDeleteStatementProto';
import type { ASTInsertStatementProto as _zetasql_ASTInsertStatementProto, ASTInsertStatementProto__Output as _zetasql_ASTInsertStatementProto__Output } from '../zetasql/ASTInsertStatementProto';
import type { ASTUpdateStatementProto as _zetasql_ASTUpdateStatementProto, ASTUpdateStatementProto__Output as _zetasql_ASTUpdateStatementProto__Output } from '../zetasql/ASTUpdateStatementProto';
import type { ASTTruncateStatementProto as _zetasql_ASTTruncateStatementProto, ASTTruncateStatementProto__Output as _zetasql_ASTTruncateStatementProto__Output } from '../zetasql/ASTTruncateStatementProto';
import type { ASTMergeStatementProto as _zetasql_ASTMergeStatementProto, ASTMergeStatementProto__Output as _zetasql_ASTMergeStatementProto__Output } from '../zetasql/ASTMergeStatementProto';
import type { ASTGrantStatementProto as _zetasql_ASTGrantStatementProto, ASTGrantStatementProto__Output as _zetasql_ASTGrantStatementProto__Output } from '../zetasql/ASTGrantStatementProto';
import type { ASTRevokeStatementProto as _zetasql_ASTRevokeStatementProto, ASTRevokeStatementProto__Output as _zetasql_ASTRevokeStatementProto__Output } from '../zetasql/ASTRevokeStatementProto';
import type { ASTAlterAllRowAccessPoliciesStatementProto as _zetasql_ASTAlterAllRowAccessPoliciesStatementProto, ASTAlterAllRowAccessPoliciesStatementProto__Output as _zetasql_ASTAlterAllRowAccessPoliciesStatementProto__Output } from '../zetasql/ASTAlterAllRowAccessPoliciesStatementProto';
import type { ASTParameterAssignmentProto as _zetasql_ASTParameterAssignmentProto, ASTParameterAssignmentProto__Output as _zetasql_ASTParameterAssignmentProto__Output } from '../zetasql/ASTParameterAssignmentProto';
import type { ASTSystemVariableAssignmentProto as _zetasql_ASTSystemVariableAssignmentProto, ASTSystemVariableAssignmentProto__Output as _zetasql_ASTSystemVariableAssignmentProto__Output } from '../zetasql/ASTSystemVariableAssignmentProto';
import type { ASTExecuteImmediateStatementProto as _zetasql_ASTExecuteImmediateStatementProto, ASTExecuteImmediateStatementProto__Output as _zetasql_ASTExecuteImmediateStatementProto__Output } from '../zetasql/ASTExecuteImmediateStatementProto';
import type { ASTDefineMacroStatementProto as _zetasql_ASTDefineMacroStatementProto, ASTDefineMacroStatementProto__Output as _zetasql_ASTDefineMacroStatementProto__Output } from '../zetasql/ASTDefineMacroStatementProto';

export interface AnyASTStatementProto {
  'astQueryStatementNode'?: (_zetasql_ASTQueryStatementProto | null);
  'astScriptStatementNode'?: (_zetasql_AnyASTScriptStatementProto | null);
  'astHintedStatementNode'?: (_zetasql_ASTHintedStatementProto | null);
  'astExplainStatementNode'?: (_zetasql_ASTExplainStatementProto | null);
  'astDescribeStatementNode'?: (_zetasql_ASTDescribeStatementProto | null);
  'astShowStatementNode'?: (_zetasql_ASTShowStatementProto | null);
  'astBeginStatementNode'?: (_zetasql_ASTBeginStatementProto | null);
  'astSetTransactionStatementNode'?: (_zetasql_ASTSetTransactionStatementProto | null);
  'astCommitStatementNode'?: (_zetasql_ASTCommitStatementProto | null);
  'astRollbackStatementNode'?: (_zetasql_ASTRollbackStatementProto | null);
  'astStartBatchStatementNode'?: (_zetasql_ASTStartBatchStatementProto | null);
  'astRunBatchStatementNode'?: (_zetasql_ASTRunBatchStatementProto | null);
  'astAbortBatchStatementNode'?: (_zetasql_ASTAbortBatchStatementProto | null);
  'astDdlStatementNode'?: (_zetasql_AnyASTDdlStatementProto | null);
  'astDropAllRowAccessPoliciesStatementNode'?: (_zetasql_ASTDropAllRowAccessPoliciesStatementProto | null);
  'astRenameStatementNode'?: (_zetasql_ASTRenameStatementProto | null);
  'astImportStatementNode'?: (_zetasql_ASTImportStatementProto | null);
  'astModuleStatementNode'?: (_zetasql_ASTModuleStatementProto | null);
  'astCloneDataStatementNode'?: (_zetasql_ASTCloneDataStatementProto | null);
  'astCreateDatabaseStatementNode'?: (_zetasql_ASTCreateDatabaseStatementProto | null);
  'astExportDataStatementNode'?: (_zetasql_ASTExportDataStatementProto | null);
  'astExportModelStatementNode'?: (_zetasql_ASTExportModelStatementProto | null);
  'astCallStatementNode'?: (_zetasql_ASTCallStatementProto | null);
  'astDefineTableStatementNode'?: (_zetasql_ASTDefineTableStatementProto | null);
  'astAnalyzeStatementNode'?: (_zetasql_ASTAnalyzeStatementProto | null);
  'astAssertStatementNode'?: (_zetasql_ASTAssertStatementProto | null);
  'astDeleteStatementNode'?: (_zetasql_ASTDeleteStatementProto | null);
  'astInsertStatementNode'?: (_zetasql_ASTInsertStatementProto | null);
  'astUpdateStatementNode'?: (_zetasql_ASTUpdateStatementProto | null);
  'astTruncateStatementNode'?: (_zetasql_ASTTruncateStatementProto | null);
  'astMergeStatementNode'?: (_zetasql_ASTMergeStatementProto | null);
  'astGrantStatementNode'?: (_zetasql_ASTGrantStatementProto | null);
  'astRevokeStatementNode'?: (_zetasql_ASTRevokeStatementProto | null);
  'astAlterAllRowAccessPoliciesStatementNode'?: (_zetasql_ASTAlterAllRowAccessPoliciesStatementProto | null);
  'astParameterAssignmentNode'?: (_zetasql_ASTParameterAssignmentProto | null);
  'astSystemVariableAssignmentNode'?: (_zetasql_ASTSystemVariableAssignmentProto | null);
  'astExecuteImmediateStatementNode'?: (_zetasql_ASTExecuteImmediateStatementProto | null);
  'astDefineMacroStatementNode'?: (_zetasql_ASTDefineMacroStatementProto | null);
  'node'?: "astQueryStatementNode"|"astScriptStatementNode"|"astHintedStatementNode"|"astExplainStatementNode"|"astDescribeStatementNode"|"astShowStatementNode"|"astBeginStatementNode"|"astSetTransactionStatementNode"|"astCommitStatementNode"|"astRollbackStatementNode"|"astStartBatchStatementNode"|"astRunBatchStatementNode"|"astAbortBatchStatementNode"|"astDdlStatementNode"|"astDropAllRowAccessPoliciesStatementNode"|"astRenameStatementNode"|"astImportStatementNode"|"astModuleStatementNode"|"astCloneDataStatementNode"|"astCreateDatabaseStatementNode"|"astExportDataStatementNode"|"astExportModelStatementNode"|"astCallStatementNode"|"astDefineTableStatementNode"|"astAnalyzeStatementNode"|"astAssertStatementNode"|"astDeleteStatementNode"|"astInsertStatementNode"|"astUpdateStatementNode"|"astTruncateStatementNode"|"astMergeStatementNode"|"astGrantStatementNode"|"astRevokeStatementNode"|"astAlterAllRowAccessPoliciesStatementNode"|"astParameterAssignmentNode"|"astSystemVariableAssignmentNode"|"astExecuteImmediateStatementNode"|"astDefineMacroStatementNode";
}

export interface AnyASTStatementProto__Output {
  'astQueryStatementNode'?: (_zetasql_ASTQueryStatementProto__Output | null);
  'astScriptStatementNode'?: (_zetasql_AnyASTScriptStatementProto__Output | null);
  'astHintedStatementNode'?: (_zetasql_ASTHintedStatementProto__Output | null);
  'astExplainStatementNode'?: (_zetasql_ASTExplainStatementProto__Output | null);
  'astDescribeStatementNode'?: (_zetasql_ASTDescribeStatementProto__Output | null);
  'astShowStatementNode'?: (_zetasql_ASTShowStatementProto__Output | null);
  'astBeginStatementNode'?: (_zetasql_ASTBeginStatementProto__Output | null);
  'astSetTransactionStatementNode'?: (_zetasql_ASTSetTransactionStatementProto__Output | null);
  'astCommitStatementNode'?: (_zetasql_ASTCommitStatementProto__Output | null);
  'astRollbackStatementNode'?: (_zetasql_ASTRollbackStatementProto__Output | null);
  'astStartBatchStatementNode'?: (_zetasql_ASTStartBatchStatementProto__Output | null);
  'astRunBatchStatementNode'?: (_zetasql_ASTRunBatchStatementProto__Output | null);
  'astAbortBatchStatementNode'?: (_zetasql_ASTAbortBatchStatementProto__Output | null);
  'astDdlStatementNode'?: (_zetasql_AnyASTDdlStatementProto__Output | null);
  'astDropAllRowAccessPoliciesStatementNode'?: (_zetasql_ASTDropAllRowAccessPoliciesStatementProto__Output | null);
  'astRenameStatementNode'?: (_zetasql_ASTRenameStatementProto__Output | null);
  'astImportStatementNode'?: (_zetasql_ASTImportStatementProto__Output | null);
  'astModuleStatementNode'?: (_zetasql_ASTModuleStatementProto__Output | null);
  'astCloneDataStatementNode'?: (_zetasql_ASTCloneDataStatementProto__Output | null);
  'astCreateDatabaseStatementNode'?: (_zetasql_ASTCreateDatabaseStatementProto__Output | null);
  'astExportDataStatementNode'?: (_zetasql_ASTExportDataStatementProto__Output | null);
  'astExportModelStatementNode'?: (_zetasql_ASTExportModelStatementProto__Output | null);
  'astCallStatementNode'?: (_zetasql_ASTCallStatementProto__Output | null);
  'astDefineTableStatementNode'?: (_zetasql_ASTDefineTableStatementProto__Output | null);
  'astAnalyzeStatementNode'?: (_zetasql_ASTAnalyzeStatementProto__Output | null);
  'astAssertStatementNode'?: (_zetasql_ASTAssertStatementProto__Output | null);
  'astDeleteStatementNode'?: (_zetasql_ASTDeleteStatementProto__Output | null);
  'astInsertStatementNode'?: (_zetasql_ASTInsertStatementProto__Output | null);
  'astUpdateStatementNode'?: (_zetasql_ASTUpdateStatementProto__Output | null);
  'astTruncateStatementNode'?: (_zetasql_ASTTruncateStatementProto__Output | null);
  'astMergeStatementNode'?: (_zetasql_ASTMergeStatementProto__Output | null);
  'astGrantStatementNode'?: (_zetasql_ASTGrantStatementProto__Output | null);
  'astRevokeStatementNode'?: (_zetasql_ASTRevokeStatementProto__Output | null);
  'astAlterAllRowAccessPoliciesStatementNode'?: (_zetasql_ASTAlterAllRowAccessPoliciesStatementProto__Output | null);
  'astParameterAssignmentNode'?: (_zetasql_ASTParameterAssignmentProto__Output | null);
  'astSystemVariableAssignmentNode'?: (_zetasql_ASTSystemVariableAssignmentProto__Output | null);
  'astExecuteImmediateStatementNode'?: (_zetasql_ASTExecuteImmediateStatementProto__Output | null);
  'astDefineMacroStatementNode'?: (_zetasql_ASTDefineMacroStatementProto__Output | null);
  'node': "astQueryStatementNode"|"astScriptStatementNode"|"astHintedStatementNode"|"astExplainStatementNode"|"astDescribeStatementNode"|"astShowStatementNode"|"astBeginStatementNode"|"astSetTransactionStatementNode"|"astCommitStatementNode"|"astRollbackStatementNode"|"astStartBatchStatementNode"|"astRunBatchStatementNode"|"astAbortBatchStatementNode"|"astDdlStatementNode"|"astDropAllRowAccessPoliciesStatementNode"|"astRenameStatementNode"|"astImportStatementNode"|"astModuleStatementNode"|"astCloneDataStatementNode"|"astCreateDatabaseStatementNode"|"astExportDataStatementNode"|"astExportModelStatementNode"|"astCallStatementNode"|"astDefineTableStatementNode"|"astAnalyzeStatementNode"|"astAssertStatementNode"|"astDeleteStatementNode"|"astInsertStatementNode"|"astUpdateStatementNode"|"astTruncateStatementNode"|"astMergeStatementNode"|"astGrantStatementNode"|"astRevokeStatementNode"|"astAlterAllRowAccessPoliciesStatementNode"|"astParameterAssignmentNode"|"astSystemVariableAssignmentNode"|"astExecuteImmediateStatementNode"|"astDefineMacroStatementNode";
}
