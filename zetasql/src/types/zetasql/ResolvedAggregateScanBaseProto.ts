// Original file: src/zetasql/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedScanProto as _zetasql_ResolvedScanProto, ResolvedScanProto__Output as _zetasql_ResolvedScanProto__Output } from '../zetasql/ResolvedScanProto';
import type { AnyResolvedScanProto as _zetasql_AnyResolvedScanProto, AnyResolvedScanProto__Output as _zetasql_AnyResolvedScanProto__Output } from '../zetasql/AnyResolvedScanProto';
import type { ResolvedComputedColumnProto as _zetasql_ResolvedComputedColumnProto, ResolvedComputedColumnProto__Output as _zetasql_ResolvedComputedColumnProto__Output } from '../zetasql/ResolvedComputedColumnProto';
import type { ResolvedCollationProto as _zetasql_ResolvedCollationProto, ResolvedCollationProto__Output as _zetasql_ResolvedCollationProto__Output } from '../zetasql/ResolvedCollationProto';

export interface ResolvedAggregateScanBaseProto {
  'parent'?: (_zetasql_ResolvedScanProto | null);
  'inputScan'?: (_zetasql_AnyResolvedScanProto | null);
  'groupByList'?: (_zetasql_ResolvedComputedColumnProto)[];
  'aggregateList'?: (_zetasql_ResolvedComputedColumnProto)[];
  'collationList'?: (_zetasql_ResolvedCollationProto)[];
}

export interface ResolvedAggregateScanBaseProto__Output {
  'parent': (_zetasql_ResolvedScanProto__Output | null);
  'inputScan': (_zetasql_AnyResolvedScanProto__Output | null);
  'groupByList': (_zetasql_ResolvedComputedColumnProto__Output)[];
  'aggregateList': (_zetasql_ResolvedComputedColumnProto__Output)[];
  'collationList': (_zetasql_ResolvedCollationProto__Output)[];
}
