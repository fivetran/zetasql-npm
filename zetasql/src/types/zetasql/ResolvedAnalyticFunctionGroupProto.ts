// Original file: src/zetasql/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedArgumentProto as _zetasql_ResolvedArgumentProto, ResolvedArgumentProto__Output as _zetasql_ResolvedArgumentProto__Output } from '../zetasql/ResolvedArgumentProto';
import type { ResolvedWindowPartitioningProto as _zetasql_ResolvedWindowPartitioningProto, ResolvedWindowPartitioningProto__Output as _zetasql_ResolvedWindowPartitioningProto__Output } from '../zetasql/ResolvedWindowPartitioningProto';
import type { ResolvedWindowOrderingProto as _zetasql_ResolvedWindowOrderingProto, ResolvedWindowOrderingProto__Output as _zetasql_ResolvedWindowOrderingProto__Output } from '../zetasql/ResolvedWindowOrderingProto';
import type { ResolvedComputedColumnProto as _zetasql_ResolvedComputedColumnProto, ResolvedComputedColumnProto__Output as _zetasql_ResolvedComputedColumnProto__Output } from '../zetasql/ResolvedComputedColumnProto';

export interface ResolvedAnalyticFunctionGroupProto {
  'parent'?: (_zetasql_ResolvedArgumentProto | null);
  'partitionBy'?: (_zetasql_ResolvedWindowPartitioningProto | null);
  'orderBy'?: (_zetasql_ResolvedWindowOrderingProto | null);
  'analyticFunctionList'?: (_zetasql_ResolvedComputedColumnProto)[];
}

export interface ResolvedAnalyticFunctionGroupProto__Output {
  'parent': (_zetasql_ResolvedArgumentProto__Output | null);
  'partitionBy': (_zetasql_ResolvedWindowPartitioningProto__Output | null);
  'orderBy': (_zetasql_ResolvedWindowOrderingProto__Output | null);
  'analyticFunctionList': (_zetasql_ResolvedComputedColumnProto__Output)[];
}
