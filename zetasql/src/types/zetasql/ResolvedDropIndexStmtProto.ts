// Original file: src/zetasql/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedStatementProto as _zetasql_ResolvedStatementProto, ResolvedStatementProto__Output as _zetasql_ResolvedStatementProto__Output } from '../zetasql/ResolvedStatementProto';
import type { _zetasql_ResolvedDropIndexStmtEnums_IndexType, _zetasql_ResolvedDropIndexStmtEnums_IndexType__Output } from '../zetasql/ResolvedDropIndexStmtEnums';

export interface ResolvedDropIndexStmtProto {
  'parent'?: (_zetasql_ResolvedStatementProto | null);
  'isIfExists'?: (boolean);
  'name'?: (string);
  'tableNamePath'?: (string)[];
  'indexType'?: (_zetasql_ResolvedDropIndexStmtEnums_IndexType);
}

export interface ResolvedDropIndexStmtProto__Output {
  'parent': (_zetasql_ResolvedStatementProto__Output | null);
  'isIfExists': (boolean);
  'name': (string);
  'tableNamePath': (string)[];
  'indexType': (_zetasql_ResolvedDropIndexStmtEnums_IndexType__Output);
}
