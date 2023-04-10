// Original file: src/snowflake/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedExprProto as _zetasql_ResolvedExprProto, ResolvedExprProto__Output as _zetasql_ResolvedExprProto__Output } from '../zetasql/ResolvedExprProto';
import type { Long } from '@grpc/proto-loader';

export interface ResolvedParameterProto {
  'parent'?: (_zetasql_ResolvedExprProto | null);
  'name'?: (string);
  'isUntyped'?: (boolean);
  'position'?: (number | string | Long);
}

export interface ResolvedParameterProto__Output {
  'parent': (_zetasql_ResolvedExprProto__Output | null);
  'name': (string);
  'isUntyped': (boolean);
  'position': (Long);
}
