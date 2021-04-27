// Original file: protos/local_service.proto

import type { FileDescriptorSet as _google_protobuf_FileDescriptorSet, FileDescriptorSet__Output as _google_protobuf_FileDescriptorSet__Output } from '../../google/protobuf/FileDescriptorSet';
import type { AnalyzerOptionsProto as _zetasql_AnalyzerOptionsProto, AnalyzerOptionsProto__Output as _zetasql_AnalyzerOptionsProto__Output } from '../../zetasql/AnalyzerOptionsProto';
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
  'fileDescriptorSet'?: (_google_protobuf_FileDescriptorSet)[];
  'preparedExpressionId'?: (number | string | Long);
  'options'?: (_zetasql_AnalyzerOptionsProto | null);
}

export interface EvaluateRequest__Output {
  'sql': (string);
  'columns': (_zetasql_local_service_EvaluateRequest_Parameter__Output)[];
  'params': (_zetasql_local_service_EvaluateRequest_Parameter__Output)[];
  'fileDescriptorSet': (_google_protobuf_FileDescriptorSet__Output)[];
  'preparedExpressionId': (Long);
  'options': (_zetasql_AnalyzerOptionsProto__Output | null);
}
