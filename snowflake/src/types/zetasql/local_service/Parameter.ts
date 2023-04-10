// Original file: src/snowflake/protos/local_service.proto

import type { ValueProto as _zetasql_ValueProto, ValueProto__Output as _zetasql_ValueProto__Output } from '../../zetasql/ValueProto';

export interface Parameter {
  'name'?: (string);
  'value'?: (_zetasql_ValueProto | null);
}

export interface Parameter__Output {
  'name': (string);
  'value': (_zetasql_ValueProto__Output | null);
}
