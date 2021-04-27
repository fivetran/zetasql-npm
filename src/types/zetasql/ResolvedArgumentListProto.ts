// Original file: protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedArgumentProto as _zetasql_ResolvedArgumentProto, ResolvedArgumentProto__Output as _zetasql_ResolvedArgumentProto__Output } from '../zetasql/ResolvedArgumentProto';
import type { ResolvedArgumentDefProto as _zetasql_ResolvedArgumentDefProto, ResolvedArgumentDefProto__Output as _zetasql_ResolvedArgumentDefProto__Output } from '../zetasql/ResolvedArgumentDefProto';

export interface ResolvedArgumentListProto {
  'parent'?: (_zetasql_ResolvedArgumentProto | null);
  'argList'?: (_zetasql_ResolvedArgumentDefProto)[];
}

export interface ResolvedArgumentListProto__Output {
  'parent': (_zetasql_ResolvedArgumentProto__Output | null);
  'argList': (_zetasql_ResolvedArgumentDefProto__Output)[];
}
