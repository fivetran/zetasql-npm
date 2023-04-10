// Original file: src/zetasql-snowflake/protos/zetasql/public/simple_constant.proto

import type { TypeProto as _zetasql_TypeProto, TypeProto__Output as _zetasql_TypeProto__Output } from '../zetasql/TypeProto';
import type { ValueProto as _zetasql_ValueProto, ValueProto__Output as _zetasql_ValueProto__Output } from '../zetasql/ValueProto';

export interface SimpleConstantProto {
  'namePath'?: (string)[];
  'type'?: (_zetasql_TypeProto | null);
  'value'?: (_zetasql_ValueProto | null);
}

export interface SimpleConstantProto__Output {
  'namePath': (string)[];
  'type': (_zetasql_TypeProto__Output | null);
  'value': (_zetasql_ValueProto__Output | null);
}
