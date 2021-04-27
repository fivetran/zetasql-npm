// Original file: protos/local_service.proto

import type { TypeProto as _zetasql_TypeProto, TypeProto__Output as _zetasql_TypeProto__Output } from '../../zetasql/TypeProto';
import type { Long } from '@grpc/proto-loader';

export interface PreparedState {
  'preparedExpressionId'?: (number | string | Long);
  'outputType'?: (_zetasql_TypeProto | null);
  'referencedColumns'?: (string)[];
  'referencedParameters'?: (string)[];
  'positionalParameterCount'?: (number | string | Long);
}

export interface PreparedState__Output {
  'preparedExpressionId': (Long);
  'outputType': (_zetasql_TypeProto__Output | null);
  'referencedColumns': (string)[];
  'referencedParameters': (string)[];
  'positionalParameterCount': (Long);
}
