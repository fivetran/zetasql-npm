// Original file: src/snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTCreateConstantStatementProto as _zetasql_ASTCreateConstantStatementProto, ASTCreateConstantStatementProto__Output as _zetasql_ASTCreateConstantStatementProto__Output } from '../zetasql/ASTCreateConstantStatementProto';
import type { ASTCreateProcedureStatementProto as _zetasql_ASTCreateProcedureStatementProto, ASTCreateProcedureStatementProto__Output as _zetasql_ASTCreateProcedureStatementProto__Output } from '../zetasql/ASTCreateProcedureStatementProto';
import type { ASTCreateSchemaStatementProto as _zetasql_ASTCreateSchemaStatementProto, ASTCreateSchemaStatementProto__Output as _zetasql_ASTCreateSchemaStatementProto__Output } from '../zetasql/ASTCreateSchemaStatementProto';
import type { ASTCreateModelStatementProto as _zetasql_ASTCreateModelStatementProto, ASTCreateModelStatementProto__Output as _zetasql_ASTCreateModelStatementProto__Output } from '../zetasql/ASTCreateModelStatementProto';
import type { ASTCreateIndexStatementProto as _zetasql_ASTCreateIndexStatementProto, ASTCreateIndexStatementProto__Output as _zetasql_ASTCreateIndexStatementProto__Output } from '../zetasql/ASTCreateIndexStatementProto';
import type { ASTCreateSnapshotTableStatementProto as _zetasql_ASTCreateSnapshotTableStatementProto, ASTCreateSnapshotTableStatementProto__Output as _zetasql_ASTCreateSnapshotTableStatementProto__Output } from '../zetasql/ASTCreateSnapshotTableStatementProto';
import type { ASTCreateEntityStatementProto as _zetasql_ASTCreateEntityStatementProto, ASTCreateEntityStatementProto__Output as _zetasql_ASTCreateEntityStatementProto__Output } from '../zetasql/ASTCreateEntityStatementProto';
import type { ASTCreateRowAccessPolicyStatementProto as _zetasql_ASTCreateRowAccessPolicyStatementProto, ASTCreateRowAccessPolicyStatementProto__Output as _zetasql_ASTCreateRowAccessPolicyStatementProto__Output } from '../zetasql/ASTCreateRowAccessPolicyStatementProto';
import type { AnyASTCreateTableStmtBaseProto as _zetasql_AnyASTCreateTableStmtBaseProto, AnyASTCreateTableStmtBaseProto__Output as _zetasql_AnyASTCreateTableStmtBaseProto__Output } from '../zetasql/AnyASTCreateTableStmtBaseProto';
import type { AnyASTCreateViewStatementBaseProto as _zetasql_AnyASTCreateViewStatementBaseProto, AnyASTCreateViewStatementBaseProto__Output as _zetasql_AnyASTCreateViewStatementBaseProto__Output } from '../zetasql/AnyASTCreateViewStatementBaseProto';
import type { AnyASTCreateFunctionStmtBaseProto as _zetasql_AnyASTCreateFunctionStmtBaseProto, AnyASTCreateFunctionStmtBaseProto__Output as _zetasql_AnyASTCreateFunctionStmtBaseProto__Output } from '../zetasql/AnyASTCreateFunctionStmtBaseProto';
import type { ASTCreatePrivilegeRestrictionStatementProto as _zetasql_ASTCreatePrivilegeRestrictionStatementProto, ASTCreatePrivilegeRestrictionStatementProto__Output as _zetasql_ASTCreatePrivilegeRestrictionStatementProto__Output } from '../zetasql/ASTCreatePrivilegeRestrictionStatementProto';

export interface AnyASTCreateStatementProto {
  'astCreateConstantStatementNode'?: (_zetasql_ASTCreateConstantStatementProto | null);
  'astCreateProcedureStatementNode'?: (_zetasql_ASTCreateProcedureStatementProto | null);
  'astCreateSchemaStatementNode'?: (_zetasql_ASTCreateSchemaStatementProto | null);
  'astCreateModelStatementNode'?: (_zetasql_ASTCreateModelStatementProto | null);
  'astCreateIndexStatementNode'?: (_zetasql_ASTCreateIndexStatementProto | null);
  'astCreateSnapshotTableStatementNode'?: (_zetasql_ASTCreateSnapshotTableStatementProto | null);
  'astCreateEntityStatementNode'?: (_zetasql_ASTCreateEntityStatementProto | null);
  'astCreateRowAccessPolicyStatementNode'?: (_zetasql_ASTCreateRowAccessPolicyStatementProto | null);
  'astCreateTableStmtBaseNode'?: (_zetasql_AnyASTCreateTableStmtBaseProto | null);
  'astCreateViewStatementBaseNode'?: (_zetasql_AnyASTCreateViewStatementBaseProto | null);
  'astCreateFunctionStmtBaseNode'?: (_zetasql_AnyASTCreateFunctionStmtBaseProto | null);
  'astCreatePrivilegeRestrictionStatementNode'?: (_zetasql_ASTCreatePrivilegeRestrictionStatementProto | null);
  'node'?: "astCreateConstantStatementNode"|"astCreateProcedureStatementNode"|"astCreateSchemaStatementNode"|"astCreateModelStatementNode"|"astCreateIndexStatementNode"|"astCreateSnapshotTableStatementNode"|"astCreateEntityStatementNode"|"astCreateRowAccessPolicyStatementNode"|"astCreateTableStmtBaseNode"|"astCreateViewStatementBaseNode"|"astCreateFunctionStmtBaseNode"|"astCreatePrivilegeRestrictionStatementNode";
}

export interface AnyASTCreateStatementProto__Output {
  'astCreateConstantStatementNode'?: (_zetasql_ASTCreateConstantStatementProto__Output | null);
  'astCreateProcedureStatementNode'?: (_zetasql_ASTCreateProcedureStatementProto__Output | null);
  'astCreateSchemaStatementNode'?: (_zetasql_ASTCreateSchemaStatementProto__Output | null);
  'astCreateModelStatementNode'?: (_zetasql_ASTCreateModelStatementProto__Output | null);
  'astCreateIndexStatementNode'?: (_zetasql_ASTCreateIndexStatementProto__Output | null);
  'astCreateSnapshotTableStatementNode'?: (_zetasql_ASTCreateSnapshotTableStatementProto__Output | null);
  'astCreateEntityStatementNode'?: (_zetasql_ASTCreateEntityStatementProto__Output | null);
  'astCreateRowAccessPolicyStatementNode'?: (_zetasql_ASTCreateRowAccessPolicyStatementProto__Output | null);
  'astCreateTableStmtBaseNode'?: (_zetasql_AnyASTCreateTableStmtBaseProto__Output | null);
  'astCreateViewStatementBaseNode'?: (_zetasql_AnyASTCreateViewStatementBaseProto__Output | null);
  'astCreateFunctionStmtBaseNode'?: (_zetasql_AnyASTCreateFunctionStmtBaseProto__Output | null);
  'astCreatePrivilegeRestrictionStatementNode'?: (_zetasql_ASTCreatePrivilegeRestrictionStatementProto__Output | null);
  'node': "astCreateConstantStatementNode"|"astCreateProcedureStatementNode"|"astCreateSchemaStatementNode"|"astCreateModelStatementNode"|"astCreateIndexStatementNode"|"astCreateSnapshotTableStatementNode"|"astCreateEntityStatementNode"|"astCreateRowAccessPolicyStatementNode"|"astCreateTableStmtBaseNode"|"astCreateViewStatementBaseNode"|"astCreateFunctionStmtBaseNode"|"astCreatePrivilegeRestrictionStatementNode";
}
