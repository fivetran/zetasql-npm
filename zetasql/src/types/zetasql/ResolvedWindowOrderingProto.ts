// Original file: src/zetasql/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedArgumentProto as _zetasql_ResolvedArgumentProto, ResolvedArgumentProto__Output as _zetasql_ResolvedArgumentProto__Output } from '../zetasql/ResolvedArgumentProto';
import type { ResolvedOrderByItemProto as _zetasql_ResolvedOrderByItemProto, ResolvedOrderByItemProto__Output as _zetasql_ResolvedOrderByItemProto__Output } from '../zetasql/ResolvedOrderByItemProto';
import type { ResolvedOptionProto as _zetasql_ResolvedOptionProto, ResolvedOptionProto__Output as _zetasql_ResolvedOptionProto__Output } from '../zetasql/ResolvedOptionProto';

export interface ResolvedWindowOrderingProto {
  'parent'?: (_zetasql_ResolvedArgumentProto | null);
  'orderByItemList'?: (_zetasql_ResolvedOrderByItemProto)[];
  'hintList'?: (_zetasql_ResolvedOptionProto)[];
}

export interface ResolvedWindowOrderingProto__Output {
  'parent': (_zetasql_ResolvedArgumentProto__Output | null);
  'orderByItemList': (_zetasql_ResolvedOrderByItemProto__Output)[];
  'hintList': (_zetasql_ResolvedOptionProto__Output)[];
}
