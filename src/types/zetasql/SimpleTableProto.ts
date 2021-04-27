// Original file: protos/zetasql/public/simple_table.proto

import type { SimpleColumnProto as _zetasql_SimpleColumnProto, SimpleColumnProto__Output as _zetasql_SimpleColumnProto__Output } from '../zetasql/SimpleColumnProto';
import type { SimpleAnonymizationInfoProto as _zetasql_SimpleAnonymizationInfoProto, SimpleAnonymizationInfoProto__Output as _zetasql_SimpleAnonymizationInfoProto__Output } from '../zetasql/SimpleAnonymizationInfoProto';
import type { Long } from '@grpc/proto-loader';

export interface SimpleTableProto {
  'name'?: (string);
  'serializationId'?: (number | string | Long);
  'isValueTable'?: (boolean);
  'column'?: (_zetasql_SimpleColumnProto)[];
  'nameInCatalog'?: (string);
  'allowAnonymousColumnName'?: (boolean);
  'allowDuplicateColumnNames'?: (boolean);
  'anonymizationInfo'?: (_zetasql_SimpleAnonymizationInfoProto | null);
  'primaryKeyColumnIndex'?: (number)[];
}

export interface SimpleTableProto__Output {
  'name': (string);
  'serializationId': (Long);
  'isValueTable': (boolean);
  'column': (_zetasql_SimpleColumnProto__Output)[];
  'nameInCatalog': (string);
  'allowAnonymousColumnName': (boolean);
  'allowDuplicateColumnNames': (boolean);
  'anonymizationInfo': (_zetasql_SimpleAnonymizationInfoProto__Output | null);
  'primaryKeyColumnIndex': (number)[];
}
