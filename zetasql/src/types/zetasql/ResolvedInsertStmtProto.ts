// Original file: src/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedStatementProto as _zetasql_ResolvedStatementProto, ResolvedStatementProto__Output as _zetasql_ResolvedStatementProto__Output } from '../zetasql/ResolvedStatementProto';
import type { ResolvedTableScanProto as _zetasql_ResolvedTableScanProto, ResolvedTableScanProto__Output as _zetasql_ResolvedTableScanProto__Output } from '../zetasql/ResolvedTableScanProto';
import type { _zetasql_ResolvedInsertStmtEnums_InsertMode, _zetasql_ResolvedInsertStmtEnums_InsertMode__Output } from '../zetasql/ResolvedInsertStmtEnums';
import type { ResolvedAssertRowsModifiedProto as _zetasql_ResolvedAssertRowsModifiedProto, ResolvedAssertRowsModifiedProto__Output as _zetasql_ResolvedAssertRowsModifiedProto__Output } from '../zetasql/ResolvedAssertRowsModifiedProto';
import type { ResolvedColumnProto as _zetasql_ResolvedColumnProto, ResolvedColumnProto__Output as _zetasql_ResolvedColumnProto__Output } from '../zetasql/ResolvedColumnProto';
import type { AnyResolvedScanProto as _zetasql_AnyResolvedScanProto, AnyResolvedScanProto__Output as _zetasql_AnyResolvedScanProto__Output } from '../zetasql/AnyResolvedScanProto';
import type { ResolvedInsertRowProto as _zetasql_ResolvedInsertRowProto, ResolvedInsertRowProto__Output as _zetasql_ResolvedInsertRowProto__Output } from '../zetasql/ResolvedInsertRowProto';
import type { ResolvedColumnRefProto as _zetasql_ResolvedColumnRefProto, ResolvedColumnRefProto__Output as _zetasql_ResolvedColumnRefProto__Output } from '../zetasql/ResolvedColumnRefProto';
import type { ResolvedReturningClauseProto as _zetasql_ResolvedReturningClauseProto, ResolvedReturningClauseProto__Output as _zetasql_ResolvedReturningClauseProto__Output } from '../zetasql/ResolvedReturningClauseProto';
import type { _zetasql_ResolvedStatementEnums_ObjectAccess, _zetasql_ResolvedStatementEnums_ObjectAccess__Output } from '../zetasql/ResolvedStatementEnums';

export interface ResolvedInsertStmtProto {
  'parent'?: (_zetasql_ResolvedStatementProto | null);
  'tableScan'?: (_zetasql_ResolvedTableScanProto | null);
  'insertMode'?: (_zetasql_ResolvedInsertStmtEnums_InsertMode);
  'assertRowsModified'?: (_zetasql_ResolvedAssertRowsModifiedProto | null);
  'insertColumnList'?: (_zetasql_ResolvedColumnProto)[];
  'query'?: (_zetasql_AnyResolvedScanProto | null);
  'rowList'?: (_zetasql_ResolvedInsertRowProto)[];
  'queryOutputColumnList'?: (_zetasql_ResolvedColumnProto)[];
  'queryParameterList'?: (_zetasql_ResolvedColumnRefProto)[];
  'returning'?: (_zetasql_ResolvedReturningClauseProto | null);
  'columnAccessList'?: (_zetasql_ResolvedStatementEnums_ObjectAccess)[];
}

export interface ResolvedInsertStmtProto__Output {
  'parent': (_zetasql_ResolvedStatementProto__Output | null);
  'tableScan': (_zetasql_ResolvedTableScanProto__Output | null);
  'insertMode': (_zetasql_ResolvedInsertStmtEnums_InsertMode__Output);
  'assertRowsModified': (_zetasql_ResolvedAssertRowsModifiedProto__Output | null);
  'insertColumnList': (_zetasql_ResolvedColumnProto__Output)[];
  'query': (_zetasql_AnyResolvedScanProto__Output | null);
  'rowList': (_zetasql_ResolvedInsertRowProto__Output)[];
  'queryOutputColumnList': (_zetasql_ResolvedColumnProto__Output)[];
  'queryParameterList': (_zetasql_ResolvedColumnRefProto__Output)[];
  'returning': (_zetasql_ResolvedReturningClauseProto__Output | null);
  'columnAccessList': (_zetasql_ResolvedStatementEnums_ObjectAccess__Output)[];
}
