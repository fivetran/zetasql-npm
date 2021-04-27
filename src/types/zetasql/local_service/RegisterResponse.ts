// Original file: protos/local_service.proto

import type { Long } from '@grpc/proto-loader';

export interface RegisterResponse {
  'registeredId'?: (number | string | Long);
}

export interface RegisterResponse__Output {
  'registeredId': (Long);
}
