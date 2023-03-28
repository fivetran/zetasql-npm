// Original file: src/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedScanProto as _zetasql_ResolvedScanProto, ResolvedScanProto__Output as _zetasql_ResolvedScanProto__Output } from '../zetasql/ResolvedScanProto';
import type { _zetasql_ResolvedJoinScanEnums_JoinType, _zetasql_ResolvedJoinScanEnums_JoinType__Output } from '../zetasql/ResolvedJoinScanEnums';
import type { AnyResolvedScanProto as _zetasql_AnyResolvedScanProto, AnyResolvedScanProto__Output as _zetasql_AnyResolvedScanProto__Output } from '../zetasql/AnyResolvedScanProto';
import type { AnyResolvedExprProto as _zetasql_AnyResolvedExprProto, AnyResolvedExprProto__Output as _zetasql_AnyResolvedExprProto__Output } from '../zetasql/AnyResolvedExprProto';

export interface ResolvedJoinScanProto {
  'parent'?: (_zetasql_ResolvedScanProto | null);
  'joinType'?: (_zetasql_ResolvedJoinScanEnums_JoinType);
  'leftScan'?: (_zetasql_AnyResolvedScanProto | null);
  'rightScan'?: (_zetasql_AnyResolvedScanProto | null);
  'joinExpr'?: (_zetasql_AnyResolvedExprProto | null);
}

export interface ResolvedJoinScanProto__Output {
  'parent': (_zetasql_ResolvedScanProto__Output | null);
  'joinType': (_zetasql_ResolvedJoinScanEnums_JoinType__Output);
  'leftScan': (_zetasql_AnyResolvedScanProto__Output | null);
  'rightScan': (_zetasql_AnyResolvedScanProto__Output | null);
  'joinExpr': (_zetasql_AnyResolvedExprProto__Output | null);
}
