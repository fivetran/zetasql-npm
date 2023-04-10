// Original file: src/snowflake/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedExprProto as _zetasql_ResolvedExprProto, ResolvedExprProto__Output as _zetasql_ResolvedExprProto__Output } from '../zetasql/ResolvedExprProto';
import type { _zetasql_ResolvedSubqueryExprEnums_SubqueryType, _zetasql_ResolvedSubqueryExprEnums_SubqueryType__Output } from '../zetasql/ResolvedSubqueryExprEnums';
import type { ResolvedColumnRefProto as _zetasql_ResolvedColumnRefProto, ResolvedColumnRefProto__Output as _zetasql_ResolvedColumnRefProto__Output } from '../zetasql/ResolvedColumnRefProto';
import type { AnyResolvedExprProto as _zetasql_AnyResolvedExprProto, AnyResolvedExprProto__Output as _zetasql_AnyResolvedExprProto__Output } from '../zetasql/AnyResolvedExprProto';
import type { AnyResolvedScanProto as _zetasql_AnyResolvedScanProto, AnyResolvedScanProto__Output as _zetasql_AnyResolvedScanProto__Output } from '../zetasql/AnyResolvedScanProto';
import type { ResolvedOptionProto as _zetasql_ResolvedOptionProto, ResolvedOptionProto__Output as _zetasql_ResolvedOptionProto__Output } from '../zetasql/ResolvedOptionProto';
import type { ResolvedCollationProto as _zetasql_ResolvedCollationProto, ResolvedCollationProto__Output as _zetasql_ResolvedCollationProto__Output } from '../zetasql/ResolvedCollationProto';

export interface ResolvedSubqueryExprProto {
  'parent'?: (_zetasql_ResolvedExprProto | null);
  'subqueryType'?: (_zetasql_ResolvedSubqueryExprEnums_SubqueryType);
  'parameterList'?: (_zetasql_ResolvedColumnRefProto)[];
  'inExpr'?: (_zetasql_AnyResolvedExprProto | null);
  'subquery'?: (_zetasql_AnyResolvedScanProto | null);
  'hintList'?: (_zetasql_ResolvedOptionProto)[];
  'inCollation'?: (_zetasql_ResolvedCollationProto | null);
}

export interface ResolvedSubqueryExprProto__Output {
  'parent': (_zetasql_ResolvedExprProto__Output | null);
  'subqueryType': (_zetasql_ResolvedSubqueryExprEnums_SubqueryType__Output);
  'parameterList': (_zetasql_ResolvedColumnRefProto__Output)[];
  'inExpr': (_zetasql_AnyResolvedExprProto__Output | null);
  'subquery': (_zetasql_AnyResolvedScanProto__Output | null);
  'hintList': (_zetasql_ResolvedOptionProto__Output)[];
  'inCollation': (_zetasql_ResolvedCollationProto__Output | null);
}
