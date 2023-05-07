// Original file: src/zetasql/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedAggregateScanBaseProto as _zetasql_ResolvedAggregateScanBaseProto, ResolvedAggregateScanBaseProto__Output as _zetasql_ResolvedAggregateScanBaseProto__Output } from '../zetasql/ResolvedAggregateScanBaseProto';
import type { AnyResolvedExprProto as _zetasql_AnyResolvedExprProto, AnyResolvedExprProto__Output as _zetasql_AnyResolvedExprProto__Output } from '../zetasql/AnyResolvedExprProto';
import type { ResolvedOptionProto as _zetasql_ResolvedOptionProto, ResolvedOptionProto__Output as _zetasql_ResolvedOptionProto__Output } from '../zetasql/ResolvedOptionProto';

export interface ResolvedAnonymizedAggregateScanProto {
  'parent'?: (_zetasql_ResolvedAggregateScanBaseProto | null);
  'kThresholdExpr'?: (_zetasql_AnyResolvedExprProto | null);
  'anonymizationOptionList'?: (_zetasql_ResolvedOptionProto)[];
}

export interface ResolvedAnonymizedAggregateScanProto__Output {
  'parent': (_zetasql_ResolvedAggregateScanBaseProto__Output | null);
  'kThresholdExpr': (_zetasql_AnyResolvedExprProto__Output | null);
  'anonymizationOptionList': (_zetasql_ResolvedOptionProto__Output)[];
}
