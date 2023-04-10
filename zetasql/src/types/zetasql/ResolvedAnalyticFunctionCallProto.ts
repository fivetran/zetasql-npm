// Original file: src/zetasql/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedNonScalarFunctionCallBaseProto as _zetasql_ResolvedNonScalarFunctionCallBaseProto, ResolvedNonScalarFunctionCallBaseProto__Output as _zetasql_ResolvedNonScalarFunctionCallBaseProto__Output } from '../zetasql/ResolvedNonScalarFunctionCallBaseProto';
import type { ResolvedWindowFrameProto as _zetasql_ResolvedWindowFrameProto, ResolvedWindowFrameProto__Output as _zetasql_ResolvedWindowFrameProto__Output } from '../zetasql/ResolvedWindowFrameProto';

export interface ResolvedAnalyticFunctionCallProto {
  'parent'?: (_zetasql_ResolvedNonScalarFunctionCallBaseProto | null);
  'windowFrame'?: (_zetasql_ResolvedWindowFrameProto | null);
}

export interface ResolvedAnalyticFunctionCallProto__Output {
  'parent': (_zetasql_ResolvedNonScalarFunctionCallBaseProto__Output | null);
  'windowFrame': (_zetasql_ResolvedWindowFrameProto__Output | null);
}
