// Original file: src/zetasql/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedArgumentProto as _zetasql_ResolvedArgumentProto, ResolvedArgumentProto__Output as _zetasql_ResolvedArgumentProto__Output } from '../zetasql/ResolvedArgumentProto';
import type { ResolvedColumnRefProto as _zetasql_ResolvedColumnRefProto, ResolvedColumnRefProto__Output as _zetasql_ResolvedColumnRefProto__Output } from '../zetasql/ResolvedColumnRefProto';

export interface ResolvedGroupingSetMultiColumnProto {
  'parent'?: (_zetasql_ResolvedArgumentProto | null);
  'columnList'?: (_zetasql_ResolvedColumnRefProto)[];
}

export interface ResolvedGroupingSetMultiColumnProto__Output {
  'parent': (_zetasql_ResolvedArgumentProto__Output | null);
  'columnList': (_zetasql_ResolvedColumnRefProto__Output)[];
}
