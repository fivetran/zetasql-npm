// Original file: src/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedStatementProto as _zetasql_ResolvedStatementProto, ResolvedStatementProto__Output as _zetasql_ResolvedStatementProto__Output } from '../zetasql/ResolvedStatementProto';
import type { ResolvedOptionProto as _zetasql_ResolvedOptionProto, ResolvedOptionProto__Output as _zetasql_ResolvedOptionProto__Output } from '../zetasql/ResolvedOptionProto';
import type { ResolvedOutputColumnProto as _zetasql_ResolvedOutputColumnProto, ResolvedOutputColumnProto__Output as _zetasql_ResolvedOutputColumnProto__Output } from '../zetasql/ResolvedOutputColumnProto';
import type { AnyResolvedScanProto as _zetasql_AnyResolvedScanProto, AnyResolvedScanProto__Output as _zetasql_AnyResolvedScanProto__Output } from '../zetasql/AnyResolvedScanProto';
import type { ResolvedConnectionProto as _zetasql_ResolvedConnectionProto, ResolvedConnectionProto__Output as _zetasql_ResolvedConnectionProto__Output } from '../zetasql/ResolvedConnectionProto';

export interface ResolvedExportDataStmtProto {
  'parent'?: (_zetasql_ResolvedStatementProto | null);
  'optionList'?: (_zetasql_ResolvedOptionProto)[];
  'outputColumnList'?: (_zetasql_ResolvedOutputColumnProto)[];
  'isValueTable'?: (boolean);
  'query'?: (_zetasql_AnyResolvedScanProto | null);
  'connection'?: (_zetasql_ResolvedConnectionProto | null);
}

export interface ResolvedExportDataStmtProto__Output {
  'parent': (_zetasql_ResolvedStatementProto__Output | null);
  'optionList': (_zetasql_ResolvedOptionProto__Output)[];
  'outputColumnList': (_zetasql_ResolvedOutputColumnProto__Output)[];
  'isValueTable': (boolean);
  'query': (_zetasql_AnyResolvedScanProto__Output | null);
  'connection': (_zetasql_ResolvedConnectionProto__Output | null);
}
