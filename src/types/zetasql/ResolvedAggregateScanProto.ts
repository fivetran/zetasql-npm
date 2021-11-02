// Original file: src/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedAggregateScanBaseProto as _zetasql_ResolvedAggregateScanBaseProto, ResolvedAggregateScanBaseProto__Output as _zetasql_ResolvedAggregateScanBaseProto__Output } from '../zetasql/ResolvedAggregateScanBaseProto';
import type { ResolvedGroupingSetProto as _zetasql_ResolvedGroupingSetProto, ResolvedGroupingSetProto__Output as _zetasql_ResolvedGroupingSetProto__Output } from '../zetasql/ResolvedGroupingSetProto';
import type { ResolvedColumnRefProto as _zetasql_ResolvedColumnRefProto, ResolvedColumnRefProto__Output as _zetasql_ResolvedColumnRefProto__Output } from '../zetasql/ResolvedColumnRefProto';

export interface ResolvedAggregateScanProto {
  'parent'?: (_zetasql_ResolvedAggregateScanBaseProto | null);
  'groupingSetList'?: (_zetasql_ResolvedGroupingSetProto)[];
  'rollupColumnList'?: (_zetasql_ResolvedColumnRefProto)[];
}

export interface ResolvedAggregateScanProto__Output {
  'parent': (_zetasql_ResolvedAggregateScanBaseProto__Output | null);
  'groupingSetList': (_zetasql_ResolvedGroupingSetProto__Output)[];
  'rollupColumnList': (_zetasql_ResolvedColumnRefProto__Output)[];
}
