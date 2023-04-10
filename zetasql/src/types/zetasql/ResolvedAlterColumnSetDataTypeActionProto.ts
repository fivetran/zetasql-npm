// Original file: src/zetasql/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedAlterColumnActionProto as _zetasql_ResolvedAlterColumnActionProto, ResolvedAlterColumnActionProto__Output as _zetasql_ResolvedAlterColumnActionProto__Output } from '../zetasql/ResolvedAlterColumnActionProto';
import type { TypeProto as _zetasql_TypeProto, TypeProto__Output as _zetasql_TypeProto__Output } from '../zetasql/TypeProto';
import type { TypeParametersProto as _zetasql_TypeParametersProto, TypeParametersProto__Output as _zetasql_TypeParametersProto__Output } from '../zetasql/TypeParametersProto';
import type { ResolvedColumnAnnotationsProto as _zetasql_ResolvedColumnAnnotationsProto, ResolvedColumnAnnotationsProto__Output as _zetasql_ResolvedColumnAnnotationsProto__Output } from '../zetasql/ResolvedColumnAnnotationsProto';

export interface ResolvedAlterColumnSetDataTypeActionProto {
  'parent'?: (_zetasql_ResolvedAlterColumnActionProto | null);
  'updatedType'?: (_zetasql_TypeProto | null);
  'updatedTypeParameters'?: (_zetasql_TypeParametersProto | null);
  'updatedAnnotations'?: (_zetasql_ResolvedColumnAnnotationsProto | null);
}

export interface ResolvedAlterColumnSetDataTypeActionProto__Output {
  'parent': (_zetasql_ResolvedAlterColumnActionProto__Output | null);
  'updatedType': (_zetasql_TypeProto__Output | null);
  'updatedTypeParameters': (_zetasql_TypeParametersProto__Output | null);
  'updatedAnnotations': (_zetasql_ResolvedColumnAnnotationsProto__Output | null);
}
