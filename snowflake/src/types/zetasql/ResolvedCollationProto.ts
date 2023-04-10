// Original file: src/snowflake/protos/zetasql/resolved_ast/serialization.proto

import type { ResolvedCollationProto as _zetasql_ResolvedCollationProto, ResolvedCollationProto__Output as _zetasql_ResolvedCollationProto__Output } from '../zetasql/ResolvedCollationProto';

export interface ResolvedCollationProto {
  'collationName'?: (string);
  'childList'?: (_zetasql_ResolvedCollationProto)[];
}

export interface ResolvedCollationProto__Output {
  'collationName': (string);
  'childList': (_zetasql_ResolvedCollationProto__Output)[];
}
