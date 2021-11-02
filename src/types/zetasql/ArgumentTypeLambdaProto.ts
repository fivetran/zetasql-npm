// Original file: src/protos/zetasql/proto/function.proto

import type { FunctionArgumentTypeProto as _zetasql_FunctionArgumentTypeProto, FunctionArgumentTypeProto__Output as _zetasql_FunctionArgumentTypeProto__Output } from '../zetasql/FunctionArgumentTypeProto';

export interface ArgumentTypeLambdaProto {
  'argument'?: (_zetasql_FunctionArgumentTypeProto)[];
  'body'?: (_zetasql_FunctionArgumentTypeProto | null);
}

export interface ArgumentTypeLambdaProto__Output {
  'argument': (_zetasql_FunctionArgumentTypeProto__Output)[];
  'body': (_zetasql_FunctionArgumentTypeProto__Output | null);
}
