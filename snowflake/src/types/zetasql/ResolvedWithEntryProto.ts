// Original file: src/snowflake/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedArgumentProto as _zetasql_ResolvedArgumentProto, ResolvedArgumentProto__Output as _zetasql_ResolvedArgumentProto__Output } from '../zetasql/ResolvedArgumentProto';
import type { AnyResolvedScanProto as _zetasql_AnyResolvedScanProto, AnyResolvedScanProto__Output as _zetasql_AnyResolvedScanProto__Output } from '../zetasql/AnyResolvedScanProto';

export interface ResolvedWithEntryProto {
  'parent'?: (_zetasql_ResolvedArgumentProto | null);
  'withQueryName'?: (string);
  'withSubquery'?: (_zetasql_AnyResolvedScanProto | null);
}

export interface ResolvedWithEntryProto__Output {
  'parent': (_zetasql_ResolvedArgumentProto__Output | null);
  'withQueryName': (string);
  'withSubquery': (_zetasql_AnyResolvedScanProto__Output | null);
}
