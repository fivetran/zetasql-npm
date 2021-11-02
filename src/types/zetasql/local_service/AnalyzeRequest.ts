// Original file: src/protos/local_service.proto

import type { AnalyzerOptionsProto as _zetasql_AnalyzerOptionsProto, AnalyzerOptionsProto__Output as _zetasql_AnalyzerOptionsProto__Output } from '../../zetasql/AnalyzerOptionsProto';
import type { SimpleCatalogProto as _zetasql_SimpleCatalogProto, SimpleCatalogProto__Output as _zetasql_SimpleCatalogProto__Output } from '../../zetasql/SimpleCatalogProto';
import type { ParseResumeLocationProto as _zetasql_ParseResumeLocationProto, ParseResumeLocationProto__Output as _zetasql_ParseResumeLocationProto__Output } from '../../zetasql/ParseResumeLocationProto';
import type { DescriptorPoolListProto as _zetasql_local_service_DescriptorPoolListProto, DescriptorPoolListProto__Output as _zetasql_local_service_DescriptorPoolListProto__Output } from '../../zetasql/local_service/DescriptorPoolListProto';
import type { Long } from '@grpc/proto-loader';

export interface AnalyzeRequest {
  'options'?: (_zetasql_AnalyzerOptionsProto | null);
  'simpleCatalog'?: (_zetasql_SimpleCatalogProto | null);
  'registeredCatalogId'?: (number | string | Long);
  'sqlStatement'?: (string);
  'parseResumeLocation'?: (_zetasql_ParseResumeLocationProto | null);
  'sqlExpression'?: (string);
  'descriptorPoolList'?: (_zetasql_local_service_DescriptorPoolListProto | null);
  'target'?: "sqlStatement"|"parseResumeLocation"|"sqlExpression";
}

export interface AnalyzeRequest__Output {
  'options': (_zetasql_AnalyzerOptionsProto__Output | null);
  'simpleCatalog': (_zetasql_SimpleCatalogProto__Output | null);
  'registeredCatalogId': (Long);
  'sqlStatement'?: (string);
  'parseResumeLocation'?: (_zetasql_ParseResumeLocationProto__Output | null);
  'sqlExpression'?: (string);
  'descriptorPoolList': (_zetasql_local_service_DescriptorPoolListProto__Output | null);
  'target': "sqlStatement"|"parseResumeLocation"|"sqlExpression";
}
