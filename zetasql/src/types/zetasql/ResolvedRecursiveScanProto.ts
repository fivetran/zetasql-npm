// Original file: src/zetasql/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedScanProto as _zetasql_ResolvedScanProto, ResolvedScanProto__Output as _zetasql_ResolvedScanProto__Output } from '../zetasql/ResolvedScanProto';
import type { _zetasql_ResolvedRecursiveScanEnums_RecursiveSetOperationType, _zetasql_ResolvedRecursiveScanEnums_RecursiveSetOperationType__Output } from '../zetasql/ResolvedRecursiveScanEnums';
import type { ResolvedSetOperationItemProto as _zetasql_ResolvedSetOperationItemProto, ResolvedSetOperationItemProto__Output as _zetasql_ResolvedSetOperationItemProto__Output } from '../zetasql/ResolvedSetOperationItemProto';

export interface ResolvedRecursiveScanProto {
  'parent'?: (_zetasql_ResolvedScanProto | null);
  'opType'?: (_zetasql_ResolvedRecursiveScanEnums_RecursiveSetOperationType);
  'nonRecursiveTerm'?: (_zetasql_ResolvedSetOperationItemProto | null);
  'recursiveTerm'?: (_zetasql_ResolvedSetOperationItemProto | null);
}

export interface ResolvedRecursiveScanProto__Output {
  'parent': (_zetasql_ResolvedScanProto__Output | null);
  'opType': (_zetasql_ResolvedRecursiveScanEnums_RecursiveSetOperationType__Output);
  'nonRecursiveTerm': (_zetasql_ResolvedSetOperationItemProto__Output | null);
  'recursiveTerm': (_zetasql_ResolvedSetOperationItemProto__Output | null);
}
