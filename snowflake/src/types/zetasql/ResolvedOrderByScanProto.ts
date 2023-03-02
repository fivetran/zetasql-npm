// Original file: src/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedScanProto as _zetasql_ResolvedScanProto, ResolvedScanProto__Output as _zetasql_ResolvedScanProto__Output } from '../zetasql/ResolvedScanProto';
import type { AnyResolvedScanProto as _zetasql_AnyResolvedScanProto, AnyResolvedScanProto__Output as _zetasql_AnyResolvedScanProto__Output } from '../zetasql/AnyResolvedScanProto';
import type { ResolvedOrderByItemProto as _zetasql_ResolvedOrderByItemProto, ResolvedOrderByItemProto__Output as _zetasql_ResolvedOrderByItemProto__Output } from '../zetasql/ResolvedOrderByItemProto';

export interface ResolvedOrderByScanProto {
  'parent'?: (_zetasql_ResolvedScanProto | null);
  'inputScan'?: (_zetasql_AnyResolvedScanProto | null);
  'orderByItemList'?: (_zetasql_ResolvedOrderByItemProto)[];
}

export interface ResolvedOrderByScanProto__Output {
  'parent': (_zetasql_ResolvedScanProto__Output | null);
  'inputScan': (_zetasql_AnyResolvedScanProto__Output | null);
  'orderByItemList': (_zetasql_ResolvedOrderByItemProto__Output)[];
}
