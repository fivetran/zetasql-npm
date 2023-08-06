// Original file: src/zetasql/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedScanProto as _zetasql_ResolvedScanProto, ResolvedScanProto__Output as _zetasql_ResolvedScanProto__Output } from '../zetasql/ResolvedScanProto';
import type { _zetasql_ResolvedSetOperationScanEnums_SetOperationType, _zetasql_ResolvedSetOperationScanEnums_SetOperationType__Output } from '../zetasql/ResolvedSetOperationScanEnums';
import type { ResolvedSetOperationItemProto as _zetasql_ResolvedSetOperationItemProto, ResolvedSetOperationItemProto__Output as _zetasql_ResolvedSetOperationItemProto__Output } from '../zetasql/ResolvedSetOperationItemProto';
import type { _zetasql_ResolvedSetOperationScanEnums_SetOperationColumnMatchMode, _zetasql_ResolvedSetOperationScanEnums_SetOperationColumnMatchMode__Output } from '../zetasql/ResolvedSetOperationScanEnums';
import type { _zetasql_ResolvedSetOperationScanEnums_SetOperationColumnPropagationMode, _zetasql_ResolvedSetOperationScanEnums_SetOperationColumnPropagationMode__Output } from '../zetasql/ResolvedSetOperationScanEnums';

export interface ResolvedSetOperationScanProto {
  'parent'?: (_zetasql_ResolvedScanProto | null);
  'opType'?: (_zetasql_ResolvedSetOperationScanEnums_SetOperationType);
  'inputItemList'?: (_zetasql_ResolvedSetOperationItemProto)[];
  'columnMatchMode'?: (_zetasql_ResolvedSetOperationScanEnums_SetOperationColumnMatchMode);
  'columnPropagationMode'?: (_zetasql_ResolvedSetOperationScanEnums_SetOperationColumnPropagationMode);
}

export interface ResolvedSetOperationScanProto__Output {
  'parent': (_zetasql_ResolvedScanProto__Output | null);
  'opType': (_zetasql_ResolvedSetOperationScanEnums_SetOperationType__Output);
  'inputItemList': (_zetasql_ResolvedSetOperationItemProto__Output)[];
  'columnMatchMode': (_zetasql_ResolvedSetOperationScanEnums_SetOperationColumnMatchMode__Output);
  'columnPropagationMode': (_zetasql_ResolvedSetOperationScanEnums_SetOperationColumnPropagationMode__Output);
}
