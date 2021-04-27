// Original file: protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedStatementProto as _zetasql_ResolvedStatementProto, ResolvedStatementProto__Output as _zetasql_ResolvedStatementProto__Output } from '../zetasql/ResolvedStatementProto';
import type { _zetasql_ResolvedDropStmtEnums_DropMode } from '../zetasql/ResolvedDropStmtEnums';

export interface ResolvedDropStmtProto {
  'parent'?: (_zetasql_ResolvedStatementProto | null);
  'objectType'?: (string);
  'isIfExists'?: (boolean);
  'namePath'?: (string)[];
  'dropMode'?: (_zetasql_ResolvedDropStmtEnums_DropMode | keyof typeof _zetasql_ResolvedDropStmtEnums_DropMode);
}

export interface ResolvedDropStmtProto__Output {
  'parent': (_zetasql_ResolvedStatementProto__Output | null);
  'objectType': (string);
  'isIfExists': (boolean);
  'namePath': (string)[];
  'dropMode': (keyof typeof _zetasql_ResolvedDropStmtEnums_DropMode);
}
