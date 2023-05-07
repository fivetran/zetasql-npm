// Original file: src/zetasql/protos/zetasql/public/type_modifiers.proto

import type { TypeParametersProto as _zetasql_TypeParametersProto, TypeParametersProto__Output as _zetasql_TypeParametersProto__Output } from '../zetasql/TypeParametersProto';
import type { CollationProto as _zetasql_CollationProto, CollationProto__Output as _zetasql_CollationProto__Output } from '../zetasql/CollationProto';

export interface TypeModifiersProto {
  'typeParameters'?: (_zetasql_TypeParametersProto | null);
  'collation'?: (_zetasql_CollationProto | null);
}

export interface TypeModifiersProto__Output {
  'typeParameters': (_zetasql_TypeParametersProto__Output | null);
  'collation': (_zetasql_CollationProto__Output | null);
}
