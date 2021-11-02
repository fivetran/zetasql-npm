// Original file: src/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedCreateFunctionStmtProto as _zetasql_ResolvedCreateFunctionStmtProto, ResolvedCreateFunctionStmtProto__Output as _zetasql_ResolvedCreateFunctionStmtProto__Output } from '../zetasql/ResolvedCreateFunctionStmtProto';
import type { ResolvedCreateTableFunctionStmtProto as _zetasql_ResolvedCreateTableFunctionStmtProto, ResolvedCreateTableFunctionStmtProto__Output as _zetasql_ResolvedCreateTableFunctionStmtProto__Output } from '../zetasql/ResolvedCreateTableFunctionStmtProto';
import type { ResolvedCreateIndexStmtProto as _zetasql_ResolvedCreateIndexStmtProto, ResolvedCreateIndexStmtProto__Output as _zetasql_ResolvedCreateIndexStmtProto__Output } from '../zetasql/ResolvedCreateIndexStmtProto';
import type { ResolvedCreateConstantStmtProto as _zetasql_ResolvedCreateConstantStmtProto, ResolvedCreateConstantStmtProto__Output as _zetasql_ResolvedCreateConstantStmtProto__Output } from '../zetasql/ResolvedCreateConstantStmtProto';
import type { AnyResolvedCreateTableStmtBaseProto as _zetasql_AnyResolvedCreateTableStmtBaseProto, AnyResolvedCreateTableStmtBaseProto__Output as _zetasql_AnyResolvedCreateTableStmtBaseProto__Output } from '../zetasql/AnyResolvedCreateTableStmtBaseProto';
import type { ResolvedCreateModelStmtProto as _zetasql_ResolvedCreateModelStmtProto, ResolvedCreateModelStmtProto__Output as _zetasql_ResolvedCreateModelStmtProto__Output } from '../zetasql/ResolvedCreateModelStmtProto';
import type { AnyResolvedCreateViewBaseProto as _zetasql_AnyResolvedCreateViewBaseProto, AnyResolvedCreateViewBaseProto__Output as _zetasql_AnyResolvedCreateViewBaseProto__Output } from '../zetasql/AnyResolvedCreateViewBaseProto';
import type { ResolvedCreateProcedureStmtProto as _zetasql_ResolvedCreateProcedureStmtProto, ResolvedCreateProcedureStmtProto__Output as _zetasql_ResolvedCreateProcedureStmtProto__Output } from '../zetasql/ResolvedCreateProcedureStmtProto';
import type { ResolvedCreateEntityStmtProto as _zetasql_ResolvedCreateEntityStmtProto, ResolvedCreateEntityStmtProto__Output as _zetasql_ResolvedCreateEntityStmtProto__Output } from '../zetasql/ResolvedCreateEntityStmtProto';
import type { ResolvedCreateSchemaStmtProto as _zetasql_ResolvedCreateSchemaStmtProto, ResolvedCreateSchemaStmtProto__Output as _zetasql_ResolvedCreateSchemaStmtProto__Output } from '../zetasql/ResolvedCreateSchemaStmtProto';
import type { ResolvedCreateSnapshotTableStmtProto as _zetasql_ResolvedCreateSnapshotTableStmtProto, ResolvedCreateSnapshotTableStmtProto__Output as _zetasql_ResolvedCreateSnapshotTableStmtProto__Output } from '../zetasql/ResolvedCreateSnapshotTableStmtProto';

export interface AnyResolvedCreateStatementProto {
  'resolvedCreateFunctionStmtNode'?: (_zetasql_ResolvedCreateFunctionStmtProto | null);
  'resolvedCreateTableFunctionStmtNode'?: (_zetasql_ResolvedCreateTableFunctionStmtProto | null);
  'resolvedCreateIndexStmtNode'?: (_zetasql_ResolvedCreateIndexStmtProto | null);
  'resolvedCreateConstantStmtNode'?: (_zetasql_ResolvedCreateConstantStmtProto | null);
  'resolvedCreateTableStmtBaseNode'?: (_zetasql_AnyResolvedCreateTableStmtBaseProto | null);
  'resolvedCreateModelStmtNode'?: (_zetasql_ResolvedCreateModelStmtProto | null);
  'resolvedCreateViewBaseNode'?: (_zetasql_AnyResolvedCreateViewBaseProto | null);
  'resolvedCreateProcedureStmtNode'?: (_zetasql_ResolvedCreateProcedureStmtProto | null);
  'resolvedCreateEntityStmtNode'?: (_zetasql_ResolvedCreateEntityStmtProto | null);
  'resolvedCreateSchemaStmtNode'?: (_zetasql_ResolvedCreateSchemaStmtProto | null);
  'resolvedCreateSnapshotTableStmtNode'?: (_zetasql_ResolvedCreateSnapshotTableStmtProto | null);
  'node'?: "resolvedCreateFunctionStmtNode"|"resolvedCreateTableFunctionStmtNode"|"resolvedCreateIndexStmtNode"|"resolvedCreateConstantStmtNode"|"resolvedCreateTableStmtBaseNode"|"resolvedCreateModelStmtNode"|"resolvedCreateViewBaseNode"|"resolvedCreateProcedureStmtNode"|"resolvedCreateEntityStmtNode"|"resolvedCreateSchemaStmtNode"|"resolvedCreateSnapshotTableStmtNode";
}

export interface AnyResolvedCreateStatementProto__Output {
  'resolvedCreateFunctionStmtNode'?: (_zetasql_ResolvedCreateFunctionStmtProto__Output | null);
  'resolvedCreateTableFunctionStmtNode'?: (_zetasql_ResolvedCreateTableFunctionStmtProto__Output | null);
  'resolvedCreateIndexStmtNode'?: (_zetasql_ResolvedCreateIndexStmtProto__Output | null);
  'resolvedCreateConstantStmtNode'?: (_zetasql_ResolvedCreateConstantStmtProto__Output | null);
  'resolvedCreateTableStmtBaseNode'?: (_zetasql_AnyResolvedCreateTableStmtBaseProto__Output | null);
  'resolvedCreateModelStmtNode'?: (_zetasql_ResolvedCreateModelStmtProto__Output | null);
  'resolvedCreateViewBaseNode'?: (_zetasql_AnyResolvedCreateViewBaseProto__Output | null);
  'resolvedCreateProcedureStmtNode'?: (_zetasql_ResolvedCreateProcedureStmtProto__Output | null);
  'resolvedCreateEntityStmtNode'?: (_zetasql_ResolvedCreateEntityStmtProto__Output | null);
  'resolvedCreateSchemaStmtNode'?: (_zetasql_ResolvedCreateSchemaStmtProto__Output | null);
  'resolvedCreateSnapshotTableStmtNode'?: (_zetasql_ResolvedCreateSnapshotTableStmtProto__Output | null);
  'node': "resolvedCreateFunctionStmtNode"|"resolvedCreateTableFunctionStmtNode"|"resolvedCreateIndexStmtNode"|"resolvedCreateConstantStmtNode"|"resolvedCreateTableStmtBaseNode"|"resolvedCreateModelStmtNode"|"resolvedCreateViewBaseNode"|"resolvedCreateProcedureStmtNode"|"resolvedCreateEntityStmtNode"|"resolvedCreateSchemaStmtNode"|"resolvedCreateSnapshotTableStmtNode";
}
