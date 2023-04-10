// Original file: src/zetasql-snowflake/protos/local_service.proto

import type { AnalyzerOptionsProto as _zetasql_AnalyzerOptionsProto, AnalyzerOptionsProto__Output as _zetasql_AnalyzerOptionsProto__Output } from '../../zetasql/AnalyzerOptionsProto';
import type { DescriptorPoolListProto as _zetasql_local_service_DescriptorPoolListProto, DescriptorPoolListProto__Output as _zetasql_local_service_DescriptorPoolListProto__Output } from '../../zetasql/local_service/DescriptorPoolListProto';
import type { ValueProto as _zetasql_ValueProto, ValueProto__Output as _zetasql_ValueProto__Output } from '../../zetasql/ValueProto';
import type { Long } from '@grpc/proto-loader';

export interface _zetasql_local_service_EvaluateRequest_Parameter {
  'name'?: (string);
  'value'?: (_zetasql_ValueProto | null);
}

export interface _zetasql_local_service_EvaluateRequest_Parameter__Output {
  'name': (string);
  'value': (_zetasql_ValueProto__Output | null);
}

export interface EvaluateRequest {
  'sql'?: (string);
  'columns'?: (_zetasql_local_service_EvaluateRequest_Parameter)[];
  'params'?: (_zetasql_local_service_EvaluateRequest_Parameter)[];
  'preparedExpressionId'?: (number | string | Long);
  'options'?: (_zetasql_AnalyzerOptionsProto | null);
  'descriptorPoolList'?: (_zetasql_local_service_DescriptorPoolListProto | null);
}

export interface EvaluateRequest__Output {
  'sql': (string);
  'columns': (_zetasql_local_service_EvaluateRequest_Parameter__Output)[];
  'params': (_zetasql_local_service_EvaluateRequest_Parameter__Output)[];
  'preparedExpressionId': (Long);
  'options': (_zetasql_AnalyzerOptionsProto__Output | null);
  'descriptorPoolList': (_zetasql_local_service_DescriptorPoolListProto__Output | null);
}
