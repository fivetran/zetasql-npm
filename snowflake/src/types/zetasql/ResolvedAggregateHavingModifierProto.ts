// Original file: src/snowflake/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedArgumentProto as _zetasql_ResolvedArgumentProto, ResolvedArgumentProto__Output as _zetasql_ResolvedArgumentProto__Output } from '../zetasql/ResolvedArgumentProto';
import type { _zetasql_ResolvedAggregateHavingModifierEnums_HavingModifierKind, _zetasql_ResolvedAggregateHavingModifierEnums_HavingModifierKind__Output } from '../zetasql/ResolvedAggregateHavingModifierEnums';
import type { AnyResolvedExprProto as _zetasql_AnyResolvedExprProto, AnyResolvedExprProto__Output as _zetasql_AnyResolvedExprProto__Output } from '../zetasql/AnyResolvedExprProto';

export interface ResolvedAggregateHavingModifierProto {
  'parent'?: (_zetasql_ResolvedArgumentProto | null);
  'kind'?: (_zetasql_ResolvedAggregateHavingModifierEnums_HavingModifierKind);
  'havingExpr'?: (_zetasql_AnyResolvedExprProto | null);
}

export interface ResolvedAggregateHavingModifierProto__Output {
  'parent': (_zetasql_ResolvedArgumentProto__Output | null);
  'kind': (_zetasql_ResolvedAggregateHavingModifierEnums_HavingModifierKind__Output);
  'havingExpr': (_zetasql_AnyResolvedExprProto__Output | null);
}
