// Original file: protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedExprProto as _zetasql_ResolvedExprProto, ResolvedExprProto__Output as _zetasql_ResolvedExprProto__Output } from '../zetasql/ResolvedExprProto';
import type { ConstantRefProto as _zetasql_ConstantRefProto, ConstantRefProto__Output as _zetasql_ConstantRefProto__Output } from '../zetasql/ConstantRefProto';

export interface ResolvedConstantProto {
  'parent'?: (_zetasql_ResolvedExprProto | null);
  'constant'?: (_zetasql_ConstantRefProto | null);
}

export interface ResolvedConstantProto__Output {
  'parent': (_zetasql_ResolvedExprProto__Output | null);
  'constant': (_zetasql_ConstantRefProto__Output | null);
}
