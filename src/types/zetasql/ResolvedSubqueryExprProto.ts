// Original file: protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedExprProto as _zetasql_ResolvedExprProto, ResolvedExprProto__Output as _zetasql_ResolvedExprProto__Output } from '../zetasql/ResolvedExprProto';
import type { _zetasql_ResolvedSubqueryExprEnums_SubqueryType } from '../zetasql/ResolvedSubqueryExprEnums';
import type { ResolvedColumnRefProto as _zetasql_ResolvedColumnRefProto, ResolvedColumnRefProto__Output as _zetasql_ResolvedColumnRefProto__Output } from '../zetasql/ResolvedColumnRefProto';
import type { AnyResolvedExprProto as _zetasql_AnyResolvedExprProto, AnyResolvedExprProto__Output as _zetasql_AnyResolvedExprProto__Output } from '../zetasql/AnyResolvedExprProto';
import type { AnyResolvedScanProto as _zetasql_AnyResolvedScanProto, AnyResolvedScanProto__Output as _zetasql_AnyResolvedScanProto__Output } from '../zetasql/AnyResolvedScanProto';
import type { ResolvedOptionProto as _zetasql_ResolvedOptionProto, ResolvedOptionProto__Output as _zetasql_ResolvedOptionProto__Output } from '../zetasql/ResolvedOptionProto';

export interface ResolvedSubqueryExprProto {
  'parent'?: (_zetasql_ResolvedExprProto | null);
  'subqueryType'?: (_zetasql_ResolvedSubqueryExprEnums_SubqueryType | keyof typeof _zetasql_ResolvedSubqueryExprEnums_SubqueryType);
  'parameterList'?: (_zetasql_ResolvedColumnRefProto)[];
  'inExpr'?: (_zetasql_AnyResolvedExprProto | null);
  'subquery'?: (_zetasql_AnyResolvedScanProto | null);
  'hintList'?: (_zetasql_ResolvedOptionProto)[];
}

export interface ResolvedSubqueryExprProto__Output {
  'parent': (_zetasql_ResolvedExprProto__Output | null);
  'subqueryType': (_zetasql_ResolvedSubqueryExprEnums_SubqueryType);
  'parameterList': (_zetasql_ResolvedColumnRefProto__Output)[];
  'inExpr': (_zetasql_AnyResolvedExprProto__Output | null);
  'subquery': (_zetasql_AnyResolvedScanProto__Output | null);
  'hintList': (_zetasql_ResolvedOptionProto__Output)[];
}
