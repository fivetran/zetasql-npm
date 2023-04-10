// Original file: src/zetasql-snowflake/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedNodeProto as _zetasql_ResolvedNodeProto, ResolvedNodeProto__Output as _zetasql_ResolvedNodeProto__Output } from '../zetasql/ResolvedNodeProto';
import type { ResolvedOptionProto as _zetasql_ResolvedOptionProto, ResolvedOptionProto__Output as _zetasql_ResolvedOptionProto__Output } from '../zetasql/ResolvedOptionProto';

export interface ResolvedStatementProto {
  'parent'?: (_zetasql_ResolvedNodeProto | null);
  'hintList'?: (_zetasql_ResolvedOptionProto)[];
}

export interface ResolvedStatementProto__Output {
  'parent': (_zetasql_ResolvedNodeProto__Output | null);
  'hintList': (_zetasql_ResolvedOptionProto__Output)[];
}
