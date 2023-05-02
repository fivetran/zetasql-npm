// Original file: src/zetasql/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedArgumentProto as _zetasql_ResolvedArgumentProto, ResolvedArgumentProto__Output as _zetasql_ResolvedArgumentProto__Output } from '../zetasql/ResolvedArgumentProto';
import type { AnyResolvedScanProto as _zetasql_AnyResolvedScanProto, AnyResolvedScanProto__Output as _zetasql_AnyResolvedScanProto__Output } from '../zetasql/AnyResolvedScanProto';
import type { ResolvedOutputColumnProto as _zetasql_ResolvedOutputColumnProto, ResolvedOutputColumnProto__Output as _zetasql_ResolvedOutputColumnProto__Output } from '../zetasql/ResolvedOutputColumnProto';

export interface ResolvedCreateModelAliasedQueryProto {
  'parent'?: (_zetasql_ResolvedArgumentProto | null);
  'alias'?: (string);
  'query'?: (_zetasql_AnyResolvedScanProto | null);
  'outputColumnList'?: (_zetasql_ResolvedOutputColumnProto)[];
}

export interface ResolvedCreateModelAliasedQueryProto__Output {
  'parent': (_zetasql_ResolvedArgumentProto__Output | null);
  'alias': (string);
  'query': (_zetasql_AnyResolvedScanProto__Output | null);
  'outputColumnList': (_zetasql_ResolvedOutputColumnProto__Output)[];
}
