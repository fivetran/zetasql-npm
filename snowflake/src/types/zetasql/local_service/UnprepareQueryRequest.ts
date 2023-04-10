// Original file: src/snowflake/protos/local_service.proto

import type { Long } from '@grpc/proto-loader';

export interface UnprepareQueryRequest {
  'preparedQueryId'?: (number | string | Long);
}

export interface UnprepareQueryRequest__Output {
  'preparedQueryId': (Long);
}
