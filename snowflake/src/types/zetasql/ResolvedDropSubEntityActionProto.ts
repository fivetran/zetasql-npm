// Original file: src/zetasql-snowflake/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedAlterActionProto as _zetasql_ResolvedAlterActionProto, ResolvedAlterActionProto__Output as _zetasql_ResolvedAlterActionProto__Output } from '../zetasql/ResolvedAlterActionProto';

export interface ResolvedDropSubEntityActionProto {
  'parent'?: (_zetasql_ResolvedAlterActionProto | null);
  'entityType'?: (string);
  'name'?: (string);
  'isIfExists'?: (boolean);
}

export interface ResolvedDropSubEntityActionProto__Output {
  'parent': (_zetasql_ResolvedAlterActionProto__Output | null);
  'entityType': (string);
  'name': (string);
  'isIfExists': (boolean);
}
