// Original file: protos/zetasql/public/annotation.proto

import type { AnnotationProto as _zetasql_AnnotationProto, AnnotationProto__Output as _zetasql_AnnotationProto__Output } from '../zetasql/AnnotationProto';
import type { AnnotationMapProto as _zetasql_AnnotationMapProto, AnnotationMapProto__Output as _zetasql_AnnotationMapProto__Output } from '../zetasql/AnnotationMapProto';

export interface AnnotationMapProto {
  'annotations'?: (_zetasql_AnnotationProto)[];
  'arrayElement'?: (_zetasql_AnnotationMapProto | null);
  'structFields'?: (_zetasql_AnnotationMapProto)[];
  'isNull'?: (boolean);
}

export interface AnnotationMapProto__Output {
  'annotations': (_zetasql_AnnotationProto__Output)[];
  'arrayElement': (_zetasql_AnnotationMapProto__Output | null);
  'structFields': (_zetasql_AnnotationMapProto__Output)[];
  'isNull': (boolean);
}
