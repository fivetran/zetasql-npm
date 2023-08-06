// Original file: src/zetasql/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedGroupingSetBaseProto as _zetasql_ResolvedGroupingSetBaseProto, ResolvedGroupingSetBaseProto__Output as _zetasql_ResolvedGroupingSetBaseProto__Output } from '../zetasql/ResolvedGroupingSetBaseProto';
import type { ResolvedGroupingSetMultiColumnProto as _zetasql_ResolvedGroupingSetMultiColumnProto, ResolvedGroupingSetMultiColumnProto__Output as _zetasql_ResolvedGroupingSetMultiColumnProto__Output } from '../zetasql/ResolvedGroupingSetMultiColumnProto';

export interface ResolvedCubeProto {
  'parent'?: (_zetasql_ResolvedGroupingSetBaseProto | null);
  'cubeColumnList'?: (_zetasql_ResolvedGroupingSetMultiColumnProto)[];
}

export interface ResolvedCubeProto__Output {
  'parent': (_zetasql_ResolvedGroupingSetBaseProto__Output | null);
  'cubeColumnList': (_zetasql_ResolvedGroupingSetMultiColumnProto__Output)[];
}
