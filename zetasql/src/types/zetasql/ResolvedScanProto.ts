// Original file: src/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedNodeProto as _zetasql_ResolvedNodeProto, ResolvedNodeProto__Output as _zetasql_ResolvedNodeProto__Output } from '../zetasql/ResolvedNodeProto';
import type { ResolvedColumnProto as _zetasql_ResolvedColumnProto, ResolvedColumnProto__Output as _zetasql_ResolvedColumnProto__Output } from '../zetasql/ResolvedColumnProto';
import type { ResolvedOptionProto as _zetasql_ResolvedOptionProto, ResolvedOptionProto__Output as _zetasql_ResolvedOptionProto__Output } from '../zetasql/ResolvedOptionProto';

export interface ResolvedScanProto {
  'parent'?: (_zetasql_ResolvedNodeProto | null);
  'columnList'?: (_zetasql_ResolvedColumnProto)[];
  'hintList'?: (_zetasql_ResolvedOptionProto)[];
  'isOrdered'?: (boolean);
}

export interface ResolvedScanProto__Output {
  'parent': (_zetasql_ResolvedNodeProto__Output | null);
  'columnList': (_zetasql_ResolvedColumnProto__Output)[];
  'hintList': (_zetasql_ResolvedOptionProto__Output)[];
  'isOrdered': (boolean);
}
