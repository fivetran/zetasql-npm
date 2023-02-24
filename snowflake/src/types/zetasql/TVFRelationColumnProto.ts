// Original file: src/protos/zetasql/proto/function.proto

import type { TypeProto as _zetasql_TypeProto, TypeProto__Output as _zetasql_TypeProto__Output } from '../zetasql/TypeProto';
import type { ParseLocationRangeProto as _zetasql_ParseLocationRangeProto, ParseLocationRangeProto__Output as _zetasql_ParseLocationRangeProto__Output } from '../zetasql/ParseLocationRangeProto';
import type { AnnotationMapProto as _zetasql_AnnotationMapProto, AnnotationMapProto__Output as _zetasql_AnnotationMapProto__Output } from '../zetasql/AnnotationMapProto';

export interface TVFRelationColumnProto {
  'name'?: (string);
  'type'?: (_zetasql_TypeProto | null);
  'isPseudoColumn'?: (boolean);
  'nameParseLocationRange'?: (_zetasql_ParseLocationRangeProto | null);
  'typeParseLocationRange'?: (_zetasql_ParseLocationRangeProto | null);
  'annotationMap'?: (_zetasql_AnnotationMapProto | null);
}

export interface TVFRelationColumnProto__Output {
  'name': (string);
  'type': (_zetasql_TypeProto__Output | null);
  'isPseudoColumn': (boolean);
  'nameParseLocationRange': (_zetasql_ParseLocationRangeProto__Output | null);
  'typeParseLocationRange': (_zetasql_ParseLocationRangeProto__Output | null);
  'annotationMap': (_zetasql_AnnotationMapProto__Output | null);
}
