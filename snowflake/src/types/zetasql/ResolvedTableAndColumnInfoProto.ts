// Original file: src/snowflake/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedArgumentProto as _zetasql_ResolvedArgumentProto, ResolvedArgumentProto__Output as _zetasql_ResolvedArgumentProto__Output } from '../zetasql/ResolvedArgumentProto';
import type { TableRefProto as _zetasql_TableRefProto, TableRefProto__Output as _zetasql_TableRefProto__Output } from '../zetasql/TableRefProto';
import type { Long } from '@grpc/proto-loader';

export interface ResolvedTableAndColumnInfoProto {
  'parent'?: (_zetasql_ResolvedArgumentProto | null);
  'table'?: (_zetasql_TableRefProto | null);
  'columnIndexList'?: (number | string | Long)[];
}

export interface ResolvedTableAndColumnInfoProto__Output {
  'parent': (_zetasql_ResolvedArgumentProto__Output | null);
  'table': (_zetasql_TableRefProto__Output | null);
  'columnIndexList': (Long)[];
}
