// Original file: src/zetasql-snowflake/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedArgumentProto as _zetasql_ResolvedArgumentProto, ResolvedArgumentProto__Output as _zetasql_ResolvedArgumentProto__Output } from '../zetasql/ResolvedArgumentProto';
import type { ResolvedDMLValueProto as _zetasql_ResolvedDMLValueProto, ResolvedDMLValueProto__Output as _zetasql_ResolvedDMLValueProto__Output } from '../zetasql/ResolvedDMLValueProto';

export interface ResolvedInsertRowProto {
  'parent'?: (_zetasql_ResolvedArgumentProto | null);
  'valueList'?: (_zetasql_ResolvedDMLValueProto)[];
}

export interface ResolvedInsertRowProto__Output {
  'parent': (_zetasql_ResolvedArgumentProto__Output | null);
  'valueList': (_zetasql_ResolvedDMLValueProto__Output)[];
}
