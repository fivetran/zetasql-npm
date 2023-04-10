// Original file: src/zetasql/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedStatementProto as _zetasql_ResolvedStatementProto, ResolvedStatementProto__Output as _zetasql_ResolvedStatementProto__Output } from '../zetasql/ResolvedStatementProto';
import type { ResolvedTableScanProto as _zetasql_ResolvedTableScanProto, ResolvedTableScanProto__Output as _zetasql_ResolvedTableScanProto__Output } from '../zetasql/ResolvedTableScanProto';
import type { ResolvedAssertRowsModifiedProto as _zetasql_ResolvedAssertRowsModifiedProto, ResolvedAssertRowsModifiedProto__Output as _zetasql_ResolvedAssertRowsModifiedProto__Output } from '../zetasql/ResolvedAssertRowsModifiedProto';
import type { AnyResolvedExprProto as _zetasql_AnyResolvedExprProto, AnyResolvedExprProto__Output as _zetasql_AnyResolvedExprProto__Output } from '../zetasql/AnyResolvedExprProto';
import type { ResolvedUpdateItemProto as _zetasql_ResolvedUpdateItemProto, ResolvedUpdateItemProto__Output as _zetasql_ResolvedUpdateItemProto__Output } from '../zetasql/ResolvedUpdateItemProto';
import type { AnyResolvedScanProto as _zetasql_AnyResolvedScanProto, AnyResolvedScanProto__Output as _zetasql_AnyResolvedScanProto__Output } from '../zetasql/AnyResolvedScanProto';
import type { ResolvedColumnHolderProto as _zetasql_ResolvedColumnHolderProto, ResolvedColumnHolderProto__Output as _zetasql_ResolvedColumnHolderProto__Output } from '../zetasql/ResolvedColumnHolderProto';
import type { _zetasql_ResolvedStatementEnums_ObjectAccess, _zetasql_ResolvedStatementEnums_ObjectAccess__Output } from '../zetasql/ResolvedStatementEnums';
import type { ResolvedReturningClauseProto as _zetasql_ResolvedReturningClauseProto, ResolvedReturningClauseProto__Output as _zetasql_ResolvedReturningClauseProto__Output } from '../zetasql/ResolvedReturningClauseProto';

export interface ResolvedUpdateStmtProto {
  'parent'?: (_zetasql_ResolvedStatementProto | null);
  'tableScan'?: (_zetasql_ResolvedTableScanProto | null);
  'assertRowsModified'?: (_zetasql_ResolvedAssertRowsModifiedProto | null);
  'whereExpr'?: (_zetasql_AnyResolvedExprProto | null);
  'updateItemList'?: (_zetasql_ResolvedUpdateItemProto)[];
  'fromScan'?: (_zetasql_AnyResolvedScanProto | null);
  'arrayOffsetColumn'?: (_zetasql_ResolvedColumnHolderProto | null);
  'columnAccessList'?: (_zetasql_ResolvedStatementEnums_ObjectAccess)[];
  'returning'?: (_zetasql_ResolvedReturningClauseProto | null);
}

export interface ResolvedUpdateStmtProto__Output {
  'parent': (_zetasql_ResolvedStatementProto__Output | null);
  'tableScan': (_zetasql_ResolvedTableScanProto__Output | null);
  'assertRowsModified': (_zetasql_ResolvedAssertRowsModifiedProto__Output | null);
  'whereExpr': (_zetasql_AnyResolvedExprProto__Output | null);
  'updateItemList': (_zetasql_ResolvedUpdateItemProto__Output)[];
  'fromScan': (_zetasql_AnyResolvedScanProto__Output | null);
  'arrayOffsetColumn': (_zetasql_ResolvedColumnHolderProto__Output | null);
  'columnAccessList': (_zetasql_ResolvedStatementEnums_ObjectAccess__Output)[];
  'returning': (_zetasql_ResolvedReturningClauseProto__Output | null);
}
