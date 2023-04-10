// Original file: src/zetasql/protos/zetasql/proto/function.proto

import type { SignatureArgumentKind as _zetasql_SignatureArgumentKind, SignatureArgumentKind__Output as _zetasql_SignatureArgumentKind__Output } from '../zetasql/SignatureArgumentKind';
import type { TypeProto as _zetasql_TypeProto, TypeProto__Output as _zetasql_TypeProto__Output } from '../zetasql/TypeProto';
import type { FunctionArgumentTypeOptionsProto as _zetasql_FunctionArgumentTypeOptionsProto, FunctionArgumentTypeOptionsProto__Output as _zetasql_FunctionArgumentTypeOptionsProto__Output } from '../zetasql/FunctionArgumentTypeOptionsProto';
import type { ArgumentTypeLambdaProto as _zetasql_ArgumentTypeLambdaProto, ArgumentTypeLambdaProto__Output as _zetasql_ArgumentTypeLambdaProto__Output } from '../zetasql/ArgumentTypeLambdaProto';

export interface FunctionArgumentTypeProto {
  'kind'?: (_zetasql_SignatureArgumentKind);
  'type'?: (_zetasql_TypeProto | null);
  'options'?: (_zetasql_FunctionArgumentTypeOptionsProto | null);
  'numOccurrences'?: (number);
  'lambda'?: (_zetasql_ArgumentTypeLambdaProto | null);
}

export interface FunctionArgumentTypeProto__Output {
  'kind': (_zetasql_SignatureArgumentKind__Output);
  'type': (_zetasql_TypeProto__Output | null);
  'options': (_zetasql_FunctionArgumentTypeOptionsProto__Output | null);
  'numOccurrences': (number);
  'lambda': (_zetasql_ArgumentTypeLambdaProto__Output | null);
}
