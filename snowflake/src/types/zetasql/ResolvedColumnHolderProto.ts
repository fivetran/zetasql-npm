// Original file: src/snowflake/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedArgumentProto as _zetasql_ResolvedArgumentProto, ResolvedArgumentProto__Output as _zetasql_ResolvedArgumentProto__Output } from '../zetasql/ResolvedArgumentProto';
import type { ResolvedColumnProto as _zetasql_ResolvedColumnProto, ResolvedColumnProto__Output as _zetasql_ResolvedColumnProto__Output } from '../zetasql/ResolvedColumnProto';

export interface ResolvedColumnHolderProto {
  'parent'?: (_zetasql_ResolvedArgumentProto | null);
  'column'?: (_zetasql_ResolvedColumnProto | null);
}

export interface ResolvedColumnHolderProto__Output {
  'parent': (_zetasql_ResolvedArgumentProto__Output | null);
  'column': (_zetasql_ResolvedColumnProto__Output | null);
}
