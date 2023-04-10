// Original file: src/snowflake/protos/local_service.proto

import type { PreparedModifyState as _zetasql_local_service_PreparedModifyState, PreparedModifyState__Output as _zetasql_local_service_PreparedModifyState__Output } from '../../zetasql/local_service/PreparedModifyState';
import type { ValueProto as _zetasql_ValueProto, ValueProto__Output as _zetasql_ValueProto__Output } from '../../zetasql/ValueProto';

// Original file: src/snowflake/protos/local_service.proto

export const _zetasql_local_service_EvaluateModifyResponse_Row_Operation = {
  UNKNOWN: 0,
  INSERT: 1,
  DELETE: 2,
  UPDATE: 3,
} as const;

export type _zetasql_local_service_EvaluateModifyResponse_Row_Operation =
  | 'UNKNOWN'
  | 0
  | 'INSERT'
  | 1
  | 'DELETE'
  | 2
  | 'UPDATE'
  | 3

export type _zetasql_local_service_EvaluateModifyResponse_Row_Operation__Output = typeof _zetasql_local_service_EvaluateModifyResponse_Row_Operation[keyof typeof _zetasql_local_service_EvaluateModifyResponse_Row_Operation]

export interface _zetasql_local_service_EvaluateModifyResponse_Row {
  'operation'?: (_zetasql_local_service_EvaluateModifyResponse_Row_Operation);
  'cell'?: (_zetasql_ValueProto)[];
  'oldPrimaryKey'?: (_zetasql_ValueProto)[];
}

export interface _zetasql_local_service_EvaluateModifyResponse_Row__Output {
  'operation': (_zetasql_local_service_EvaluateModifyResponse_Row_Operation__Output);
  'cell': (_zetasql_ValueProto__Output)[];
  'oldPrimaryKey': (_zetasql_ValueProto__Output)[];
}

export interface EvaluateModifyResponse {
  'tableName'?: (string);
  'content'?: (_zetasql_local_service_EvaluateModifyResponse_Row)[];
  'prepared'?: (_zetasql_local_service_PreparedModifyState | null);
}

export interface EvaluateModifyResponse__Output {
  'tableName': (string);
  'content': (_zetasql_local_service_EvaluateModifyResponse_Row__Output)[];
  'prepared': (_zetasql_local_service_PreparedModifyState__Output | null);
}
