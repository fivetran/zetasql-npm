// Original file: src/zetasql/protos/zetasql/proto/function.proto

import type { FunctionArgumentTypeProto as _zetasql_FunctionArgumentTypeProto, FunctionArgumentTypeProto__Output as _zetasql_FunctionArgumentTypeProto__Output } from '../zetasql/FunctionArgumentTypeProto';
import type { FunctionSignatureOptionsProto as _zetasql_FunctionSignatureOptionsProto, FunctionSignatureOptionsProto__Output as _zetasql_FunctionSignatureOptionsProto__Output } from '../zetasql/FunctionSignatureOptionsProto';
import type { Long } from '@grpc/proto-loader';

export interface FunctionSignatureProto {
  'argument'?: (_zetasql_FunctionArgumentTypeProto)[];
  'returnType'?: (_zetasql_FunctionArgumentTypeProto | null);
  'contextId'?: (number | string | Long);
  'options'?: (_zetasql_FunctionSignatureOptionsProto | null);
}

export interface FunctionSignatureProto__Output {
  'argument': (_zetasql_FunctionArgumentTypeProto__Output)[];
  'returnType': (_zetasql_FunctionArgumentTypeProto__Output | null);
  'contextId': (Long);
  'options': (_zetasql_FunctionSignatureOptionsProto__Output | null);
}
