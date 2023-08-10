// Original file: src/snowflake/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedScanProto as _zetasql_ResolvedScanProto, ResolvedScanProto__Output as _zetasql_ResolvedScanProto__Output } from '../zetasql/ResolvedScanProto';
import type { AnyResolvedScanProto as _zetasql_AnyResolvedScanProto, AnyResolvedScanProto__Output as _zetasql_AnyResolvedScanProto__Output } from '../zetasql/AnyResolvedScanProto';
import type { ResolvedComputedColumnProto as _zetasql_ResolvedComputedColumnProto, ResolvedComputedColumnProto__Output as _zetasql_ResolvedComputedColumnProto__Output } from '../zetasql/ResolvedComputedColumnProto';
import type { ResolvedCollationProto as _zetasql_ResolvedCollationProto, ResolvedCollationProto__Output as _zetasql_ResolvedCollationProto__Output } from '../zetasql/ResolvedCollationProto';
import type { AnyResolvedGroupingSetBaseProto as _zetasql_AnyResolvedGroupingSetBaseProto, AnyResolvedGroupingSetBaseProto__Output as _zetasql_AnyResolvedGroupingSetBaseProto__Output } from '../zetasql/AnyResolvedGroupingSetBaseProto';
import type { ResolvedColumnRefProto as _zetasql_ResolvedColumnRefProto, ResolvedColumnRefProto__Output as _zetasql_ResolvedColumnRefProto__Output } from '../zetasql/ResolvedColumnRefProto';
import type { ResolvedGroupingCallProto as _zetasql_ResolvedGroupingCallProto, ResolvedGroupingCallProto__Output as _zetasql_ResolvedGroupingCallProto__Output } from '../zetasql/ResolvedGroupingCallProto';

export interface ResolvedAggregateScanBaseProto {
  'parent'?: (_zetasql_ResolvedScanProto | null);
  'inputScan'?: (_zetasql_AnyResolvedScanProto | null);
  'groupByList'?: (_zetasql_ResolvedComputedColumnProto)[];
  'aggregateList'?: (_zetasql_ResolvedComputedColumnProto)[];
  'collationList'?: (_zetasql_ResolvedCollationProto)[];
  'groupingSetList'?: (_zetasql_AnyResolvedGroupingSetBaseProto)[];
  'rollupColumnList'?: (_zetasql_ResolvedColumnRefProto)[];
  'groupingCallList'?: (_zetasql_ResolvedGroupingCallProto)[];
}

export interface ResolvedAggregateScanBaseProto__Output {
  'parent': (_zetasql_ResolvedScanProto__Output | null);
  'inputScan': (_zetasql_AnyResolvedScanProto__Output | null);
  'groupByList': (_zetasql_ResolvedComputedColumnProto__Output)[];
  'aggregateList': (_zetasql_ResolvedComputedColumnProto__Output)[];
  'collationList': (_zetasql_ResolvedCollationProto__Output)[];
  'groupingSetList': (_zetasql_AnyResolvedGroupingSetBaseProto__Output)[];
  'rollupColumnList': (_zetasql_ResolvedColumnRefProto__Output)[];
  'groupingCallList': (_zetasql_ResolvedGroupingCallProto__Output)[];
}
