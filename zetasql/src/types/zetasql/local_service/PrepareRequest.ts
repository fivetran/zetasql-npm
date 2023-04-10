// Original file: src/zetasql/protos/local_service.proto

import type { AnalyzerOptionsProto as _zetasql_AnalyzerOptionsProto, AnalyzerOptionsProto__Output as _zetasql_AnalyzerOptionsProto__Output } from '../../zetasql/AnalyzerOptionsProto';
import type { SimpleCatalogProto as _zetasql_SimpleCatalogProto, SimpleCatalogProto__Output as _zetasql_SimpleCatalogProto__Output } from '../../zetasql/SimpleCatalogProto';
import type { DescriptorPoolListProto as _zetasql_local_service_DescriptorPoolListProto, DescriptorPoolListProto__Output as _zetasql_local_service_DescriptorPoolListProto__Output } from '../../zetasql/local_service/DescriptorPoolListProto';
import type { Long } from '@grpc/proto-loader';

export interface PrepareRequest {
  'sql'?: (string);
  'options'?: (_zetasql_AnalyzerOptionsProto | null);
  'simpleCatalog'?: (_zetasql_SimpleCatalogProto | null);
  'registeredCatalogId'?: (number | string | Long);
  'descriptorPoolList'?: (_zetasql_local_service_DescriptorPoolListProto | null);
}

export interface PrepareRequest__Output {
  'sql': (string);
  'options': (_zetasql_AnalyzerOptionsProto__Output | null);
  'simpleCatalog': (_zetasql_SimpleCatalogProto__Output | null);
  'registeredCatalogId': (Long);
  'descriptorPoolList': (_zetasql_local_service_DescriptorPoolListProto__Output | null);
}
