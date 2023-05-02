// Original file: src/snowflake/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedAggregateScanProto as _zetasql_ResolvedAggregateScanProto, ResolvedAggregateScanProto__Output as _zetasql_ResolvedAggregateScanProto__Output } from '../zetasql/ResolvedAggregateScanProto';
import type { ResolvedAnonymizedAggregateScanProto as _zetasql_ResolvedAnonymizedAggregateScanProto, ResolvedAnonymizedAggregateScanProto__Output as _zetasql_ResolvedAnonymizedAggregateScanProto__Output } from '../zetasql/ResolvedAnonymizedAggregateScanProto';
import type { ResolvedDifferentialPrivacyAggregateScanProto as _zetasql_ResolvedDifferentialPrivacyAggregateScanProto, ResolvedDifferentialPrivacyAggregateScanProto__Output as _zetasql_ResolvedDifferentialPrivacyAggregateScanProto__Output } from '../zetasql/ResolvedDifferentialPrivacyAggregateScanProto';

export interface AnyResolvedAggregateScanBaseProto {
  'resolvedAggregateScanNode'?: (_zetasql_ResolvedAggregateScanProto | null);
  'resolvedAnonymizedAggregateScanNode'?: (_zetasql_ResolvedAnonymizedAggregateScanProto | null);
  'resolvedDifferentialPrivacyAggregateScanNode'?: (_zetasql_ResolvedDifferentialPrivacyAggregateScanProto | null);
  'node'?: "resolvedAggregateScanNode"|"resolvedAnonymizedAggregateScanNode"|"resolvedDifferentialPrivacyAggregateScanNode";
}

export interface AnyResolvedAggregateScanBaseProto__Output {
  'resolvedAggregateScanNode'?: (_zetasql_ResolvedAggregateScanProto__Output | null);
  'resolvedAnonymizedAggregateScanNode'?: (_zetasql_ResolvedAnonymizedAggregateScanProto__Output | null);
  'resolvedDifferentialPrivacyAggregateScanNode'?: (_zetasql_ResolvedDifferentialPrivacyAggregateScanProto__Output | null);
  'node': "resolvedAggregateScanNode"|"resolvedAnonymizedAggregateScanNode"|"resolvedDifferentialPrivacyAggregateScanNode";
}
