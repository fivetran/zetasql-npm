// Original file: src/zetasql/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedAlterObjectStmtProto as _zetasql_ResolvedAlterObjectStmtProto, ResolvedAlterObjectStmtProto__Output as _zetasql_ResolvedAlterObjectStmtProto__Output } from '../zetasql/ResolvedAlterObjectStmtProto';
import type { ResolvedPrivilegeProto as _zetasql_ResolvedPrivilegeProto, ResolvedPrivilegeProto__Output as _zetasql_ResolvedPrivilegeProto__Output } from '../zetasql/ResolvedPrivilegeProto';

export interface ResolvedAlterPrivilegeRestrictionStmtProto {
  'parent'?: (_zetasql_ResolvedAlterObjectStmtProto | null);
  'columnPrivilegeList'?: (_zetasql_ResolvedPrivilegeProto)[];
  'objectType'?: (string);
}

export interface ResolvedAlterPrivilegeRestrictionStmtProto__Output {
  'parent': (_zetasql_ResolvedAlterObjectStmtProto__Output | null);
  'columnPrivilegeList': (_zetasql_ResolvedPrivilegeProto__Output)[];
  'objectType': (string);
}
