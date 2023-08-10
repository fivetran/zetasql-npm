// Original file: src/snowflake/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedAggregateScanBaseProto as _zetasql_ResolvedAggregateScanBaseProto, ResolvedAggregateScanBaseProto__Output as _zetasql_ResolvedAggregateScanBaseProto__Output } from '../zetasql/ResolvedAggregateScanBaseProto';
import type { ResolvedOptionProto as _zetasql_ResolvedOptionProto, ResolvedOptionProto__Output as _zetasql_ResolvedOptionProto__Output } from '../zetasql/ResolvedOptionProto';

export interface ResolvedAggregationThresholdAggregateScanProto {
  'parent'?: (_zetasql_ResolvedAggregateScanBaseProto | null);
  'optionList'?: (_zetasql_ResolvedOptionProto)[];
}

export interface ResolvedAggregationThresholdAggregateScanProto__Output {
  'parent': (_zetasql_ResolvedAggregateScanBaseProto__Output | null);
  'optionList': (_zetasql_ResolvedOptionProto__Output)[];
}
