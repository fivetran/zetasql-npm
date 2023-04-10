// Original file: src/zetasql/protos/local_service.proto

import type { FileDescriptorSet as _google_protobuf_FileDescriptorSet, FileDescriptorSet__Output as _google_protobuf_FileDescriptorSet__Output } from '../../google/protobuf/FileDescriptorSet';
import type { Long } from '@grpc/proto-loader';

export interface _zetasql_local_service_DescriptorPoolListProto_Builtin {
}

export interface _zetasql_local_service_DescriptorPoolListProto_Builtin__Output {
}

export interface _zetasql_local_service_DescriptorPoolListProto_Definition {
  'fileDescriptorSet'?: (_google_protobuf_FileDescriptorSet | null);
  'registeredId'?: (number | string | Long);
  'builtin'?: (_zetasql_local_service_DescriptorPoolListProto_Builtin | null);
  'definition'?: "fileDescriptorSet"|"registeredId"|"builtin";
}

export interface _zetasql_local_service_DescriptorPoolListProto_Definition__Output {
  'fileDescriptorSet'?: (_google_protobuf_FileDescriptorSet__Output | null);
  'registeredId'?: (Long);
  'builtin'?: (_zetasql_local_service_DescriptorPoolListProto_Builtin__Output | null);
  'definition': "fileDescriptorSet"|"registeredId"|"builtin";
}

export interface DescriptorPoolListProto {
  'definitions'?: (_zetasql_local_service_DescriptorPoolListProto_Definition)[];
}

export interface DescriptorPoolListProto__Output {
  'definitions': (_zetasql_local_service_DescriptorPoolListProto_Definition__Output)[];
}
