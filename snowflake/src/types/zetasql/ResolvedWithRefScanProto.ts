// Original file: src/zetasql-snowflake/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedScanProto as _zetasql_ResolvedScanProto, ResolvedScanProto__Output as _zetasql_ResolvedScanProto__Output } from '../zetasql/ResolvedScanProto';

export interface ResolvedWithRefScanProto {
  'parent'?: (_zetasql_ResolvedScanProto | null);
  'withQueryName'?: (string);
}

export interface ResolvedWithRefScanProto__Output {
  'parent': (_zetasql_ResolvedScanProto__Output | null);
  'withQueryName': (string);
}
