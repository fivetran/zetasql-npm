// Original file: src/zetasql-snowflake/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedExprProto as _zetasql_ResolvedExprProto, ResolvedExprProto__Output as _zetasql_ResolvedExprProto__Output } from '../zetasql/ResolvedExprProto';
import type { AnyResolvedExprProto as _zetasql_AnyResolvedExprProto, AnyResolvedExprProto__Output as _zetasql_AnyResolvedExprProto__Output } from '../zetasql/AnyResolvedExprProto';

export interface ResolvedGetJsonFieldProto {
  'parent'?: (_zetasql_ResolvedExprProto | null);
  'expr'?: (_zetasql_AnyResolvedExprProto | null);
  'fieldName'?: (string);
}

export interface ResolvedGetJsonFieldProto__Output {
  'parent': (_zetasql_ResolvedExprProto__Output | null);
  'expr': (_zetasql_AnyResolvedExprProto__Output | null);
  'fieldName': (string);
}
