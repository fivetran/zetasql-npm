// Original file: protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedScanProto as _zetasql_ResolvedScanProto, ResolvedScanProto__Output as _zetasql_ResolvedScanProto__Output } from '../zetasql/ResolvedScanProto';
import type { AnyResolvedScanProto as _zetasql_AnyResolvedScanProto, AnyResolvedScanProto__Output as _zetasql_AnyResolvedScanProto__Output } from '../zetasql/AnyResolvedScanProto';
import type { ResolvedColumnProto as _zetasql_ResolvedColumnProto, ResolvedColumnProto__Output as _zetasql_ResolvedColumnProto__Output } from '../zetasql/ResolvedColumnProto';
import type { ResolvedLiteralProto as _zetasql_ResolvedLiteralProto, ResolvedLiteralProto__Output as _zetasql_ResolvedLiteralProto__Output } from '../zetasql/ResolvedLiteralProto';
import type { ResolvedUnpivotArgProto as _zetasql_ResolvedUnpivotArgProto, ResolvedUnpivotArgProto__Output as _zetasql_ResolvedUnpivotArgProto__Output } from '../zetasql/ResolvedUnpivotArgProto';

export interface ResolvedUnpivotScanProto {
  'parent'?: (_zetasql_ResolvedScanProto | null);
  'inputScan'?: (_zetasql_AnyResolvedScanProto | null);
  'valueColumnList'?: (_zetasql_ResolvedColumnProto)[];
  'labelColumn'?: (_zetasql_ResolvedColumnProto | null);
  'labelList'?: (_zetasql_ResolvedLiteralProto)[];
  'unpivotArgList'?: (_zetasql_ResolvedUnpivotArgProto)[];
  'includeNulls'?: (boolean);
}

export interface ResolvedUnpivotScanProto__Output {
  'parent': (_zetasql_ResolvedScanProto__Output | null);
  'inputScan': (_zetasql_AnyResolvedScanProto__Output | null);
  'valueColumnList': (_zetasql_ResolvedColumnProto__Output)[];
  'labelColumn': (_zetasql_ResolvedColumnProto__Output | null);
  'labelList': (_zetasql_ResolvedLiteralProto__Output)[];
  'unpivotArgList': (_zetasql_ResolvedUnpivotArgProto__Output)[];
  'includeNulls': (boolean);
}
