// Original file: src/zetasql-snowflake/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedArgumentProto as _zetasql_ResolvedArgumentProto, ResolvedArgumentProto__Output as _zetasql_ResolvedArgumentProto__Output } from '../zetasql/ResolvedArgumentProto';
import type { ResolvedColumnDefinitionProto as _zetasql_ResolvedColumnDefinitionProto, ResolvedColumnDefinitionProto__Output as _zetasql_ResolvedColumnDefinitionProto__Output } from '../zetasql/ResolvedColumnDefinitionProto';

export interface ResolvedWithPartitionColumnsProto {
  'parent'?: (_zetasql_ResolvedArgumentProto | null);
  'columnDefinitionList'?: (_zetasql_ResolvedColumnDefinitionProto)[];
}

export interface ResolvedWithPartitionColumnsProto__Output {
  'parent': (_zetasql_ResolvedArgumentProto__Output | null);
  'columnDefinitionList': (_zetasql_ResolvedColumnDefinitionProto__Output)[];
}
