// Original file: src/zetasql/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedArgumentProto as _zetasql_ResolvedArgumentProto, ResolvedArgumentProto__Output as _zetasql_ResolvedArgumentProto__Output } from '../zetasql/ResolvedArgumentProto';

export interface ResolvedObjectUnitProto {
  'parent'?: (_zetasql_ResolvedArgumentProto | null);
  'namePath'?: (string)[];
}

export interface ResolvedObjectUnitProto__Output {
  'parent': (_zetasql_ResolvedArgumentProto__Output | null);
  'namePath': (string)[];
}
