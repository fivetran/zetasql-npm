// Original file: src/zetasql-snowflake/protos/zetasql/public/simple_table.proto

import type { TypeProto as _zetasql_TypeProto, TypeProto__Output as _zetasql_TypeProto__Output } from '../zetasql/TypeProto';
import type { AnnotationMapProto as _zetasql_AnnotationMapProto, AnnotationMapProto__Output as _zetasql_AnnotationMapProto__Output } from '../zetasql/AnnotationMapProto';
import type { ExpressionAttributeProto as _zetasql_ExpressionAttributeProto, ExpressionAttributeProto__Output as _zetasql_ExpressionAttributeProto__Output } from '../zetasql/ExpressionAttributeProto';

export interface SimpleColumnProto {
  'name'?: (string);
  'type'?: (_zetasql_TypeProto | null);
  'isPseudoColumn'?: (boolean);
  'isWritableColumn'?: (boolean);
  'annotationMap'?: (_zetasql_AnnotationMapProto | null);
  'canUpdateUnwritableToDefault'?: (boolean);
  'hasDefaultValue'?: (boolean);
  'columnExpression'?: (_zetasql_ExpressionAttributeProto | null);
}

export interface SimpleColumnProto__Output {
  'name': (string);
  'type': (_zetasql_TypeProto__Output | null);
  'isPseudoColumn': (boolean);
  'isWritableColumn': (boolean);
  'annotationMap': (_zetasql_AnnotationMapProto__Output | null);
  'canUpdateUnwritableToDefault': (boolean);
  'hasDefaultValue': (boolean);
  'columnExpression': (_zetasql_ExpressionAttributeProto__Output | null);
}
