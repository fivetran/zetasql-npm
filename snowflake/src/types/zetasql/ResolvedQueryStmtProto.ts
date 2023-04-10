// Original file: src/snowflake/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedStatementProto as _zetasql_ResolvedStatementProto, ResolvedStatementProto__Output as _zetasql_ResolvedStatementProto__Output } from '../zetasql/ResolvedStatementProto';
import type { ResolvedOutputColumnProto as _zetasql_ResolvedOutputColumnProto, ResolvedOutputColumnProto__Output as _zetasql_ResolvedOutputColumnProto__Output } from '../zetasql/ResolvedOutputColumnProto';
import type { AnyResolvedScanProto as _zetasql_AnyResolvedScanProto, AnyResolvedScanProto__Output as _zetasql_AnyResolvedScanProto__Output } from '../zetasql/AnyResolvedScanProto';

export interface ResolvedQueryStmtProto {
  'parent'?: (_zetasql_ResolvedStatementProto | null);
  'outputColumnList'?: (_zetasql_ResolvedOutputColumnProto)[];
  'isValueTable'?: (boolean);
  'query'?: (_zetasql_AnyResolvedScanProto | null);
}

export interface ResolvedQueryStmtProto__Output {
  'parent': (_zetasql_ResolvedStatementProto__Output | null);
  'outputColumnList': (_zetasql_ResolvedOutputColumnProto__Output)[];
  'isValueTable': (boolean);
  'query': (_zetasql_AnyResolvedScanProto__Output | null);
}
