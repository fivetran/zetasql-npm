// Original file: src/zetasql/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedArgumentProto as _zetasql_ResolvedArgumentProto, ResolvedArgumentProto__Output as _zetasql_ResolvedArgumentProto__Output } from '../zetasql/ResolvedArgumentProto';
import type { AnyResolvedExprProto as _zetasql_AnyResolvedExprProto, AnyResolvedExprProto__Output as _zetasql_AnyResolvedExprProto__Output } from '../zetasql/AnyResolvedExprProto';

export interface ResolvedExecuteImmediateArgumentProto {
  'parent'?: (_zetasql_ResolvedArgumentProto | null);
  'name'?: (string);
  'expression'?: (_zetasql_AnyResolvedExprProto | null);
}

export interface ResolvedExecuteImmediateArgumentProto__Output {
  'parent': (_zetasql_ResolvedArgumentProto__Output | null);
  'name': (string);
  'expression': (_zetasql_AnyResolvedExprProto__Output | null);
}
