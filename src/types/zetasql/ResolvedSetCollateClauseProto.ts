// Original file: protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedAlterActionProto as _zetasql_ResolvedAlterActionProto, ResolvedAlterActionProto__Output as _zetasql_ResolvedAlterActionProto__Output } from '../zetasql/ResolvedAlterActionProto';
import type { AnyResolvedExprProto as _zetasql_AnyResolvedExprProto, AnyResolvedExprProto__Output as _zetasql_AnyResolvedExprProto__Output } from '../zetasql/AnyResolvedExprProto';

export interface ResolvedSetCollateClauseProto {
  'parent'?: (_zetasql_ResolvedAlterActionProto | null);
  'collationName'?: (_zetasql_AnyResolvedExprProto | null);
}

export interface ResolvedSetCollateClauseProto__Output {
  'parent': (_zetasql_ResolvedAlterActionProto__Output | null);
  'collationName': (_zetasql_AnyResolvedExprProto__Output | null);
}
