// Original file: src/zetasql/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedArgumentProto as _zetasql_ResolvedArgumentProto, ResolvedArgumentProto__Output as _zetasql_ResolvedArgumentProto__Output } from '../zetasql/ResolvedArgumentProto';
import type { ResolvedColumnProto as _zetasql_ResolvedColumnProto, ResolvedColumnProto__Output as _zetasql_ResolvedColumnProto__Output } from '../zetasql/ResolvedColumnProto';

export interface ResolvedOutputColumnProto {
  'parent'?: (_zetasql_ResolvedArgumentProto | null);
  'name'?: (string);
  'column'?: (_zetasql_ResolvedColumnProto | null);
}

export interface ResolvedOutputColumnProto__Output {
  'parent': (_zetasql_ResolvedArgumentProto__Output | null);
  'name': (string);
  'column': (_zetasql_ResolvedColumnProto__Output | null);
}
