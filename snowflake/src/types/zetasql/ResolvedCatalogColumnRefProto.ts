// Original file: src/zetasql-snowflake/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedExprProto as _zetasql_ResolvedExprProto, ResolvedExprProto__Output as _zetasql_ResolvedExprProto__Output } from '../zetasql/ResolvedExprProto';
import type { ColumnRefProto as _zetasql_ColumnRefProto, ColumnRefProto__Output as _zetasql_ColumnRefProto__Output } from '../zetasql/ColumnRefProto';

export interface ResolvedCatalogColumnRefProto {
  'parent'?: (_zetasql_ResolvedExprProto | null);
  'column'?: (_zetasql_ColumnRefProto | null);
}

export interface ResolvedCatalogColumnRefProto__Output {
  'parent': (_zetasql_ResolvedExprProto__Output | null);
  'column': (_zetasql_ColumnRefProto__Output | null);
}
