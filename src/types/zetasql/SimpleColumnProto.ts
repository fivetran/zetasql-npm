// Original file: protos/zetasql/public/simple_table.proto

import type { TypeProto as _zetasql_TypeProto, TypeProto__Output as _zetasql_TypeProto__Output } from '../zetasql/TypeProto';
import type { AnnotationMapProto as _zetasql_AnnotationMapProto, AnnotationMapProto__Output as _zetasql_AnnotationMapProto__Output } from '../zetasql/AnnotationMapProto';

export interface SimpleColumnProto {
  'name'?: (string);
  'type'?: (_zetasql_TypeProto | null);
  'isPseudoColumn'?: (boolean);
  'isWritableColumn'?: (boolean);
  'annotationMap'?: (_zetasql_AnnotationMapProto | null);
}

export interface SimpleColumnProto__Output {
  'name': (string);
  'type': (_zetasql_TypeProto__Output | null);
  'isPseudoColumn': (boolean);
  'isWritableColumn': (boolean);
  'annotationMap': (_zetasql_AnnotationMapProto__Output | null);
}
