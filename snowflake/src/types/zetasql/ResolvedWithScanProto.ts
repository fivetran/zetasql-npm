// Original file: src/snowflake/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedScanProto as _zetasql_ResolvedScanProto, ResolvedScanProto__Output as _zetasql_ResolvedScanProto__Output } from '../zetasql/ResolvedScanProto';
import type { ResolvedWithEntryProto as _zetasql_ResolvedWithEntryProto, ResolvedWithEntryProto__Output as _zetasql_ResolvedWithEntryProto__Output } from '../zetasql/ResolvedWithEntryProto';
import type { AnyResolvedScanProto as _zetasql_AnyResolvedScanProto, AnyResolvedScanProto__Output as _zetasql_AnyResolvedScanProto__Output } from '../zetasql/AnyResolvedScanProto';

export interface ResolvedWithScanProto {
  'parent'?: (_zetasql_ResolvedScanProto | null);
  'withEntryList'?: (_zetasql_ResolvedWithEntryProto)[];
  'query'?: (_zetasql_AnyResolvedScanProto | null);
  'recursive'?: (boolean);
}

export interface ResolvedWithScanProto__Output {
  'parent': (_zetasql_ResolvedScanProto__Output | null);
  'withEntryList': (_zetasql_ResolvedWithEntryProto__Output)[];
  'query': (_zetasql_AnyResolvedScanProto__Output | null);
  'recursive': (boolean);
}
