// Original file: src/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedAggregateScanBaseProto as _zetasql_ResolvedAggregateScanBaseProto, ResolvedAggregateScanBaseProto__Output as _zetasql_ResolvedAggregateScanBaseProto__Output } from '../zetasql/ResolvedAggregateScanBaseProto';
import type { ResolvedColumnRefProto as _zetasql_ResolvedColumnRefProto, ResolvedColumnRefProto__Output as _zetasql_ResolvedColumnRefProto__Output } from '../zetasql/ResolvedColumnRefProto';
import type { ResolvedOptionProto as _zetasql_ResolvedOptionProto, ResolvedOptionProto__Output as _zetasql_ResolvedOptionProto__Output } from '../zetasql/ResolvedOptionProto';

export interface ResolvedAnonymizedAggregateScanProto {
  'parent'?: (_zetasql_ResolvedAggregateScanBaseProto | null);
  'kThresholdExpr'?: (_zetasql_ResolvedColumnRefProto | null);
  'anonymizationOptionList'?: (_zetasql_ResolvedOptionProto)[];
}

export interface ResolvedAnonymizedAggregateScanProto__Output {
  'parent': (_zetasql_ResolvedAggregateScanBaseProto__Output | null);
  'kThresholdExpr': (_zetasql_ResolvedColumnRefProto__Output | null);
  'anonymizationOptionList': (_zetasql_ResolvedOptionProto__Output)[];
}
