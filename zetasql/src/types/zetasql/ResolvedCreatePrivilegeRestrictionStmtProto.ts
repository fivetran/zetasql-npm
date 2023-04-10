// Original file: src/zetasql/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedCreateStatementProto as _zetasql_ResolvedCreateStatementProto, ResolvedCreateStatementProto__Output as _zetasql_ResolvedCreateStatementProto__Output } from '../zetasql/ResolvedCreateStatementProto';
import type { ResolvedPrivilegeProto as _zetasql_ResolvedPrivilegeProto, ResolvedPrivilegeProto__Output as _zetasql_ResolvedPrivilegeProto__Output } from '../zetasql/ResolvedPrivilegeProto';
import type { AnyResolvedExprProto as _zetasql_AnyResolvedExprProto, AnyResolvedExprProto__Output as _zetasql_AnyResolvedExprProto__Output } from '../zetasql/AnyResolvedExprProto';

export interface ResolvedCreatePrivilegeRestrictionStmtProto {
  'parent'?: (_zetasql_ResolvedCreateStatementProto | null);
  'columnPrivilegeList'?: (_zetasql_ResolvedPrivilegeProto)[];
  'objectType'?: (string);
  'restricteeList'?: (_zetasql_AnyResolvedExprProto)[];
}

export interface ResolvedCreatePrivilegeRestrictionStmtProto__Output {
  'parent': (_zetasql_ResolvedCreateStatementProto__Output | null);
  'columnPrivilegeList': (_zetasql_ResolvedPrivilegeProto__Output)[];
  'objectType': (string);
  'restricteeList': (_zetasql_AnyResolvedExprProto__Output)[];
}
