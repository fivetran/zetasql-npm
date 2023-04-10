// Original file: src/zetasql-snowflake/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedArgumentProto as _zetasql_ResolvedArgumentProto, ResolvedArgumentProto__Output as _zetasql_ResolvedArgumentProto__Output } from '../zetasql/ResolvedArgumentProto';
import type { ResolvedExtendedCastElementProto as _zetasql_ResolvedExtendedCastElementProto, ResolvedExtendedCastElementProto__Output as _zetasql_ResolvedExtendedCastElementProto__Output } from '../zetasql/ResolvedExtendedCastElementProto';

export interface ResolvedExtendedCastProto {
  'parent'?: (_zetasql_ResolvedArgumentProto | null);
  'elementList'?: (_zetasql_ResolvedExtendedCastElementProto)[];
}

export interface ResolvedExtendedCastProto__Output {
  'parent': (_zetasql_ResolvedArgumentProto__Output | null);
  'elementList': (_zetasql_ResolvedExtendedCastElementProto__Output)[];
}
