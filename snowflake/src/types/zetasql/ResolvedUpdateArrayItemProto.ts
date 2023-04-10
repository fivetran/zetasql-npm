// Original file: src/snowflake/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedArgumentProto as _zetasql_ResolvedArgumentProto, ResolvedArgumentProto__Output as _zetasql_ResolvedArgumentProto__Output } from '../zetasql/ResolvedArgumentProto';
import type { AnyResolvedExprProto as _zetasql_AnyResolvedExprProto, AnyResolvedExprProto__Output as _zetasql_AnyResolvedExprProto__Output } from '../zetasql/AnyResolvedExprProto';
import type { ResolvedUpdateItemProto as _zetasql_ResolvedUpdateItemProto, ResolvedUpdateItemProto__Output as _zetasql_ResolvedUpdateItemProto__Output } from '../zetasql/ResolvedUpdateItemProto';

export interface ResolvedUpdateArrayItemProto {
  'parent'?: (_zetasql_ResolvedArgumentProto | null);
  'offset'?: (_zetasql_AnyResolvedExprProto | null);
  'updateItem'?: (_zetasql_ResolvedUpdateItemProto | null);
}

export interface ResolvedUpdateArrayItemProto__Output {
  'parent': (_zetasql_ResolvedArgumentProto__Output | null);
  'offset': (_zetasql_AnyResolvedExprProto__Output | null);
  'updateItem': (_zetasql_ResolvedUpdateItemProto__Output | null);
}
