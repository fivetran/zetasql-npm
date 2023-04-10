// Original file: src/zetasql-snowflake/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedStatementProto as _zetasql_ResolvedStatementProto, ResolvedStatementProto__Output as _zetasql_ResolvedStatementProto__Output } from '../zetasql/ResolvedStatementProto';
import type { ResolvedPrivilegeProto as _zetasql_ResolvedPrivilegeProto, ResolvedPrivilegeProto__Output as _zetasql_ResolvedPrivilegeProto__Output } from '../zetasql/ResolvedPrivilegeProto';

export interface ResolvedDropPrivilegeRestrictionStmtProto {
  'parent'?: (_zetasql_ResolvedStatementProto | null);
  'objectType'?: (string);
  'isIfExists'?: (boolean);
  'namePath'?: (string)[];
  'columnPrivilegeList'?: (_zetasql_ResolvedPrivilegeProto)[];
}

export interface ResolvedDropPrivilegeRestrictionStmtProto__Output {
  'parent': (_zetasql_ResolvedStatementProto__Output | null);
  'objectType': (string);
  'isIfExists': (boolean);
  'namePath': (string)[];
  'columnPrivilegeList': (_zetasql_ResolvedPrivilegeProto__Output)[];
}
