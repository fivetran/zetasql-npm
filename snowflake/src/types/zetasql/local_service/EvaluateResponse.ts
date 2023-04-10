// Original file: src/zetasql-snowflake/protos/local_service.proto

import type { ValueProto as _zetasql_ValueProto, ValueProto__Output as _zetasql_ValueProto__Output } from '../../zetasql/ValueProto';
import type { PreparedState as _zetasql_local_service_PreparedState, PreparedState__Output as _zetasql_local_service_PreparedState__Output } from '../../zetasql/local_service/PreparedState';

export interface EvaluateResponse {
  'value'?: (_zetasql_ValueProto | null);
  'prepared'?: (_zetasql_local_service_PreparedState | null);
}

export interface EvaluateResponse__Output {
  'value': (_zetasql_ValueProto__Output | null);
  'prepared': (_zetasql_local_service_PreparedState__Output | null);
}
