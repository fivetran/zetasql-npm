// Original file: protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedExprProto as _zetasql_ResolvedExprProto, ResolvedExprProto__Output as _zetasql_ResolvedExprProto__Output } from '../zetasql/ResolvedExprProto';
import type { _zetasql_ResolvedArgumentDefEnums_ArgumentKind } from '../zetasql/ResolvedArgumentDefEnums';

export interface ResolvedArgumentRefProto {
  'parent'?: (_zetasql_ResolvedExprProto | null);
  'name'?: (string);
  'argumentKind'?: (_zetasql_ResolvedArgumentDefEnums_ArgumentKind | keyof typeof _zetasql_ResolvedArgumentDefEnums_ArgumentKind);
}

export interface ResolvedArgumentRefProto__Output {
  'parent': (_zetasql_ResolvedExprProto__Output | null);
  'name': (string);
  'argumentKind': (_zetasql_ResolvedArgumentDefEnums_ArgumentKind);
}
