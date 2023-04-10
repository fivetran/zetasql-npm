// Original file: src/snowflake/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedCreateTableStmtBaseProto as _zetasql_ResolvedCreateTableStmtBaseProto, ResolvedCreateTableStmtBaseProto__Output as _zetasql_ResolvedCreateTableStmtBaseProto__Output } from '../zetasql/ResolvedCreateTableStmtBaseProto';
import type { AnyResolvedExprProto as _zetasql_AnyResolvedExprProto, AnyResolvedExprProto__Output as _zetasql_AnyResolvedExprProto__Output } from '../zetasql/AnyResolvedExprProto';
import type { AnyResolvedScanProto as _zetasql_AnyResolvedScanProto, AnyResolvedScanProto__Output as _zetasql_AnyResolvedScanProto__Output } from '../zetasql/AnyResolvedScanProto';

export interface ResolvedCreateTableStmtProto {
  'parent'?: (_zetasql_ResolvedCreateTableStmtBaseProto | null);
  'partitionByList'?: (_zetasql_AnyResolvedExprProto)[];
  'clusterByList'?: (_zetasql_AnyResolvedExprProto)[];
  'cloneFrom'?: (_zetasql_AnyResolvedScanProto | null);
  'copyFrom'?: (_zetasql_AnyResolvedScanProto | null);
}

export interface ResolvedCreateTableStmtProto__Output {
  'parent': (_zetasql_ResolvedCreateTableStmtBaseProto__Output | null);
  'partitionByList': (_zetasql_AnyResolvedExprProto__Output)[];
  'clusterByList': (_zetasql_AnyResolvedExprProto__Output)[];
  'cloneFrom': (_zetasql_AnyResolvedScanProto__Output | null);
  'copyFrom': (_zetasql_AnyResolvedScanProto__Output | null);
}
