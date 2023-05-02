// Original file: src/snowflake/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedExprProto as _zetasql_ResolvedExprProto, ResolvedExprProto__Output as _zetasql_ResolvedExprProto__Output } from '../zetasql/ResolvedExprProto';
import type { AnyResolvedExprProto as _zetasql_AnyResolvedExprProto, AnyResolvedExprProto__Output as _zetasql_AnyResolvedExprProto__Output } from '../zetasql/AnyResolvedExprProto';
import type { ResolvedExtendedCastProto as _zetasql_ResolvedExtendedCastProto, ResolvedExtendedCastProto__Output as _zetasql_ResolvedExtendedCastProto__Output } from '../zetasql/ResolvedExtendedCastProto';
import type { TypeModifiersProto as _zetasql_TypeModifiersProto, TypeModifiersProto__Output as _zetasql_TypeModifiersProto__Output } from '../zetasql/TypeModifiersProto';

export interface ResolvedCastProto {
  'parent'?: (_zetasql_ResolvedExprProto | null);
  'expr'?: (_zetasql_AnyResolvedExprProto | null);
  'returnNullOnError'?: (boolean);
  'extendedCast'?: (_zetasql_ResolvedExtendedCastProto | null);
  'format'?: (_zetasql_AnyResolvedExprProto | null);
  'timeZone'?: (_zetasql_AnyResolvedExprProto | null);
  'typeModifiers'?: (_zetasql_TypeModifiersProto | null);
}

export interface ResolvedCastProto__Output {
  'parent': (_zetasql_ResolvedExprProto__Output | null);
  'expr': (_zetasql_AnyResolvedExprProto__Output | null);
  'returnNullOnError': (boolean);
  'extendedCast': (_zetasql_ResolvedExtendedCastProto__Output | null);
  'format': (_zetasql_AnyResolvedExprProto__Output | null);
  'timeZone': (_zetasql_AnyResolvedExprProto__Output | null);
  'typeModifiers': (_zetasql_TypeModifiersProto__Output | null);
}
