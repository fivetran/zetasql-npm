// Original file: src/zetasql-snowflake/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedScanProto as _zetasql_ResolvedScanProto, ResolvedScanProto__Output as _zetasql_ResolvedScanProto__Output } from '../zetasql/ResolvedScanProto';

export interface ResolvedRelationArgumentScanProto {
  'parent'?: (_zetasql_ResolvedScanProto | null);
  'name'?: (string);
  'isValueTable'?: (boolean);
}

export interface ResolvedRelationArgumentScanProto__Output {
  'parent': (_zetasql_ResolvedScanProto__Output | null);
  'name': (string);
  'isValueTable': (boolean);
}
