// Original file: protos/local_service.proto

import type { TypeProto as _zetasql_TypeProto, TypeProto__Output as _zetasql_TypeProto__Output } from '../../zetasql/TypeProto';
import type { PreparedState as _zetasql_local_service_PreparedState, PreparedState__Output as _zetasql_local_service_PreparedState__Output } from '../../zetasql/local_service/PreparedState';
import type { Long } from '@grpc/proto-loader';

export interface PrepareResponse {
  'preparedExpressionId'?: (number | string | Long);
  'outputType'?: (_zetasql_TypeProto | null);
  'prepared'?: (_zetasql_local_service_PreparedState | null);
}

export interface PrepareResponse__Output {
  'preparedExpressionId': (Long);
  'outputType': (_zetasql_TypeProto__Output | null);
  'prepared': (_zetasql_local_service_PreparedState__Output | null);
}
