// Original file: src/zetasql-snowflake/protos/local_service.proto

import type { ValueProto as _zetasql_ValueProto, ValueProto__Output as _zetasql_ValueProto__Output } from '../../zetasql/ValueProto';

export interface _zetasql_local_service_TableData_Row {
  'cell'?: (_zetasql_ValueProto)[];
}

export interface _zetasql_local_service_TableData_Row__Output {
  'cell': (_zetasql_ValueProto__Output)[];
}

export interface TableData {
  'row'?: (_zetasql_local_service_TableData_Row)[];
}

export interface TableData__Output {
  'row': (_zetasql_local_service_TableData_Row__Output)[];
}
