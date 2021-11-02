// Original file: src/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedArgumentProto as _zetasql_ResolvedArgumentProto, ResolvedArgumentProto__Output as _zetasql_ResolvedArgumentProto__Output } from '../zetasql/ResolvedArgumentProto';
import type { ModelRefProto as _zetasql_ModelRefProto, ModelRefProto__Output as _zetasql_ModelRefProto__Output } from '../zetasql/ModelRefProto';

export interface ResolvedModelProto {
  'parent'?: (_zetasql_ResolvedArgumentProto | null);
  'model'?: (_zetasql_ModelRefProto | null);
}

export interface ResolvedModelProto__Output {
  'parent': (_zetasql_ResolvedArgumentProto__Output | null);
  'model': (_zetasql_ModelRefProto__Output | null);
}
