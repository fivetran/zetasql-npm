// Original file: src/protos/local_service.proto

import type { Long } from '@grpc/proto-loader';

export interface UnprepareModifyRequest {
  'preparedModifyId'?: (number | string | Long);
}

export interface UnprepareModifyRequest__Output {
  'preparedModifyId': (Long);
}
