// Original file: src/snowflake/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedNonScalarFunctionCallBaseProto as _zetasql_ResolvedNonScalarFunctionCallBaseProto, ResolvedNonScalarFunctionCallBaseProto__Output as _zetasql_ResolvedNonScalarFunctionCallBaseProto__Output } from '../zetasql/ResolvedNonScalarFunctionCallBaseProto';
import type { ResolvedOrderByItemProto as _zetasql_ResolvedOrderByItemProto, ResolvedOrderByItemProto__Output as _zetasql_ResolvedOrderByItemProto__Output } from '../zetasql/ResolvedOrderByItemProto';
import type { AnyResolvedExprProto as _zetasql_AnyResolvedExprProto, AnyResolvedExprProto__Output as _zetasql_AnyResolvedExprProto__Output } from '../zetasql/AnyResolvedExprProto';
import type { ResolvedAggregateHavingModifierProto as _zetasql_ResolvedAggregateHavingModifierProto, ResolvedAggregateHavingModifierProto__Output as _zetasql_ResolvedAggregateHavingModifierProto__Output } from '../zetasql/ResolvedAggregateHavingModifierProto';
import type { ResolvedFunctionCallInfoProto as _zetasql_ResolvedFunctionCallInfoProto, ResolvedFunctionCallInfoProto__Output as _zetasql_ResolvedFunctionCallInfoProto__Output } from '../zetasql/ResolvedFunctionCallInfoProto';

export interface ResolvedAggregateFunctionCallProto {
  'parent'?: (_zetasql_ResolvedNonScalarFunctionCallBaseProto | null);
  'orderByItemList'?: (_zetasql_ResolvedOrderByItemProto)[];
  'limit'?: (_zetasql_AnyResolvedExprProto | null);
  'havingModifier'?: (_zetasql_ResolvedAggregateHavingModifierProto | null);
  'functionCallInfo'?: (_zetasql_ResolvedFunctionCallInfoProto | null);
}

export interface ResolvedAggregateFunctionCallProto__Output {
  'parent': (_zetasql_ResolvedNonScalarFunctionCallBaseProto__Output | null);
  'orderByItemList': (_zetasql_ResolvedOrderByItemProto__Output)[];
  'limit': (_zetasql_AnyResolvedExprProto__Output | null);
  'havingModifier': (_zetasql_ResolvedAggregateHavingModifierProto__Output | null);
  'functionCallInfo': (_zetasql_ResolvedFunctionCallInfoProto__Output | null);
}
