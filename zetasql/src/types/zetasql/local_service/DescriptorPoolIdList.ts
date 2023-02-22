// Original file: src/protos/local_service.proto

import type { Long } from '@grpc/proto-loader';

export interface DescriptorPoolIdList {
  'registeredIds'?: (number | string | Long)[];
}

export interface DescriptorPoolIdList__Output {
  'registeredIds': (Long)[];
}
