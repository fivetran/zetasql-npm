// Original file: src/zetasql-snowflake/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedArgumentProto as _zetasql_ResolvedArgumentProto, ResolvedArgumentProto__Output as _zetasql_ResolvedArgumentProto__Output } from '../zetasql/ResolvedArgumentProto';
import type { AnyResolvedExprProto as _zetasql_AnyResolvedExprProto, AnyResolvedExprProto__Output as _zetasql_AnyResolvedExprProto__Output } from '../zetasql/AnyResolvedExprProto';

export interface ResolvedColumnDefaultValueProto {
  'parent'?: (_zetasql_ResolvedArgumentProto | null);
  'expression'?: (_zetasql_AnyResolvedExprProto | null);
  'sql'?: (string);
}

export interface ResolvedColumnDefaultValueProto__Output {
  'parent': (_zetasql_ResolvedArgumentProto__Output | null);
  'expression': (_zetasql_AnyResolvedExprProto__Output | null);
  'sql': (string);
}
