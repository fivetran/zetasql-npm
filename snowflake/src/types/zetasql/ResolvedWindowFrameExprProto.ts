// Original file: src/snowflake/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedArgumentProto as _zetasql_ResolvedArgumentProto, ResolvedArgumentProto__Output as _zetasql_ResolvedArgumentProto__Output } from '../zetasql/ResolvedArgumentProto';
import type { _zetasql_ResolvedWindowFrameExprEnums_BoundaryType, _zetasql_ResolvedWindowFrameExprEnums_BoundaryType__Output } from '../zetasql/ResolvedWindowFrameExprEnums';
import type { AnyResolvedExprProto as _zetasql_AnyResolvedExprProto, AnyResolvedExprProto__Output as _zetasql_AnyResolvedExprProto__Output } from '../zetasql/AnyResolvedExprProto';

export interface ResolvedWindowFrameExprProto {
  'parent'?: (_zetasql_ResolvedArgumentProto | null);
  'boundaryType'?: (_zetasql_ResolvedWindowFrameExprEnums_BoundaryType);
  'expression'?: (_zetasql_AnyResolvedExprProto | null);
}

export interface ResolvedWindowFrameExprProto__Output {
  'parent': (_zetasql_ResolvedArgumentProto__Output | null);
  'boundaryType': (_zetasql_ResolvedWindowFrameExprEnums_BoundaryType__Output);
  'expression': (_zetasql_AnyResolvedExprProto__Output | null);
}
