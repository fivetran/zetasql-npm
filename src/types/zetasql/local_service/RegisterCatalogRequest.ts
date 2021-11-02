// Original file: src/protos/local_service.proto

import type { SimpleCatalogProto as _zetasql_SimpleCatalogProto, SimpleCatalogProto__Output as _zetasql_SimpleCatalogProto__Output } from '../../zetasql/SimpleCatalogProto';
import type { DescriptorPoolListProto as _zetasql_local_service_DescriptorPoolListProto, DescriptorPoolListProto__Output as _zetasql_local_service_DescriptorPoolListProto__Output } from '../../zetasql/local_service/DescriptorPoolListProto';

export interface RegisterCatalogRequest {
  'simpleCatalog'?: (_zetasql_SimpleCatalogProto | null);
  'descriptorPoolList'?: (_zetasql_local_service_DescriptorPoolListProto | null);
}

export interface RegisterCatalogRequest__Output {
  'simpleCatalog': (_zetasql_SimpleCatalogProto__Output | null);
  'descriptorPoolList': (_zetasql_local_service_DescriptorPoolListProto__Output | null);
}
