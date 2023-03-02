// Original file: src/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedArgumentProto as _zetasql_ResolvedArgumentProto, ResolvedArgumentProto__Output as _zetasql_ResolvedArgumentProto__Output } from '../zetasql/ResolvedArgumentProto';
import type { ResolvedColumnProto as _zetasql_ResolvedColumnProto, ResolvedColumnProto__Output as _zetasql_ResolvedColumnProto__Output } from '../zetasql/ResolvedColumnProto';
import type { ResolvedColumnRefProto as _zetasql_ResolvedColumnRefProto, ResolvedColumnRefProto__Output as _zetasql_ResolvedColumnRefProto__Output } from '../zetasql/ResolvedColumnRefProto';
import type { AnyResolvedExprProto as _zetasql_AnyResolvedExprProto, AnyResolvedExprProto__Output as _zetasql_AnyResolvedExprProto__Output } from '../zetasql/AnyResolvedExprProto';

export interface ResolvedInlineLambdaProto {
  'parent'?: (_zetasql_ResolvedArgumentProto | null);
  'argumentList'?: (_zetasql_ResolvedColumnProto)[];
  'parameterList'?: (_zetasql_ResolvedColumnRefProto)[];
  'body'?: (_zetasql_AnyResolvedExprProto | null);
}

export interface ResolvedInlineLambdaProto__Output {
  'parent': (_zetasql_ResolvedArgumentProto__Output | null);
  'argumentList': (_zetasql_ResolvedColumnProto__Output)[];
  'parameterList': (_zetasql_ResolvedColumnRefProto__Output)[];
  'body': (_zetasql_AnyResolvedExprProto__Output | null);
}
