// Original file: src/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedScanProto as _zetasql_ResolvedScanProto, ResolvedScanProto__Output as _zetasql_ResolvedScanProto__Output } from '../zetasql/ResolvedScanProto';
import type { ResolvedComputedColumnProto as _zetasql_ResolvedComputedColumnProto, ResolvedComputedColumnProto__Output as _zetasql_ResolvedComputedColumnProto__Output } from '../zetasql/ResolvedComputedColumnProto';

export interface ResolvedGroupRowsScanProto {
  'parent'?: (_zetasql_ResolvedScanProto | null);
  'inputColumnList'?: (_zetasql_ResolvedComputedColumnProto)[];
  'alias'?: (string);
}

export interface ResolvedGroupRowsScanProto__Output {
  'parent': (_zetasql_ResolvedScanProto__Output | null);
  'inputColumnList': (_zetasql_ResolvedComputedColumnProto__Output)[];
  'alias': (string);
}
