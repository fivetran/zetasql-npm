// Original file: src/snowflake/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedArgumentProto as _zetasql_ResolvedArgumentProto, ResolvedArgumentProto__Output as _zetasql_ResolvedArgumentProto__Output } from '../zetasql/ResolvedArgumentProto';
import type { FunctionSignatureProto as _zetasql_FunctionSignatureProto, FunctionSignatureProto__Output as _zetasql_FunctionSignatureProto__Output } from '../zetasql/FunctionSignatureProto';

export interface ResolvedFunctionSignatureHolderProto {
  'parent'?: (_zetasql_ResolvedArgumentProto | null);
  'signature'?: (_zetasql_FunctionSignatureProto | null);
}

export interface ResolvedFunctionSignatureHolderProto__Output {
  'parent': (_zetasql_ResolvedArgumentProto__Output | null);
  'signature': (_zetasql_FunctionSignatureProto__Output | null);
}
