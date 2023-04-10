// Original file: src/zetasql/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedArgumentProto as _zetasql_ResolvedArgumentProto, ResolvedArgumentProto__Output as _zetasql_ResolvedArgumentProto__Output } from '../zetasql/ResolvedArgumentProto';
import type { ResolvedColumnRefProto as _zetasql_ResolvedColumnRefProto, ResolvedColumnRefProto__Output as _zetasql_ResolvedColumnRefProto__Output } from '../zetasql/ResolvedColumnRefProto';

export interface ResolvedIndexItemProto {
  'parent'?: (_zetasql_ResolvedArgumentProto | null);
  'columnRef'?: (_zetasql_ResolvedColumnRefProto | null);
  'descending'?: (boolean);
}

export interface ResolvedIndexItemProto__Output {
  'parent': (_zetasql_ResolvedArgumentProto__Output | null);
  'columnRef': (_zetasql_ResolvedColumnRefProto__Output | null);
  'descending': (boolean);
}
