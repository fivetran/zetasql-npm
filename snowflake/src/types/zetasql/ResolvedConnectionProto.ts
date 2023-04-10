// Original file: src/zetasql-snowflake/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedArgumentProto as _zetasql_ResolvedArgumentProto, ResolvedArgumentProto__Output as _zetasql_ResolvedArgumentProto__Output } from '../zetasql/ResolvedArgumentProto';
import type { ConnectionRefProto as _zetasql_ConnectionRefProto, ConnectionRefProto__Output as _zetasql_ConnectionRefProto__Output } from '../zetasql/ConnectionRefProto';

export interface ResolvedConnectionProto {
  'parent'?: (_zetasql_ResolvedArgumentProto | null);
  'connection'?: (_zetasql_ConnectionRefProto | null);
}

export interface ResolvedConnectionProto__Output {
  'parent': (_zetasql_ResolvedArgumentProto__Output | null);
  'connection': (_zetasql_ConnectionRefProto__Output | null);
}
