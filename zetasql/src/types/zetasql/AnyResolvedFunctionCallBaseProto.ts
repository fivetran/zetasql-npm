// Original file: src/zetasql/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedFunctionCallProto as _zetasql_ResolvedFunctionCallProto, ResolvedFunctionCallProto__Output as _zetasql_ResolvedFunctionCallProto__Output } from '../zetasql/ResolvedFunctionCallProto';
import type { AnyResolvedNonScalarFunctionCallBaseProto as _zetasql_AnyResolvedNonScalarFunctionCallBaseProto, AnyResolvedNonScalarFunctionCallBaseProto__Output as _zetasql_AnyResolvedNonScalarFunctionCallBaseProto__Output } from '../zetasql/AnyResolvedNonScalarFunctionCallBaseProto';

export interface AnyResolvedFunctionCallBaseProto {
  'resolvedFunctionCallNode'?: (_zetasql_ResolvedFunctionCallProto | null);
  'resolvedNonScalarFunctionCallBaseNode'?: (_zetasql_AnyResolvedNonScalarFunctionCallBaseProto | null);
  'node'?: "resolvedFunctionCallNode"|"resolvedNonScalarFunctionCallBaseNode";
}

export interface AnyResolvedFunctionCallBaseProto__Output {
  'resolvedFunctionCallNode'?: (_zetasql_ResolvedFunctionCallProto__Output | null);
  'resolvedNonScalarFunctionCallBaseNode'?: (_zetasql_AnyResolvedNonScalarFunctionCallBaseProto__Output | null);
  'node': "resolvedFunctionCallNode"|"resolvedNonScalarFunctionCallBaseNode";
}
