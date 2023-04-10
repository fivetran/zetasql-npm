// Original file: src/zetasql/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedAggregateFunctionCallProto as _zetasql_ResolvedAggregateFunctionCallProto, ResolvedAggregateFunctionCallProto__Output as _zetasql_ResolvedAggregateFunctionCallProto__Output } from '../zetasql/ResolvedAggregateFunctionCallProto';
import type { ResolvedAnalyticFunctionCallProto as _zetasql_ResolvedAnalyticFunctionCallProto, ResolvedAnalyticFunctionCallProto__Output as _zetasql_ResolvedAnalyticFunctionCallProto__Output } from '../zetasql/ResolvedAnalyticFunctionCallProto';

export interface AnyResolvedNonScalarFunctionCallBaseProto {
  'resolvedAggregateFunctionCallNode'?: (_zetasql_ResolvedAggregateFunctionCallProto | null);
  'resolvedAnalyticFunctionCallNode'?: (_zetasql_ResolvedAnalyticFunctionCallProto | null);
  'node'?: "resolvedAggregateFunctionCallNode"|"resolvedAnalyticFunctionCallNode";
}

export interface AnyResolvedNonScalarFunctionCallBaseProto__Output {
  'resolvedAggregateFunctionCallNode'?: (_zetasql_ResolvedAggregateFunctionCallProto__Output | null);
  'resolvedAnalyticFunctionCallNode'?: (_zetasql_ResolvedAnalyticFunctionCallProto__Output | null);
  'node': "resolvedAggregateFunctionCallNode"|"resolvedAnalyticFunctionCallNode";
}
