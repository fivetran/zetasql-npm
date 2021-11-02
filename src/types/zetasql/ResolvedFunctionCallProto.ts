// Original file: src/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedFunctionCallBaseProto as _zetasql_ResolvedFunctionCallBaseProto, ResolvedFunctionCallBaseProto__Output as _zetasql_ResolvedFunctionCallBaseProto__Output } from '../zetasql/ResolvedFunctionCallBaseProto';
import type { ResolvedFunctionCallInfoProto as _zetasql_ResolvedFunctionCallInfoProto, ResolvedFunctionCallInfoProto__Output as _zetasql_ResolvedFunctionCallInfoProto__Output } from '../zetasql/ResolvedFunctionCallInfoProto';

export interface ResolvedFunctionCallProto {
  'parent'?: (_zetasql_ResolvedFunctionCallBaseProto | null);
  'functionCallInfo'?: (_zetasql_ResolvedFunctionCallInfoProto | null);
}

export interface ResolvedFunctionCallProto__Output {
  'parent': (_zetasql_ResolvedFunctionCallBaseProto__Output | null);
  'functionCallInfo': (_zetasql_ResolvedFunctionCallInfoProto__Output | null);
}
