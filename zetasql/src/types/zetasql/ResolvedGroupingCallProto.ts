// Original file: src/zetasql/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedArgumentProto as _zetasql_ResolvedArgumentProto, ResolvedArgumentProto__Output as _zetasql_ResolvedArgumentProto__Output } from '../zetasql/ResolvedArgumentProto';
import type { ResolvedColumnRefProto as _zetasql_ResolvedColumnRefProto, ResolvedColumnRefProto__Output as _zetasql_ResolvedColumnRefProto__Output } from '../zetasql/ResolvedColumnRefProto';
import type { ResolvedColumnProto as _zetasql_ResolvedColumnProto, ResolvedColumnProto__Output as _zetasql_ResolvedColumnProto__Output } from '../zetasql/ResolvedColumnProto';

export interface ResolvedGroupingCallProto {
  'parent'?: (_zetasql_ResolvedArgumentProto | null);
  'groupByColumn'?: (_zetasql_ResolvedColumnRefProto | null);
  'outputColumn'?: (_zetasql_ResolvedColumnProto | null);
}

export interface ResolvedGroupingCallProto__Output {
  'parent': (_zetasql_ResolvedArgumentProto__Output | null);
  'groupByColumn': (_zetasql_ResolvedColumnRefProto__Output | null);
  'outputColumn': (_zetasql_ResolvedColumnProto__Output | null);
}
