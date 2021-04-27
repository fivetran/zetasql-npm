// Original file: protos/local_service.proto

import type { SimpleCatalogProto as _zetasql_SimpleCatalogProto, SimpleCatalogProto__Output as _zetasql_SimpleCatalogProto__Output } from '../../zetasql/SimpleCatalogProto';
import type { FileDescriptorSet as _google_protobuf_FileDescriptorSet, FileDescriptorSet__Output as _google_protobuf_FileDescriptorSet__Output } from '../../google/protobuf/FileDescriptorSet';

export interface RegisterCatalogRequest {
  'simpleCatalog'?: (_zetasql_SimpleCatalogProto | null);
  'fileDescriptorSet'?: (_google_protobuf_FileDescriptorSet)[];
}

export interface RegisterCatalogRequest__Output {
  'simpleCatalog': (_zetasql_SimpleCatalogProto__Output | null);
  'fileDescriptorSet': (_google_protobuf_FileDescriptorSet__Output)[];
}
