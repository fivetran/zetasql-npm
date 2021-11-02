// Original file: src/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedArgumentProto as _zetasql_ResolvedArgumentProto, ResolvedArgumentProto__Output as _zetasql_ResolvedArgumentProto__Output } from '../zetasql/ResolvedArgumentProto';
import type { ResolvedOutputColumnProto as _zetasql_ResolvedOutputColumnProto, ResolvedOutputColumnProto__Output as _zetasql_ResolvedOutputColumnProto__Output } from '../zetasql/ResolvedOutputColumnProto';
import type { ResolvedColumnHolderProto as _zetasql_ResolvedColumnHolderProto, ResolvedColumnHolderProto__Output as _zetasql_ResolvedColumnHolderProto__Output } from '../zetasql/ResolvedColumnHolderProto';
import type { ResolvedComputedColumnProto as _zetasql_ResolvedComputedColumnProto, ResolvedComputedColumnProto__Output as _zetasql_ResolvedComputedColumnProto__Output } from '../zetasql/ResolvedComputedColumnProto';

export interface ResolvedReturningClauseProto {
  'parent'?: (_zetasql_ResolvedArgumentProto | null);
  'outputColumnList'?: (_zetasql_ResolvedOutputColumnProto)[];
  'actionColumn'?: (_zetasql_ResolvedColumnHolderProto | null);
  'exprList'?: (_zetasql_ResolvedComputedColumnProto)[];
}

export interface ResolvedReturningClauseProto__Output {
  'parent': (_zetasql_ResolvedArgumentProto__Output | null);
  'outputColumnList': (_zetasql_ResolvedOutputColumnProto__Output)[];
  'actionColumn': (_zetasql_ResolvedColumnHolderProto__Output | null);
  'exprList': (_zetasql_ResolvedComputedColumnProto__Output)[];
}
