// Original file: src/zetasql-snowflake/protos/local_service.proto

import type { DescriptorPoolIdList as _zetasql_local_service_DescriptorPoolIdList, DescriptorPoolIdList__Output as _zetasql_local_service_DescriptorPoolIdList__Output } from '../../zetasql/local_service/DescriptorPoolIdList';
import type { Long } from '@grpc/proto-loader';

export interface RegisterResponse {
  'registeredId'?: (number | string | Long);
  'descriptorPoolIdList'?: (_zetasql_local_service_DescriptorPoolIdList | null);
}

export interface RegisterResponse__Output {
  'registeredId': (Long);
  'descriptorPoolIdList': (_zetasql_local_service_DescriptorPoolIdList__Output | null);
}
