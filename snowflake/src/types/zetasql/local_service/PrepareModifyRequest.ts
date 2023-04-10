// Original file: src/snowflake/protos/local_service.proto

import type { AnalyzerOptionsProto as _zetasql_AnalyzerOptionsProto, AnalyzerOptionsProto__Output as _zetasql_AnalyzerOptionsProto__Output } from '../../zetasql/AnalyzerOptionsProto';
import type { DescriptorPoolListProto as _zetasql_local_service_DescriptorPoolListProto, DescriptorPoolListProto__Output as _zetasql_local_service_DescriptorPoolListProto__Output } from '../../zetasql/local_service/DescriptorPoolListProto';
import type { SimpleCatalogProto as _zetasql_SimpleCatalogProto, SimpleCatalogProto__Output as _zetasql_SimpleCatalogProto__Output } from '../../zetasql/SimpleCatalogProto';
import type { TableContent as _zetasql_local_service_TableContent, TableContent__Output as _zetasql_local_service_TableContent__Output } from '../../zetasql/local_service/TableContent';
import type { Long } from '@grpc/proto-loader';

export interface PrepareModifyRequest {
  'sql'?: (string);
  'options'?: (_zetasql_AnalyzerOptionsProto | null);
  'descriptorPoolList'?: (_zetasql_local_service_DescriptorPoolListProto | null);
  'simpleCatalog'?: (_zetasql_SimpleCatalogProto | null);
  'registeredCatalogId'?: (number | string | Long);
  'tableContent'?: ({[key: string]: _zetasql_local_service_TableContent});
  'catalog'?: "simpleCatalog"|"registeredCatalogId";
}

export interface PrepareModifyRequest__Output {
  'sql': (string);
  'options': (_zetasql_AnalyzerOptionsProto__Output | null);
  'descriptorPoolList': (_zetasql_local_service_DescriptorPoolListProto__Output | null);
  'simpleCatalog'?: (_zetasql_SimpleCatalogProto__Output | null);
  'registeredCatalogId'?: (Long);
  'tableContent': ({[key: string]: _zetasql_local_service_TableContent__Output});
  'catalog': "simpleCatalog"|"registeredCatalogId";
}
