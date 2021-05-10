// Original file: protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedStatementProto as _zetasql_ResolvedStatementProto, ResolvedStatementProto__Output as _zetasql_ResolvedStatementProto__Output } from '../zetasql/ResolvedStatementProto';
import type { _zetasql_ResolvedCreateStatementEnums_CreateMode } from '../zetasql/ResolvedCreateStatementEnums';
import type { ResolvedTableScanProto as _zetasql_ResolvedTableScanProto, ResolvedTableScanProto__Output as _zetasql_ResolvedTableScanProto__Output } from '../zetasql/ResolvedTableScanProto';
import type { AnyResolvedExprProto as _zetasql_AnyResolvedExprProto, AnyResolvedExprProto__Output as _zetasql_AnyResolvedExprProto__Output } from '../zetasql/AnyResolvedExprProto';

export interface ResolvedCreateRowAccessPolicyStmtProto {
  'parent'?: (_zetasql_ResolvedStatementProto | null);
  'createMode'?: (_zetasql_ResolvedCreateStatementEnums_CreateMode | keyof typeof _zetasql_ResolvedCreateStatementEnums_CreateMode);
  'name'?: (string);
  'targetNamePath'?: (string)[];
  'granteeList'?: (string)[];
  'tableScan'?: (_zetasql_ResolvedTableScanProto | null);
  'predicate'?: (_zetasql_AnyResolvedExprProto | null);
  'predicateStr'?: (string);
  'granteeExprList'?: (_zetasql_AnyResolvedExprProto)[];
}

export interface ResolvedCreateRowAccessPolicyStmtProto__Output {
  'parent': (_zetasql_ResolvedStatementProto__Output | null);
  'createMode': (_zetasql_ResolvedCreateStatementEnums_CreateMode);
  'name': (string);
  'targetNamePath': (string)[];
  'granteeList': (string)[];
  'tableScan': (_zetasql_ResolvedTableScanProto__Output | null);
  'predicate': (_zetasql_AnyResolvedExprProto__Output | null);
  'predicateStr': (string);
  'granteeExprList': (_zetasql_AnyResolvedExprProto__Output)[];
}
