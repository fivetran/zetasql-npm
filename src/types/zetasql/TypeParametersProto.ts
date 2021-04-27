// Original file: protos/zetasql/public/type_parameters.proto

import type { StringTypeParametersProto as _zetasql_StringTypeParametersProto, StringTypeParametersProto__Output as _zetasql_StringTypeParametersProto__Output } from '../zetasql/StringTypeParametersProto';
import type { NumericTypeParametersProto as _zetasql_NumericTypeParametersProto, NumericTypeParametersProto__Output as _zetasql_NumericTypeParametersProto__Output } from '../zetasql/NumericTypeParametersProto';
import type { ExtendedTypeParametersProto as _zetasql_ExtendedTypeParametersProto, ExtendedTypeParametersProto__Output as _zetasql_ExtendedTypeParametersProto__Output } from '../zetasql/ExtendedTypeParametersProto';
import type { TypeParametersProto as _zetasql_TypeParametersProto, TypeParametersProto__Output as _zetasql_TypeParametersProto__Output } from '../zetasql/TypeParametersProto';

export interface TypeParametersProto {
  'stringTypeParameters'?: (_zetasql_StringTypeParametersProto | null);
  'numericTypeParameters'?: (_zetasql_NumericTypeParametersProto | null);
  'extendedTypeParameters'?: (_zetasql_ExtendedTypeParametersProto | null);
  'childList'?: (_zetasql_TypeParametersProto)[];
  'typeParameters'?: "stringTypeParameters"|"numericTypeParameters"|"extendedTypeParameters";
}

export interface TypeParametersProto__Output {
  'stringTypeParameters'?: (_zetasql_StringTypeParametersProto__Output | null);
  'numericTypeParameters'?: (_zetasql_NumericTypeParametersProto__Output | null);
  'extendedTypeParameters'?: (_zetasql_ExtendedTypeParametersProto__Output | null);
  'childList': (_zetasql_TypeParametersProto__Output)[];
  'typeParameters': "stringTypeParameters"|"numericTypeParameters"|"extendedTypeParameters";
}
