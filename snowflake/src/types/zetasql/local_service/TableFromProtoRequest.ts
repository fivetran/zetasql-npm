// Original file: src/zetasql-snowflake/protos/local_service.proto

import type { ProtoTypeProto as _zetasql_ProtoTypeProto, ProtoTypeProto__Output as _zetasql_ProtoTypeProto__Output } from '../../zetasql/ProtoTypeProto';
import type { FileDescriptorSet as _google_protobuf_FileDescriptorSet, FileDescriptorSet__Output as _google_protobuf_FileDescriptorSet__Output } from '../../google/protobuf/FileDescriptorSet';

export interface TableFromProtoRequest {
  'proto'?: (_zetasql_ProtoTypeProto | null);
  'fileDescriptorSet'?: (_google_protobuf_FileDescriptorSet | null);
}

export interface TableFromProtoRequest__Output {
  'proto': (_zetasql_ProtoTypeProto__Output | null);
  'fileDescriptorSet': (_google_protobuf_FileDescriptorSet__Output | null);
}
