// Original file: src/snowflake/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedGroupingSetBaseProto as _zetasql_ResolvedGroupingSetBaseProto, ResolvedGroupingSetBaseProto__Output as _zetasql_ResolvedGroupingSetBaseProto__Output } from '../zetasql/ResolvedGroupingSetBaseProto';
import type { ResolvedGroupingSetMultiColumnProto as _zetasql_ResolvedGroupingSetMultiColumnProto, ResolvedGroupingSetMultiColumnProto__Output as _zetasql_ResolvedGroupingSetMultiColumnProto__Output } from '../zetasql/ResolvedGroupingSetMultiColumnProto';

export interface ResolvedRollupProto {
  'parent'?: (_zetasql_ResolvedGroupingSetBaseProto | null);
  'rollupColumnList'?: (_zetasql_ResolvedGroupingSetMultiColumnProto)[];
}

export interface ResolvedRollupProto__Output {
  'parent': (_zetasql_ResolvedGroupingSetBaseProto__Output | null);
  'rollupColumnList': (_zetasql_ResolvedGroupingSetMultiColumnProto__Output)[];
}
