// Original file: src/snowflake/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedArgumentProto as _zetasql_ResolvedArgumentProto, ResolvedArgumentProto__Output as _zetasql_ResolvedArgumentProto__Output } from '../zetasql/ResolvedArgumentProto';
import type { ResolvedColumnRefProto as _zetasql_ResolvedColumnRefProto, ResolvedColumnRefProto__Output as _zetasql_ResolvedColumnRefProto__Output } from '../zetasql/ResolvedColumnRefProto';
import type { ResolvedOptionProto as _zetasql_ResolvedOptionProto, ResolvedOptionProto__Output as _zetasql_ResolvedOptionProto__Output } from '../zetasql/ResolvedOptionProto';
import type { ResolvedCollationProto as _zetasql_ResolvedCollationProto, ResolvedCollationProto__Output as _zetasql_ResolvedCollationProto__Output } from '../zetasql/ResolvedCollationProto';

export interface ResolvedWindowPartitioningProto {
  'parent'?: (_zetasql_ResolvedArgumentProto | null);
  'partitionByList'?: (_zetasql_ResolvedColumnRefProto)[];
  'hintList'?: (_zetasql_ResolvedOptionProto)[];
  'collationList'?: (_zetasql_ResolvedCollationProto)[];
}

export interface ResolvedWindowPartitioningProto__Output {
  'parent': (_zetasql_ResolvedArgumentProto__Output | null);
  'partitionByList': (_zetasql_ResolvedColumnRefProto__Output)[];
  'hintList': (_zetasql_ResolvedOptionProto__Output)[];
  'collationList': (_zetasql_ResolvedCollationProto__Output)[];
}
