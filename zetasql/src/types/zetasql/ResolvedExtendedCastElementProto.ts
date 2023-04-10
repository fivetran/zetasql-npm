// Original file: src/zetasql/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedArgumentProto as _zetasql_ResolvedArgumentProto, ResolvedArgumentProto__Output as _zetasql_ResolvedArgumentProto__Output } from '../zetasql/ResolvedArgumentProto';
import type { TypeProto as _zetasql_TypeProto, TypeProto__Output as _zetasql_TypeProto__Output } from '../zetasql/TypeProto';
import type { FunctionRefProto as _zetasql_FunctionRefProto, FunctionRefProto__Output as _zetasql_FunctionRefProto__Output } from '../zetasql/FunctionRefProto';

export interface ResolvedExtendedCastElementProto {
  'parent'?: (_zetasql_ResolvedArgumentProto | null);
  'fromType'?: (_zetasql_TypeProto | null);
  'toType'?: (_zetasql_TypeProto | null);
  'function'?: (_zetasql_FunctionRefProto | null);
}

export interface ResolvedExtendedCastElementProto__Output {
  'parent': (_zetasql_ResolvedArgumentProto__Output | null);
  'fromType': (_zetasql_TypeProto__Output | null);
  'toType': (_zetasql_TypeProto__Output | null);
  'function': (_zetasql_FunctionRefProto__Output | null);
}
