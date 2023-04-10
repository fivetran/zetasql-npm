// Original file: src/snowflake/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedScanProto as _zetasql_ResolvedScanProto, ResolvedScanProto__Output as _zetasql_ResolvedScanProto__Output } from '../zetasql/ResolvedScanProto';
import type { AnyResolvedScanProto as _zetasql_AnyResolvedScanProto, AnyResolvedScanProto__Output as _zetasql_AnyResolvedScanProto__Output } from '../zetasql/AnyResolvedScanProto';
import type { ResolvedComputedColumnProto as _zetasql_ResolvedComputedColumnProto, ResolvedComputedColumnProto__Output as _zetasql_ResolvedComputedColumnProto__Output } from '../zetasql/ResolvedComputedColumnProto';
import type { AnyResolvedExprProto as _zetasql_AnyResolvedExprProto, AnyResolvedExprProto__Output as _zetasql_AnyResolvedExprProto__Output } from '../zetasql/AnyResolvedExprProto';
import type { ResolvedPivotColumnProto as _zetasql_ResolvedPivotColumnProto, ResolvedPivotColumnProto__Output as _zetasql_ResolvedPivotColumnProto__Output } from '../zetasql/ResolvedPivotColumnProto';

export interface ResolvedPivotScanProto {
  'parent'?: (_zetasql_ResolvedScanProto | null);
  'inputScan'?: (_zetasql_AnyResolvedScanProto | null);
  'groupByList'?: (_zetasql_ResolvedComputedColumnProto)[];
  'pivotExprList'?: (_zetasql_AnyResolvedExprProto)[];
  'forExpr'?: (_zetasql_AnyResolvedExprProto | null);
  'pivotValueList'?: (_zetasql_AnyResolvedExprProto)[];
  'pivotColumnList'?: (_zetasql_ResolvedPivotColumnProto)[];
}

export interface ResolvedPivotScanProto__Output {
  'parent': (_zetasql_ResolvedScanProto__Output | null);
  'inputScan': (_zetasql_AnyResolvedScanProto__Output | null);
  'groupByList': (_zetasql_ResolvedComputedColumnProto__Output)[];
  'pivotExprList': (_zetasql_AnyResolvedExprProto__Output)[];
  'forExpr': (_zetasql_AnyResolvedExprProto__Output | null);
  'pivotValueList': (_zetasql_AnyResolvedExprProto__Output)[];
  'pivotColumnList': (_zetasql_ResolvedPivotColumnProto__Output)[];
}
