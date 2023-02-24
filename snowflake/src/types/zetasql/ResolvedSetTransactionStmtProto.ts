// Original file: src/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedStatementProto as _zetasql_ResolvedStatementProto, ResolvedStatementProto__Output as _zetasql_ResolvedStatementProto__Output } from '../zetasql/ResolvedStatementProto';
import type { _zetasql_ResolvedBeginStmtEnums_ReadWriteMode, _zetasql_ResolvedBeginStmtEnums_ReadWriteMode__Output } from '../zetasql/ResolvedBeginStmtEnums';

export interface ResolvedSetTransactionStmtProto {
  'parent'?: (_zetasql_ResolvedStatementProto | null);
  'isolationLevelList'?: (string)[];
  'readWriteMode'?: (_zetasql_ResolvedBeginStmtEnums_ReadWriteMode);
}

export interface ResolvedSetTransactionStmtProto__Output {
  'parent': (_zetasql_ResolvedStatementProto__Output | null);
  'isolationLevelList': (string)[];
  'readWriteMode': (_zetasql_ResolvedBeginStmtEnums_ReadWriteMode__Output);
}
