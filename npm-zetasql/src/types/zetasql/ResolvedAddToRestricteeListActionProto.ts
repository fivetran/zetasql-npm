// Original file: src/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedAlterActionProto as _zetasql_ResolvedAlterActionProto, ResolvedAlterActionProto__Output as _zetasql_ResolvedAlterActionProto__Output } from '../zetasql/ResolvedAlterActionProto';
import type { AnyResolvedExprProto as _zetasql_AnyResolvedExprProto, AnyResolvedExprProto__Output as _zetasql_AnyResolvedExprProto__Output } from '../zetasql/AnyResolvedExprProto';

export interface ResolvedAddToRestricteeListActionProto {
  'parent'?: (_zetasql_ResolvedAlterActionProto | null);
  'isIfNotExists'?: (boolean);
  'restricteeList'?: (_zetasql_AnyResolvedExprProto)[];
}

export interface ResolvedAddToRestricteeListActionProto__Output {
  'parent': (_zetasql_ResolvedAlterActionProto__Output | null);
  'isIfNotExists': (boolean);
  'restricteeList': (_zetasql_AnyResolvedExprProto__Output)[];
}
