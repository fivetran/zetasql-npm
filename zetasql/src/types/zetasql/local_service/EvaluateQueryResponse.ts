// Original file: src/zetasql/protos/local_service.proto

import type { TableContent as _zetasql_local_service_TableContent, TableContent__Output as _zetasql_local_service_TableContent__Output } from '../../zetasql/local_service/TableContent';
import type { PreparedQueryState as _zetasql_local_service_PreparedQueryState, PreparedQueryState__Output as _zetasql_local_service_PreparedQueryState__Output } from '../../zetasql/local_service/PreparedQueryState';

export interface EvaluateQueryResponse {
  'content'?: (_zetasql_local_service_TableContent | null);
  'prepared'?: (_zetasql_local_service_PreparedQueryState | null);
}

export interface EvaluateQueryResponse__Output {
  'content': (_zetasql_local_service_TableContent__Output | null);
  'prepared': (_zetasql_local_service_PreparedQueryState__Output | null);
}
