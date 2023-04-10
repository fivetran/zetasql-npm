// Original file: src/zetasql-snowflake/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedScanProto as _zetasql_ResolvedScanProto, ResolvedScanProto__Output as _zetasql_ResolvedScanProto__Output } from '../zetasql/ResolvedScanProto';
import type { AnyResolvedScanProto as _zetasql_AnyResolvedScanProto, AnyResolvedScanProto__Output as _zetasql_AnyResolvedScanProto__Output } from '../zetasql/AnyResolvedScanProto';
import type { AnyResolvedExprProto as _zetasql_AnyResolvedExprProto, AnyResolvedExprProto__Output as _zetasql_AnyResolvedExprProto__Output } from '../zetasql/AnyResolvedExprProto';
import type { _zetasql_ResolvedSampleScanEnums_SampleUnit, _zetasql_ResolvedSampleScanEnums_SampleUnit__Output } from '../zetasql/ResolvedSampleScanEnums';
import type { ResolvedColumnHolderProto as _zetasql_ResolvedColumnHolderProto, ResolvedColumnHolderProto__Output as _zetasql_ResolvedColumnHolderProto__Output } from '../zetasql/ResolvedColumnHolderProto';

export interface ResolvedSampleScanProto {
  'parent'?: (_zetasql_ResolvedScanProto | null);
  'inputScan'?: (_zetasql_AnyResolvedScanProto | null);
  'method'?: (string);
  'size'?: (_zetasql_AnyResolvedExprProto | null);
  'unit'?: (_zetasql_ResolvedSampleScanEnums_SampleUnit);
  'repeatableArgument'?: (_zetasql_AnyResolvedExprProto | null);
  'weightColumn'?: (_zetasql_ResolvedColumnHolderProto | null);
  'partitionByList'?: (_zetasql_AnyResolvedExprProto)[];
}

export interface ResolvedSampleScanProto__Output {
  'parent': (_zetasql_ResolvedScanProto__Output | null);
  'inputScan': (_zetasql_AnyResolvedScanProto__Output | null);
  'method': (string);
  'size': (_zetasql_AnyResolvedExprProto__Output | null);
  'unit': (_zetasql_ResolvedSampleScanEnums_SampleUnit__Output);
  'repeatableArgument': (_zetasql_AnyResolvedExprProto__Output | null);
  'weightColumn': (_zetasql_ResolvedColumnHolderProto__Output | null);
  'partitionByList': (_zetasql_AnyResolvedExprProto__Output)[];
}
