// Original file: src/snowflake/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedScanProto as _zetasql_ResolvedScanProto, ResolvedScanProto__Output as _zetasql_ResolvedScanProto__Output } from '../zetasql/ResolvedScanProto';
import type { AnyResolvedScanProto as _zetasql_AnyResolvedScanProto, AnyResolvedScanProto__Output as _zetasql_AnyResolvedScanProto__Output } from '../zetasql/AnyResolvedScanProto';
import type { ResolvedAnalyticFunctionGroupProto as _zetasql_ResolvedAnalyticFunctionGroupProto, ResolvedAnalyticFunctionGroupProto__Output as _zetasql_ResolvedAnalyticFunctionGroupProto__Output } from '../zetasql/ResolvedAnalyticFunctionGroupProto';

export interface ResolvedAnalyticScanProto {
  'parent'?: (_zetasql_ResolvedScanProto | null);
  'inputScan'?: (_zetasql_AnyResolvedScanProto | null);
  'functionGroupList'?: (_zetasql_ResolvedAnalyticFunctionGroupProto)[];
}

export interface ResolvedAnalyticScanProto__Output {
  'parent': (_zetasql_ResolvedScanProto__Output | null);
  'inputScan': (_zetasql_AnyResolvedScanProto__Output | null);
  'functionGroupList': (_zetasql_ResolvedAnalyticFunctionGroupProto__Output)[];
}
