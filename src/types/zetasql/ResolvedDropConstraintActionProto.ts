// Original file: protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedAlterActionProto as _zetasql_ResolvedAlterActionProto, ResolvedAlterActionProto__Output as _zetasql_ResolvedAlterActionProto__Output } from '../zetasql/ResolvedAlterActionProto';

export interface ResolvedDropConstraintActionProto {
  'parent'?: (_zetasql_ResolvedAlterActionProto | null);
  'isIfExists'?: (boolean);
  'name'?: (string);
}

export interface ResolvedDropConstraintActionProto__Output {
  'parent': (_zetasql_ResolvedAlterActionProto__Output | null);
  'isIfExists': (boolean);
  'name': (string);
}
