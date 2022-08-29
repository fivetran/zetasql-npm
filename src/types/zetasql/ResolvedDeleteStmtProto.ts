// Original file: src/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedStatementProto as _zetasql_ResolvedStatementProto, ResolvedStatementProto__Output as _zetasql_ResolvedStatementProto__Output } from '../zetasql/ResolvedStatementProto';
import type { ResolvedTableScanProto as _zetasql_ResolvedTableScanProto, ResolvedTableScanProto__Output as _zetasql_ResolvedTableScanProto__Output } from '../zetasql/ResolvedTableScanProto';
import type { ResolvedAssertRowsModifiedProto as _zetasql_ResolvedAssertRowsModifiedProto, ResolvedAssertRowsModifiedProto__Output as _zetasql_ResolvedAssertRowsModifiedProto__Output } from '../zetasql/ResolvedAssertRowsModifiedProto';
import type { AnyResolvedExprProto as _zetasql_AnyResolvedExprProto, AnyResolvedExprProto__Output as _zetasql_AnyResolvedExprProto__Output } from '../zetasql/AnyResolvedExprProto';
import type { ResolvedColumnHolderProto as _zetasql_ResolvedColumnHolderProto, ResolvedColumnHolderProto__Output as _zetasql_ResolvedColumnHolderProto__Output } from '../zetasql/ResolvedColumnHolderProto';
import type { ResolvedReturningClauseProto as _zetasql_ResolvedReturningClauseProto, ResolvedReturningClauseProto__Output as _zetasql_ResolvedReturningClauseProto__Output } from '../zetasql/ResolvedReturningClauseProto';
import type { _zetasql_ResolvedStatementEnums_ObjectAccess } from '../zetasql/ResolvedStatementEnums';

export interface ResolvedDeleteStmtProto {
  'parent'?: (_zetasql_ResolvedStatementProto | null);
  'tableScan'?: (_zetasql_ResolvedTableScanProto | null);
  'assertRowsModified'?: (_zetasql_ResolvedAssertRowsModifiedProto | null);
  'whereExpr'?: (_zetasql_AnyResolvedExprProto | null);
  'arrayOffsetColumn'?: (_zetasql_ResolvedColumnHolderProto | null);
  'returning'?: (_zetasql_ResolvedReturningClauseProto | null);
  'columnAccessList'?: (_zetasql_ResolvedStatementEnums_ObjectAccess | keyof typeof _zetasql_ResolvedStatementEnums_ObjectAccess)[];
}

export interface ResolvedDeleteStmtProto__Output {
  'parent': (_zetasql_ResolvedStatementProto__Output | null);
  'tableScan': (_zetasql_ResolvedTableScanProto__Output | null);
  'assertRowsModified': (_zetasql_ResolvedAssertRowsModifiedProto__Output | null);
  'whereExpr': (_zetasql_AnyResolvedExprProto__Output | null);
  'arrayOffsetColumn': (_zetasql_ResolvedColumnHolderProto__Output | null);
  'returning': (_zetasql_ResolvedReturningClauseProto__Output | null);
  'columnAccessList': (_zetasql_ResolvedStatementEnums_ObjectAccess)[];
}
