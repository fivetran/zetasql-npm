// Original file: protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedFunctionCallBaseProto as _zetasql_ResolvedFunctionCallBaseProto, ResolvedFunctionCallBaseProto__Output as _zetasql_ResolvedFunctionCallBaseProto__Output } from '../zetasql/ResolvedFunctionCallBaseProto';
import type { _zetasql_ResolvedNonScalarFunctionCallBaseEnums_NullHandlingModifier } from '../zetasql/ResolvedNonScalarFunctionCallBaseEnums';
import type { AnyResolvedScanProto as _zetasql_AnyResolvedScanProto, AnyResolvedScanProto__Output as _zetasql_AnyResolvedScanProto__Output } from '../zetasql/AnyResolvedScanProto';
import type { ResolvedColumnRefProto as _zetasql_ResolvedColumnRefProto, ResolvedColumnRefProto__Output as _zetasql_ResolvedColumnRefProto__Output } from '../zetasql/ResolvedColumnRefProto';

export interface ResolvedNonScalarFunctionCallBaseProto {
  'parent'?: (_zetasql_ResolvedFunctionCallBaseProto | null);
  'distinct'?: (boolean);
  'nullHandlingModifier'?: (_zetasql_ResolvedNonScalarFunctionCallBaseEnums_NullHandlingModifier | keyof typeof _zetasql_ResolvedNonScalarFunctionCallBaseEnums_NullHandlingModifier);
  'withGroupRowsSubquery'?: (_zetasql_AnyResolvedScanProto | null);
  'withGroupRowsParameterList'?: (_zetasql_ResolvedColumnRefProto)[];
}

export interface ResolvedNonScalarFunctionCallBaseProto__Output {
  'parent': (_zetasql_ResolvedFunctionCallBaseProto__Output | null);
  'distinct': (boolean);
  'nullHandlingModifier': (keyof typeof _zetasql_ResolvedNonScalarFunctionCallBaseEnums_NullHandlingModifier);
  'withGroupRowsSubquery': (_zetasql_AnyResolvedScanProto__Output | null);
  'withGroupRowsParameterList': (_zetasql_ResolvedColumnRefProto__Output)[];
}
