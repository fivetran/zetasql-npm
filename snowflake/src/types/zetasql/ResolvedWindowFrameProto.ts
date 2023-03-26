// Original file: src/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedArgumentProto as _zetasql_ResolvedArgumentProto, ResolvedArgumentProto__Output as _zetasql_ResolvedArgumentProto__Output } from '../zetasql/ResolvedArgumentProto';
import type { _zetasql_ResolvedWindowFrameEnums_FrameUnit } from '../zetasql/ResolvedWindowFrameEnums';
import type { ResolvedWindowFrameExprProto as _zetasql_ResolvedWindowFrameExprProto, ResolvedWindowFrameExprProto__Output as _zetasql_ResolvedWindowFrameExprProto__Output } from '../zetasql/ResolvedWindowFrameExprProto';

export interface ResolvedWindowFrameProto {
  'parent'?: (_zetasql_ResolvedArgumentProto | null);
  'frameUnit'?: (_zetasql_ResolvedWindowFrameEnums_FrameUnit | keyof typeof _zetasql_ResolvedWindowFrameEnums_FrameUnit);
  'startExpr'?: (_zetasql_ResolvedWindowFrameExprProto | null);
  'endExpr'?: (_zetasql_ResolvedWindowFrameExprProto | null);
}

export interface ResolvedWindowFrameProto__Output {
  'parent': (_zetasql_ResolvedArgumentProto__Output | null);
  'frameUnit': (_zetasql_ResolvedWindowFrameEnums_FrameUnit);
  'startExpr': (_zetasql_ResolvedWindowFrameExprProto__Output | null);
  'endExpr': (_zetasql_ResolvedWindowFrameExprProto__Output | null);
}
