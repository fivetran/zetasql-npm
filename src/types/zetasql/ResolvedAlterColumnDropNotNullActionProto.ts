// Original file: src/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedAlterActionProto as _zetasql_ResolvedAlterActionProto, ResolvedAlterActionProto__Output as _zetasql_ResolvedAlterActionProto__Output } from '../zetasql/ResolvedAlterActionProto';

export interface ResolvedAlterColumnDropNotNullActionProto {
  'parent'?: (_zetasql_ResolvedAlterActionProto | null);
  'column'?: (string);
  'isIfExists'?: (boolean);
}

export interface ResolvedAlterColumnDropNotNullActionProto__Output {
  'parent': (_zetasql_ResolvedAlterActionProto__Output | null);
  'column': (string);
  'isIfExists': (boolean);
}
