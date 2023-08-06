// Original file: src/zetasql/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedCreateViewBaseProto as _zetasql_ResolvedCreateViewBaseProto, ResolvedCreateViewBaseProto__Output as _zetasql_ResolvedCreateViewBaseProto__Output } from '../zetasql/ResolvedCreateViewBaseProto';
import type { AnyResolvedExprProto as _zetasql_AnyResolvedExprProto, AnyResolvedExprProto__Output as _zetasql_AnyResolvedExprProto__Output } from '../zetasql/AnyResolvedExprProto';
import type { AnyResolvedScanProto as _zetasql_AnyResolvedScanProto, AnyResolvedScanProto__Output as _zetasql_AnyResolvedScanProto__Output } from '../zetasql/AnyResolvedScanProto';

export interface ResolvedCreateMaterializedViewStmtProto {
  'parent'?: (_zetasql_ResolvedCreateViewBaseProto | null);
  'partitionByList'?: (_zetasql_AnyResolvedExprProto)[];
  'clusterByList'?: (_zetasql_AnyResolvedExprProto)[];
  'replicaSource'?: (_zetasql_AnyResolvedScanProto | null);
}

export interface ResolvedCreateMaterializedViewStmtProto__Output {
  'parent': (_zetasql_ResolvedCreateViewBaseProto__Output | null);
  'partitionByList': (_zetasql_AnyResolvedExprProto__Output)[];
  'clusterByList': (_zetasql_AnyResolvedExprProto__Output)[];
  'replicaSource': (_zetasql_AnyResolvedScanProto__Output | null);
}
