// Original file: src/zetasql-snowflake/protos/zetasql/public/annotation.proto

import type { SimpleValueProto as _zetasql_SimpleValueProto, SimpleValueProto__Output as _zetasql_SimpleValueProto__Output } from '../zetasql/SimpleValueProto';
import type { Long } from '@grpc/proto-loader';

export interface AnnotationProto {
  'id'?: (number | string | Long);
  'value'?: (_zetasql_SimpleValueProto | null);
}

export interface AnnotationProto__Output {
  'id': (Long);
  'value': (_zetasql_SimpleValueProto__Output | null);
}
