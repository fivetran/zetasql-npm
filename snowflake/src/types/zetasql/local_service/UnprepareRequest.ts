// Original file: src/snowflake/protos/local_service.proto

import type { Long } from '@grpc/proto-loader';

export interface UnprepareRequest {
  'preparedExpressionId'?: (number | string | Long);
}

export interface UnprepareRequest__Output {
  'preparedExpressionId': (Long);
}
