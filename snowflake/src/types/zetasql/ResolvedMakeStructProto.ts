// Original file: src/zetasql-snowflake/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedExprProto as _zetasql_ResolvedExprProto, ResolvedExprProto__Output as _zetasql_ResolvedExprProto__Output } from '../zetasql/ResolvedExprProto';
import type { AnyResolvedExprProto as _zetasql_AnyResolvedExprProto, AnyResolvedExprProto__Output as _zetasql_AnyResolvedExprProto__Output } from '../zetasql/AnyResolvedExprProto';

export interface ResolvedMakeStructProto {
  'parent'?: (_zetasql_ResolvedExprProto | null);
  'fieldList'?: (_zetasql_AnyResolvedExprProto)[];
}

export interface ResolvedMakeStructProto__Output {
  'parent': (_zetasql_ResolvedExprProto__Output | null);
  'fieldList': (_zetasql_AnyResolvedExprProto__Output)[];
}
