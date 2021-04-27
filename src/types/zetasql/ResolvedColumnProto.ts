// Original file: protos/zetasql/resolved_ast/serialization.proto

import type { TypeProto as _zetasql_TypeProto, TypeProto__Output as _zetasql_TypeProto__Output } from '../zetasql/TypeProto';
import type { AnnotationMapProto as _zetasql_AnnotationMapProto, AnnotationMapProto__Output as _zetasql_AnnotationMapProto__Output } from '../zetasql/AnnotationMapProto';
import type { Long } from '@grpc/proto-loader';

export interface ResolvedColumnProto {
  'columnId'?: (number | string | Long);
  'tableName'?: (string);
  'name'?: (string);
  'type'?: (_zetasql_TypeProto | null);
  'annotationMap'?: (_zetasql_AnnotationMapProto | null);
}

export interface ResolvedColumnProto__Output {
  'columnId': (Long);
  'tableName': (string);
  'name': (string);
  'type': (_zetasql_TypeProto__Output | null);
  'annotationMap': (_zetasql_AnnotationMapProto__Output | null);
}
