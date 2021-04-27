// Original file: protos/local_service.proto

import type { AnalyzerOptionsProto as _zetasql_AnalyzerOptionsProto, AnalyzerOptionsProto__Output as _zetasql_AnalyzerOptionsProto__Output } from '../../zetasql/AnalyzerOptionsProto';
import type { FileDescriptorSet as _google_protobuf_FileDescriptorSet, FileDescriptorSet__Output as _google_protobuf_FileDescriptorSet__Output } from '../../google/protobuf/FileDescriptorSet';
import type { SimpleCatalogProto as _zetasql_SimpleCatalogProto, SimpleCatalogProto__Output as _zetasql_SimpleCatalogProto__Output } from '../../zetasql/SimpleCatalogProto';
import type { Long } from '@grpc/proto-loader';

export interface PrepareRequest {
  'sql'?: (string);
  'options'?: (_zetasql_AnalyzerOptionsProto | null);
  'fileDescriptorSet'?: (_google_protobuf_FileDescriptorSet)[];
  'simpleCatalog'?: (_zetasql_SimpleCatalogProto | null);
  'registeredCatalogId'?: (number | string | Long);
}

export interface PrepareRequest__Output {
  'sql': (string);
  'options': (_zetasql_AnalyzerOptionsProto__Output | null);
  'fileDescriptorSet': (_google_protobuf_FileDescriptorSet__Output)[];
  'simpleCatalog': (_zetasql_SimpleCatalogProto__Output | null);
  'registeredCatalogId': (Long);
}
