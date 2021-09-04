// Original file: protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedAlterActionProto as _zetasql_ResolvedAlterActionProto, ResolvedAlterActionProto__Output as _zetasql_ResolvedAlterActionProto__Output } from '../zetasql/ResolvedAlterActionProto';
import type { TypeProto as _zetasql_TypeProto, TypeProto__Output as _zetasql_TypeProto__Output } from '../zetasql/TypeProto';
import type { TypeParametersProto as _zetasql_TypeParametersProto, TypeParametersProto__Output as _zetasql_TypeParametersProto__Output } from '../zetasql/TypeParametersProto';

export interface ResolvedAlterColumnSetDataTypeActionProto {
  'parent'?: (_zetasql_ResolvedAlterActionProto | null);
  'isIfExists'?: (boolean);
  'column'?: (string);
  'updatedType'?: (_zetasql_TypeProto | null);
  'updatedTypeParameters'?: (_zetasql_TypeParametersProto | null);
}

export interface ResolvedAlterColumnSetDataTypeActionProto__Output {
  'parent': (_zetasql_ResolvedAlterActionProto__Output | null);
  'isIfExists': (boolean);
  'column': (string);
  'updatedType': (_zetasql_TypeProto__Output | null);
  'updatedTypeParameters': (_zetasql_TypeParametersProto__Output | null);
}
