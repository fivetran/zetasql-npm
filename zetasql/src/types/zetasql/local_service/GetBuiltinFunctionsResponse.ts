// Original file: src/zetasql/protos/local_service.proto

import type { FunctionProto as _zetasql_FunctionProto, FunctionProto__Output as _zetasql_FunctionProto__Output } from '../../zetasql/FunctionProto';
import type { TypeProto as _zetasql_TypeProto, TypeProto__Output as _zetasql_TypeProto__Output } from '../../zetasql/TypeProto';

export interface GetBuiltinFunctionsResponse {
  'function'?: (_zetasql_FunctionProto)[];
  'types'?: ({[key: string]: _zetasql_TypeProto});
}

export interface GetBuiltinFunctionsResponse__Output {
  'function': (_zetasql_FunctionProto__Output)[];
  'types': ({[key: string]: _zetasql_TypeProto__Output});
}
