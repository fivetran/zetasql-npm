// Original file: protos/local_service.proto

import type { ValueProto as _zetasql_ValueProto, ValueProto__Output as _zetasql_ValueProto__Output } from '../../zetasql/ValueProto';
import type { TypeProto as _zetasql_TypeProto, TypeProto__Output as _zetasql_TypeProto__Output } from '../../zetasql/TypeProto';
import type { PreparedState as _zetasql_local_service_PreparedState, PreparedState__Output as _zetasql_local_service_PreparedState__Output } from '../../zetasql/local_service/PreparedState';
import type { Long } from '@grpc/proto-loader';

export interface EvaluateResponse {
  'value'?: (_zetasql_ValueProto | null);
  'type'?: (_zetasql_TypeProto | null);
  'preparedExpressionId'?: (number | string | Long);
  'prepared'?: (_zetasql_local_service_PreparedState | null);
}

export interface EvaluateResponse__Output {
  'value': (_zetasql_ValueProto__Output | null);
  'type': (_zetasql_TypeProto__Output | null);
  'preparedExpressionId': (Long);
  'prepared': (_zetasql_local_service_PreparedState__Output | null);
}
