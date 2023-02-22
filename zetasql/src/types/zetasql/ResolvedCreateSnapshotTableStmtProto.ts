// Original file: src/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedCreateStatementProto as _zetasql_ResolvedCreateStatementProto, ResolvedCreateStatementProto__Output as _zetasql_ResolvedCreateStatementProto__Output } from '../zetasql/ResolvedCreateStatementProto';
import type { AnyResolvedScanProto as _zetasql_AnyResolvedScanProto, AnyResolvedScanProto__Output as _zetasql_AnyResolvedScanProto__Output } from '../zetasql/AnyResolvedScanProto';
import type { ResolvedOptionProto as _zetasql_ResolvedOptionProto, ResolvedOptionProto__Output as _zetasql_ResolvedOptionProto__Output } from '../zetasql/ResolvedOptionProto';

export interface ResolvedCreateSnapshotTableStmtProto {
  'parent'?: (_zetasql_ResolvedCreateStatementProto | null);
  'cloneFrom'?: (_zetasql_AnyResolvedScanProto | null);
  'optionList'?: (_zetasql_ResolvedOptionProto)[];
}

export interface ResolvedCreateSnapshotTableStmtProto__Output {
  'parent': (_zetasql_ResolvedCreateStatementProto__Output | null);
  'cloneFrom': (_zetasql_AnyResolvedScanProto__Output | null);
  'optionList': (_zetasql_ResolvedOptionProto__Output)[];
}
