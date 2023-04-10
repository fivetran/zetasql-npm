// Original file: src/zetasql/protos/local_service.proto

import type { DescriptorPoolIdList as _zetasql_local_service_DescriptorPoolIdList, DescriptorPoolIdList__Output as _zetasql_local_service_DescriptorPoolIdList__Output } from '../../zetasql/local_service/DescriptorPoolIdList';
import type { Long } from '@grpc/proto-loader';

export interface PreparedModifyState {
  'preparedModifyId'?: (number | string | Long);
  'referencedParameters'?: (string)[];
  'positionalParameterCount'?: (number | string | Long);
  'descriptorPoolIdList'?: (_zetasql_local_service_DescriptorPoolIdList | null);
}

export interface PreparedModifyState__Output {
  'preparedModifyId': (Long);
  'referencedParameters': (string)[];
  'positionalParameterCount': (Long);
  'descriptorPoolIdList': (_zetasql_local_service_DescriptorPoolIdList__Output | null);
}
