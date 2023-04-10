// Original file: src/zetasql/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedCreateStatementProto as _zetasql_ResolvedCreateStatementProto, ResolvedCreateStatementProto__Output as _zetasql_ResolvedCreateStatementProto__Output } from '../zetasql/ResolvedCreateStatementProto';
import type { ResolvedOptionProto as _zetasql_ResolvedOptionProto, ResolvedOptionProto__Output as _zetasql_ResolvedOptionProto__Output } from '../zetasql/ResolvedOptionProto';
import type { ResolvedOutputColumnProto as _zetasql_ResolvedOutputColumnProto, ResolvedOutputColumnProto__Output as _zetasql_ResolvedOutputColumnProto__Output } from '../zetasql/ResolvedOutputColumnProto';
import type { AnyResolvedScanProto as _zetasql_AnyResolvedScanProto, AnyResolvedScanProto__Output as _zetasql_AnyResolvedScanProto__Output } from '../zetasql/AnyResolvedScanProto';
import type { _zetasql_ResolvedCreateStatementEnums_SqlSecurity, _zetasql_ResolvedCreateStatementEnums_SqlSecurity__Output } from '../zetasql/ResolvedCreateStatementEnums';

export interface ResolvedCreateViewBaseProto {
  'parent'?: (_zetasql_ResolvedCreateStatementProto | null);
  'optionList'?: (_zetasql_ResolvedOptionProto)[];
  'outputColumnList'?: (_zetasql_ResolvedOutputColumnProto)[];
  'isValueTable'?: (boolean);
  'query'?: (_zetasql_AnyResolvedScanProto | null);
  'sql'?: (string);
  'sqlSecurity'?: (_zetasql_ResolvedCreateStatementEnums_SqlSecurity);
  'recursive'?: (boolean);
  'hasExplicitColumns'?: (boolean);
}

export interface ResolvedCreateViewBaseProto__Output {
  'parent': (_zetasql_ResolvedCreateStatementProto__Output | null);
  'optionList': (_zetasql_ResolvedOptionProto__Output)[];
  'outputColumnList': (_zetasql_ResolvedOutputColumnProto__Output)[];
  'isValueTable': (boolean);
  'query': (_zetasql_AnyResolvedScanProto__Output | null);
  'sql': (string);
  'sqlSecurity': (_zetasql_ResolvedCreateStatementEnums_SqlSecurity__Output);
  'recursive': (boolean);
  'hasExplicitColumns': (boolean);
}
