// Original file: src/zetasql/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedScanProto as _zetasql_ResolvedScanProto, ResolvedScanProto__Output as _zetasql_ResolvedScanProto__Output } from '../zetasql/ResolvedScanProto';
import type { TableValuedFunctionRefProto as _zetasql_TableValuedFunctionRefProto, TableValuedFunctionRefProto__Output as _zetasql_TableValuedFunctionRefProto__Output } from '../zetasql/TableValuedFunctionRefProto';
import type { TVFSignatureProto as _zetasql_TVFSignatureProto, TVFSignatureProto__Output as _zetasql_TVFSignatureProto__Output } from '../zetasql/TVFSignatureProto';
import type { ResolvedFunctionArgumentProto as _zetasql_ResolvedFunctionArgumentProto, ResolvedFunctionArgumentProto__Output as _zetasql_ResolvedFunctionArgumentProto__Output } from '../zetasql/ResolvedFunctionArgumentProto';
import type { FunctionSignatureProto as _zetasql_FunctionSignatureProto, FunctionSignatureProto__Output as _zetasql_FunctionSignatureProto__Output } from '../zetasql/FunctionSignatureProto';
import type { Long } from '@grpc/proto-loader';

export interface ResolvedTVFScanProto {
  'parent'?: (_zetasql_ResolvedScanProto | null);
  'tvf'?: (_zetasql_TableValuedFunctionRefProto | null);
  'signature'?: (_zetasql_TVFSignatureProto | null);
  'argumentList'?: (_zetasql_ResolvedFunctionArgumentProto)[];
  'alias'?: (string);
  'functionCallSignature'?: (_zetasql_FunctionSignatureProto | null);
  'columnIndexList'?: (number | string | Long)[];
}

export interface ResolvedTVFScanProto__Output {
  'parent': (_zetasql_ResolvedScanProto__Output | null);
  'tvf': (_zetasql_TableValuedFunctionRefProto__Output | null);
  'signature': (_zetasql_TVFSignatureProto__Output | null);
  'argumentList': (_zetasql_ResolvedFunctionArgumentProto__Output)[];
  'alias': (string);
  'functionCallSignature': (_zetasql_FunctionSignatureProto__Output | null);
  'columnIndexList': (Long)[];
}
