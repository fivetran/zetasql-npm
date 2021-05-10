// Original file: protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedStatementProto as _zetasql_ResolvedStatementProto, ResolvedStatementProto__Output as _zetasql_ResolvedStatementProto__Output } from '../zetasql/ResolvedStatementProto';
import type { _zetasql_ResolvedBeginStmtEnums_ReadWriteMode } from '../zetasql/ResolvedBeginStmtEnums';

export interface ResolvedBeginStmtProto {
  'parent'?: (_zetasql_ResolvedStatementProto | null);
  'isolationLevelList'?: (string)[];
  'readWriteMode'?: (_zetasql_ResolvedBeginStmtEnums_ReadWriteMode | keyof typeof _zetasql_ResolvedBeginStmtEnums_ReadWriteMode);
}

export interface ResolvedBeginStmtProto__Output {
  'parent': (_zetasql_ResolvedStatementProto__Output | null);
  'isolationLevelList': (string)[];
  'readWriteMode': (_zetasql_ResolvedBeginStmtEnums_ReadWriteMode);
}
