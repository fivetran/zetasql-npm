// Original file: src/zetasql-snowflake/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedStatementProto as _zetasql_ResolvedStatementProto, ResolvedStatementProto__Output as _zetasql_ResolvedStatementProto__Output } from '../zetasql/ResolvedStatementProto';

export interface ResolvedDropRowAccessPolicyStmtProto {
  'parent'?: (_zetasql_ResolvedStatementProto | null);
  'isDropAll'?: (boolean);
  'isIfExists'?: (boolean);
  'name'?: (string);
  'targetNamePath'?: (string)[];
}

export interface ResolvedDropRowAccessPolicyStmtProto__Output {
  'parent': (_zetasql_ResolvedStatementProto__Output | null);
  'isDropAll': (boolean);
  'isIfExists': (boolean);
  'name': (string);
  'targetNamePath': (string)[];
}
