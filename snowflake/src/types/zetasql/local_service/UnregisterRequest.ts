// Original file: src/protos/local_service.proto

import type { Long } from '@grpc/proto-loader';

export interface UnregisterRequest {
  'registeredId'?: (number | string | Long);
}

export interface UnregisterRequest__Output {
  'registeredId': (Long);
}
