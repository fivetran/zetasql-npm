// Original file: src/snowflake/protos/local_service.proto

import type { SimpleColumnProto as _zetasql_SimpleColumnProto, SimpleColumnProto__Output as _zetasql_SimpleColumnProto__Output } from '../../zetasql/SimpleColumnProto';
import type { DescriptorPoolIdList as _zetasql_local_service_DescriptorPoolIdList, DescriptorPoolIdList__Output as _zetasql_local_service_DescriptorPoolIdList__Output } from '../../zetasql/local_service/DescriptorPoolIdList';
import type { Long } from '@grpc/proto-loader';

export interface PreparedQueryState {
  'preparedQueryId'?: (number | string | Long);
  'referencedParameters'?: (string)[];
  'positionalParameterCount'?: (number | string | Long);
  'columns'?: (_zetasql_SimpleColumnProto)[];
  'descriptorPoolIdList'?: (_zetasql_local_service_DescriptorPoolIdList | null);
}

export interface PreparedQueryState__Output {
  'preparedQueryId': (Long);
  'referencedParameters': (string)[];
  'positionalParameterCount': (Long);
  'columns': (_zetasql_SimpleColumnProto__Output)[];
  'descriptorPoolIdList': (_zetasql_local_service_DescriptorPoolIdList__Output | null);
}
