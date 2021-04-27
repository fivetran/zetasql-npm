// Original file: protos/local_service.proto

import type { SimpleCatalogProto as _zetasql_SimpleCatalogProto, SimpleCatalogProto__Output as _zetasql_SimpleCatalogProto__Output } from '../../zetasql/SimpleCatalogProto';
import type { FileDescriptorSet as _google_protobuf_FileDescriptorSet, FileDescriptorSet__Output as _google_protobuf_FileDescriptorSet__Output } from '../../google/protobuf/FileDescriptorSet';
import type { AnyResolvedStatementProto as _zetasql_AnyResolvedStatementProto, AnyResolvedStatementProto__Output as _zetasql_AnyResolvedStatementProto__Output } from '../../zetasql/AnyResolvedStatementProto';
import type { AnyResolvedExprProto as _zetasql_AnyResolvedExprProto, AnyResolvedExprProto__Output as _zetasql_AnyResolvedExprProto__Output } from '../../zetasql/AnyResolvedExprProto';
import type { DescriptorPoolListProto as _zetasql_local_service_DescriptorPoolListProto, DescriptorPoolListProto__Output as _zetasql_local_service_DescriptorPoolListProto__Output } from '../../zetasql/local_service/DescriptorPoolListProto';
import type { Long } from '@grpc/proto-loader';

export interface BuildSqlRequest {
  'simpleCatalog'?: (_zetasql_SimpleCatalogProto | null);
  'fileDescriptorSet'?: (_google_protobuf_FileDescriptorSet)[];
  'registeredCatalogId'?: (number | string | Long);
  'resolvedStatement'?: (_zetasql_AnyResolvedStatementProto | null);
  'resolvedExpression'?: (_zetasql_AnyResolvedExprProto | null);
  'descriptorPoolList'?: (_zetasql_local_service_DescriptorPoolListProto | null);
  'target'?: "resolvedStatement"|"resolvedExpression";
}

export interface BuildSqlRequest__Output {
  'simpleCatalog': (_zetasql_SimpleCatalogProto__Output | null);
  'fileDescriptorSet': (_google_protobuf_FileDescriptorSet__Output)[];
  'registeredCatalogId': (Long);
  'resolvedStatement'?: (_zetasql_AnyResolvedStatementProto__Output | null);
  'resolvedExpression'?: (_zetasql_AnyResolvedExprProto__Output | null);
  'descriptorPoolList': (_zetasql_local_service_DescriptorPoolListProto__Output | null);
  'target': "resolvedStatement"|"resolvedExpression";
}
