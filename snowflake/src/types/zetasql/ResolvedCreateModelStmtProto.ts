// Original file: src/snowflake/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedCreateStatementProto as _zetasql_ResolvedCreateStatementProto, ResolvedCreateStatementProto__Output as _zetasql_ResolvedCreateStatementProto__Output } from '../zetasql/ResolvedCreateStatementProto';
import type { ResolvedOptionProto as _zetasql_ResolvedOptionProto, ResolvedOptionProto__Output as _zetasql_ResolvedOptionProto__Output } from '../zetasql/ResolvedOptionProto';
import type { ResolvedOutputColumnProto as _zetasql_ResolvedOutputColumnProto, ResolvedOutputColumnProto__Output as _zetasql_ResolvedOutputColumnProto__Output } from '../zetasql/ResolvedOutputColumnProto';
import type { AnyResolvedScanProto as _zetasql_AnyResolvedScanProto, AnyResolvedScanProto__Output as _zetasql_AnyResolvedScanProto__Output } from '../zetasql/AnyResolvedScanProto';
import type { ResolvedComputedColumnProto as _zetasql_ResolvedComputedColumnProto, ResolvedComputedColumnProto__Output as _zetasql_ResolvedComputedColumnProto__Output } from '../zetasql/ResolvedComputedColumnProto';
import type { ResolvedAnalyticFunctionGroupProto as _zetasql_ResolvedAnalyticFunctionGroupProto, ResolvedAnalyticFunctionGroupProto__Output as _zetasql_ResolvedAnalyticFunctionGroupProto__Output } from '../zetasql/ResolvedAnalyticFunctionGroupProto';
import type { ResolvedColumnDefinitionProto as _zetasql_ResolvedColumnDefinitionProto, ResolvedColumnDefinitionProto__Output as _zetasql_ResolvedColumnDefinitionProto__Output } from '../zetasql/ResolvedColumnDefinitionProto';
import type { ResolvedConnectionProto as _zetasql_ResolvedConnectionProto, ResolvedConnectionProto__Output as _zetasql_ResolvedConnectionProto__Output } from '../zetasql/ResolvedConnectionProto';
import type { ResolvedCreateModelAliasedQueryProto as _zetasql_ResolvedCreateModelAliasedQueryProto, ResolvedCreateModelAliasedQueryProto__Output as _zetasql_ResolvedCreateModelAliasedQueryProto__Output } from '../zetasql/ResolvedCreateModelAliasedQueryProto';

export interface ResolvedCreateModelStmtProto {
  'parent'?: (_zetasql_ResolvedCreateStatementProto | null);
  'optionList'?: (_zetasql_ResolvedOptionProto)[];
  'outputColumnList'?: (_zetasql_ResolvedOutputColumnProto)[];
  'query'?: (_zetasql_AnyResolvedScanProto | null);
  'transformList'?: (_zetasql_ResolvedComputedColumnProto)[];
  'transformOutputColumnList'?: (_zetasql_ResolvedOutputColumnProto)[];
  'transformAnalyticFunctionGroupList'?: (_zetasql_ResolvedAnalyticFunctionGroupProto)[];
  'transformInputColumnList'?: (_zetasql_ResolvedColumnDefinitionProto)[];
  'inputColumnDefinitionList'?: (_zetasql_ResolvedColumnDefinitionProto)[];
  'outputColumnDefinitionList'?: (_zetasql_ResolvedColumnDefinitionProto)[];
  'isRemote'?: (boolean);
  'connection'?: (_zetasql_ResolvedConnectionProto | null);
  'aliasedQueryList'?: (_zetasql_ResolvedCreateModelAliasedQueryProto)[];
}

export interface ResolvedCreateModelStmtProto__Output {
  'parent': (_zetasql_ResolvedCreateStatementProto__Output | null);
  'optionList': (_zetasql_ResolvedOptionProto__Output)[];
  'outputColumnList': (_zetasql_ResolvedOutputColumnProto__Output)[];
  'query': (_zetasql_AnyResolvedScanProto__Output | null);
  'transformList': (_zetasql_ResolvedComputedColumnProto__Output)[];
  'transformOutputColumnList': (_zetasql_ResolvedOutputColumnProto__Output)[];
  'transformAnalyticFunctionGroupList': (_zetasql_ResolvedAnalyticFunctionGroupProto__Output)[];
  'transformInputColumnList': (_zetasql_ResolvedColumnDefinitionProto__Output)[];
  'inputColumnDefinitionList': (_zetasql_ResolvedColumnDefinitionProto__Output)[];
  'outputColumnDefinitionList': (_zetasql_ResolvedColumnDefinitionProto__Output)[];
  'isRemote': (boolean);
  'connection': (_zetasql_ResolvedConnectionProto__Output | null);
  'aliasedQueryList': (_zetasql_ResolvedCreateModelAliasedQueryProto__Output)[];
}
