// Original file: src/snowflake/protos/zetasql/proto/function.proto

import type { FunctionSignatureProto as _zetasql_FunctionSignatureProto, FunctionSignatureProto__Output as _zetasql_FunctionSignatureProto__Output } from '../zetasql/FunctionSignatureProto';

export interface ProcedureProto {
  'namePath'?: (string)[];
  'signature'?: (_zetasql_FunctionSignatureProto | null);
}

export interface ProcedureProto__Output {
  'namePath': (string)[];
  'signature': (_zetasql_FunctionSignatureProto__Output | null);
}
