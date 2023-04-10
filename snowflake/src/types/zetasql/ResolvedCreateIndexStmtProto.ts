// Original file: src/zetasql-snowflake/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedCreateStatementProto as _zetasql_ResolvedCreateStatementProto, ResolvedCreateStatementProto__Output as _zetasql_ResolvedCreateStatementProto__Output } from '../zetasql/ResolvedCreateStatementProto';
import type { ResolvedTableScanProto as _zetasql_ResolvedTableScanProto, ResolvedTableScanProto__Output as _zetasql_ResolvedTableScanProto__Output } from '../zetasql/ResolvedTableScanProto';
import type { ResolvedIndexItemProto as _zetasql_ResolvedIndexItemProto, ResolvedIndexItemProto__Output as _zetasql_ResolvedIndexItemProto__Output } from '../zetasql/ResolvedIndexItemProto';
import type { ResolvedOptionProto as _zetasql_ResolvedOptionProto, ResolvedOptionProto__Output as _zetasql_ResolvedOptionProto__Output } from '../zetasql/ResolvedOptionProto';
import type { ResolvedComputedColumnProto as _zetasql_ResolvedComputedColumnProto, ResolvedComputedColumnProto__Output as _zetasql_ResolvedComputedColumnProto__Output } from '../zetasql/ResolvedComputedColumnProto';
import type { ResolvedUnnestItemProto as _zetasql_ResolvedUnnestItemProto, ResolvedUnnestItemProto__Output as _zetasql_ResolvedUnnestItemProto__Output } from '../zetasql/ResolvedUnnestItemProto';
import type { AnyResolvedExprProto as _zetasql_AnyResolvedExprProto, AnyResolvedExprProto__Output as _zetasql_AnyResolvedExprProto__Output } from '../zetasql/AnyResolvedExprProto';

export interface ResolvedCreateIndexStmtProto {
  'parent'?: (_zetasql_ResolvedCreateStatementProto | null);
  'tableNamePath'?: (string)[];
  'tableScan'?: (_zetasql_ResolvedTableScanProto | null);
  'isUnique'?: (boolean);
  'indexItemList'?: (_zetasql_ResolvedIndexItemProto)[];
  'optionList'?: (_zetasql_ResolvedOptionProto)[];
  'computedColumnsList'?: (_zetasql_ResolvedComputedColumnProto)[];
  'unnestExpressionsList'?: (_zetasql_ResolvedUnnestItemProto)[];
  'storingExpressionList'?: (_zetasql_AnyResolvedExprProto)[];
  'isSearch'?: (boolean);
  'indexAllColumns'?: (boolean);
}

export interface ResolvedCreateIndexStmtProto__Output {
  'parent': (_zetasql_ResolvedCreateStatementProto__Output | null);
  'tableNamePath': (string)[];
  'tableScan': (_zetasql_ResolvedTableScanProto__Output | null);
  'isUnique': (boolean);
  'indexItemList': (_zetasql_ResolvedIndexItemProto__Output)[];
  'optionList': (_zetasql_ResolvedOptionProto__Output)[];
  'computedColumnsList': (_zetasql_ResolvedComputedColumnProto__Output)[];
  'unnestExpressionsList': (_zetasql_ResolvedUnnestItemProto__Output)[];
  'storingExpressionList': (_zetasql_AnyResolvedExprProto__Output)[];
  'isSearch': (boolean);
  'indexAllColumns': (boolean);
}
