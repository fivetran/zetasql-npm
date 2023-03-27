// Original file: src/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedArgumentProto as _zetasql_ResolvedArgumentProto, ResolvedArgumentProto__Output as _zetasql_ResolvedArgumentProto__Output } from '../zetasql/ResolvedArgumentProto';
import type { TypeProto as _zetasql_TypeProto, TypeProto__Output as _zetasql_TypeProto__Output } from '../zetasql/TypeProto';
import type { _zetasql_ResolvedArgumentDefEnums_ArgumentKind } from '../zetasql/ResolvedArgumentDefEnums';

export interface ResolvedArgumentDefProto {
  'parent'?: (_zetasql_ResolvedArgumentProto | null);
  'name'?: (string);
  'type'?: (_zetasql_TypeProto | null);
  'argumentKind'?: (_zetasql_ResolvedArgumentDefEnums_ArgumentKind | keyof typeof _zetasql_ResolvedArgumentDefEnums_ArgumentKind);
}

export interface ResolvedArgumentDefProto__Output {
  'parent': (_zetasql_ResolvedArgumentProto__Output | null);
  'name': (string);
  'type': (_zetasql_TypeProto__Output | null);
  'argumentKind': (_zetasql_ResolvedArgumentDefEnums_ArgumentKind);
}
