// Original file: src/zetasql/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedAlterActionProto as _zetasql_ResolvedAlterActionProto, ResolvedAlterActionProto__Output as _zetasql_ResolvedAlterActionProto__Output } from '../zetasql/ResolvedAlterActionProto';

export interface ResolvedAlterColumnActionProto {
  'parent'?: (_zetasql_ResolvedAlterActionProto | null);
  'isIfExists'?: (boolean);
  'column'?: (string);
}

export interface ResolvedAlterColumnActionProto__Output {
  'parent': (_zetasql_ResolvedAlterActionProto__Output | null);
  'isIfExists': (boolean);
  'column': (string);
}
