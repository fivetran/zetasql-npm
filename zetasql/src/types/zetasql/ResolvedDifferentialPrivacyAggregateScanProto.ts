// Original file: src/zetasql/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedAggregateScanBaseProto as _zetasql_ResolvedAggregateScanBaseProto, ResolvedAggregateScanBaseProto__Output as _zetasql_ResolvedAggregateScanBaseProto__Output } from '../zetasql/ResolvedAggregateScanBaseProto';
import type { AnyResolvedExprProto as _zetasql_AnyResolvedExprProto, AnyResolvedExprProto__Output as _zetasql_AnyResolvedExprProto__Output } from '../zetasql/AnyResolvedExprProto';
import type { ResolvedOptionProto as _zetasql_ResolvedOptionProto, ResolvedOptionProto__Output as _zetasql_ResolvedOptionProto__Output } from '../zetasql/ResolvedOptionProto';

export interface ResolvedDifferentialPrivacyAggregateScanProto {
  'parent'?: (_zetasql_ResolvedAggregateScanBaseProto | null);
  'groupSelectionThresholdExpr'?: (_zetasql_AnyResolvedExprProto | null);
  'optionList'?: (_zetasql_ResolvedOptionProto)[];
}

export interface ResolvedDifferentialPrivacyAggregateScanProto__Output {
  'parent': (_zetasql_ResolvedAggregateScanBaseProto__Output | null);
  'groupSelectionThresholdExpr': (_zetasql_AnyResolvedExprProto__Output | null);
  'optionList': (_zetasql_ResolvedOptionProto__Output)[];
}
