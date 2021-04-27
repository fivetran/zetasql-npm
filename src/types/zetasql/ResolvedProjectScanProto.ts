// Original file: protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedScanProto as _zetasql_ResolvedScanProto, ResolvedScanProto__Output as _zetasql_ResolvedScanProto__Output } from '../zetasql/ResolvedScanProto';
import type { ResolvedComputedColumnProto as _zetasql_ResolvedComputedColumnProto, ResolvedComputedColumnProto__Output as _zetasql_ResolvedComputedColumnProto__Output } from '../zetasql/ResolvedComputedColumnProto';
import type { AnyResolvedScanProto as _zetasql_AnyResolvedScanProto, AnyResolvedScanProto__Output as _zetasql_AnyResolvedScanProto__Output } from '../zetasql/AnyResolvedScanProto';

export interface ResolvedProjectScanProto {
  'parent'?: (_zetasql_ResolvedScanProto | null);
  'exprList'?: (_zetasql_ResolvedComputedColumnProto)[];
  'inputScan'?: (_zetasql_AnyResolvedScanProto | null);
}

export interface ResolvedProjectScanProto__Output {
  'parent': (_zetasql_ResolvedScanProto__Output | null);
  'exprList': (_zetasql_ResolvedComputedColumnProto__Output)[];
  'inputScan': (_zetasql_AnyResolvedScanProto__Output | null);
}
