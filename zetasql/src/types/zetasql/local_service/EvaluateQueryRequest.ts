// Original file: src/zetasql/protos/local_service.proto

import type { AnalyzerOptionsProto as _zetasql_AnalyzerOptionsProto, AnalyzerOptionsProto__Output as _zetasql_AnalyzerOptionsProto__Output } from '../../zetasql/AnalyzerOptionsProto';
import type { DescriptorPoolListProto as _zetasql_local_service_DescriptorPoolListProto, DescriptorPoolListProto__Output as _zetasql_local_service_DescriptorPoolListProto__Output } from '../../zetasql/local_service/DescriptorPoolListProto';
import type { SimpleCatalogProto as _zetasql_SimpleCatalogProto, SimpleCatalogProto__Output as _zetasql_SimpleCatalogProto__Output } from '../../zetasql/SimpleCatalogProto';
import type { TableContent as _zetasql_local_service_TableContent, TableContent__Output as _zetasql_local_service_TableContent__Output } from '../../zetasql/local_service/TableContent';
import type { Parameter as _zetasql_local_service_Parameter, Parameter__Output as _zetasql_local_service_Parameter__Output } from '../../zetasql/local_service/Parameter';
import type { Long } from '@grpc/proto-loader';

export interface EvaluateQueryRequest {
  'sql'?: (string);
  'options'?: (_zetasql_AnalyzerOptionsProto | null);
  'descriptorPoolList'?: (_zetasql_local_service_DescriptorPoolListProto | null);
  'simpleCatalog'?: (_zetasql_SimpleCatalogProto | null);
  'registeredCatalogId'?: (number | string | Long);
  'preparedQueryId'?: (number | string | Long);
  'tableContent'?: ({[key: string]: _zetasql_local_service_TableContent});
  'params'?: (_zetasql_local_service_Parameter)[];
  'catalog'?: "simpleCatalog"|"registeredCatalogId"|"preparedQueryId";
}

export interface EvaluateQueryRequest__Output {
  'sql': (string);
  'options': (_zetasql_AnalyzerOptionsProto__Output | null);
  'descriptorPoolList': (_zetasql_local_service_DescriptorPoolListProto__Output | null);
  'simpleCatalog'?: (_zetasql_SimpleCatalogProto__Output | null);
  'registeredCatalogId'?: (Long);
  'preparedQueryId'?: (Long);
  'tableContent': ({[key: string]: _zetasql_local_service_TableContent__Output});
  'params': (_zetasql_local_service_Parameter__Output)[];
  'catalog': "simpleCatalog"|"registeredCatalogId"|"preparedQueryId";
}
