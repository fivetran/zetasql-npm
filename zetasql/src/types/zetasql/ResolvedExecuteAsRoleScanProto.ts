// Original file: src/zetasql/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedScanProto as _zetasql_ResolvedScanProto, ResolvedScanProto__Output as _zetasql_ResolvedScanProto__Output } from '../zetasql/ResolvedScanProto';
import type { AnyResolvedScanProto as _zetasql_AnyResolvedScanProto, AnyResolvedScanProto__Output as _zetasql_AnyResolvedScanProto__Output } from '../zetasql/AnyResolvedScanProto';
import type { TableRefProto as _zetasql_TableRefProto, TableRefProto__Output as _zetasql_TableRefProto__Output } from '../zetasql/TableRefProto';
import type { TableValuedFunctionRefProto as _zetasql_TableValuedFunctionRefProto, TableValuedFunctionRefProto__Output as _zetasql_TableValuedFunctionRefProto__Output } from '../zetasql/TableValuedFunctionRefProto';

export interface ResolvedExecuteAsRoleScanProto {
  'parent'?: (_zetasql_ResolvedScanProto | null);
  'inputScan'?: (_zetasql_AnyResolvedScanProto | null);
  'originalInlinedView'?: (_zetasql_TableRefProto | null);
  'originalInlinedTvf'?: (_zetasql_TableValuedFunctionRefProto | null);
}

export interface ResolvedExecuteAsRoleScanProto__Output {
  'parent': (_zetasql_ResolvedScanProto__Output | null);
  'inputScan': (_zetasql_AnyResolvedScanProto__Output | null);
  'originalInlinedView': (_zetasql_TableRefProto__Output | null);
  'originalInlinedTvf': (_zetasql_TableValuedFunctionRefProto__Output | null);
}
