// Original file: src/zetasql/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedStatementProto as _zetasql_ResolvedStatementProto, ResolvedStatementProto__Output as _zetasql_ResolvedStatementProto__Output } from '../zetasql/ResolvedStatementProto';
import type { ResolvedPrivilegeProto as _zetasql_ResolvedPrivilegeProto, ResolvedPrivilegeProto__Output as _zetasql_ResolvedPrivilegeProto__Output } from '../zetasql/ResolvedPrivilegeProto';
import type { AnyResolvedExprProto as _zetasql_AnyResolvedExprProto, AnyResolvedExprProto__Output as _zetasql_AnyResolvedExprProto__Output } from '../zetasql/AnyResolvedExprProto';

export interface ResolvedGrantOrRevokeStmtProto {
  'parent'?: (_zetasql_ResolvedStatementProto | null);
  'privilegeList'?: (_zetasql_ResolvedPrivilegeProto)[];
  'objectTypeList'?: (string)[];
  'namePath'?: (string)[];
  'granteeList'?: (string)[];
  'granteeExprList'?: (_zetasql_AnyResolvedExprProto)[];
}

export interface ResolvedGrantOrRevokeStmtProto__Output {
  'parent': (_zetasql_ResolvedStatementProto__Output | null);
  'privilegeList': (_zetasql_ResolvedPrivilegeProto__Output)[];
  'objectTypeList': (string)[];
  'namePath': (string)[];
  'granteeList': (string)[];
  'granteeExprList': (_zetasql_AnyResolvedExprProto__Output)[];
}
