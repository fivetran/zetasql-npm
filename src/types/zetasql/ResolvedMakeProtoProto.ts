// Original file: protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedExprProto as _zetasql_ResolvedExprProto, ResolvedExprProto__Output as _zetasql_ResolvedExprProto__Output } from '../zetasql/ResolvedExprProto';
import type { ResolvedMakeProtoFieldProto as _zetasql_ResolvedMakeProtoFieldProto, ResolvedMakeProtoFieldProto__Output as _zetasql_ResolvedMakeProtoFieldProto__Output } from '../zetasql/ResolvedMakeProtoFieldProto';

export interface ResolvedMakeProtoProto {
  'parent'?: (_zetasql_ResolvedExprProto | null);
  'fieldList'?: (_zetasql_ResolvedMakeProtoFieldProto)[];
}

export interface ResolvedMakeProtoProto__Output {
  'parent': (_zetasql_ResolvedExprProto__Output | null);
  'fieldList': (_zetasql_ResolvedMakeProtoFieldProto__Output)[];
}
