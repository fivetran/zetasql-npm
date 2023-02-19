// Original file: src/protos/zetasql/resolved_ast/serialization.proto

import type { TableRefProto as _zetasql_TableRefProto, TableRefProto__Output as _zetasql_TableRefProto__Output } from '../zetasql/TableRefProto';

export interface ColumnRefProto {
  'tableRef'?: (_zetasql_TableRefProto | null);
  'name'?: (string);
}

export interface ColumnRefProto__Output {
  'tableRef': (_zetasql_TableRefProto__Output | null);
  'name': (string);
}
