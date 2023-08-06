// Original file: src/zetasql/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedGroupingSetBaseProto as _zetasql_ResolvedGroupingSetBaseProto, ResolvedGroupingSetBaseProto__Output as _zetasql_ResolvedGroupingSetBaseProto__Output } from '../zetasql/ResolvedGroupingSetBaseProto';
import type { ResolvedColumnRefProto as _zetasql_ResolvedColumnRefProto, ResolvedColumnRefProto__Output as _zetasql_ResolvedColumnRefProto__Output } from '../zetasql/ResolvedColumnRefProto';

export interface ResolvedGroupingSetProto {
  'parent'?: (_zetasql_ResolvedGroupingSetBaseProto | null);
  'groupByColumnList'?: (_zetasql_ResolvedColumnRefProto)[];
}

export interface ResolvedGroupingSetProto__Output {
  'parent': (_zetasql_ResolvedGroupingSetBaseProto__Output | null);
  'groupByColumnList': (_zetasql_ResolvedColumnRefProto__Output)[];
}
