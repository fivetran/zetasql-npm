// Original file: src/zetasql/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedStatementProto as _zetasql_ResolvedStatementProto, ResolvedStatementProto__Output as _zetasql_ResolvedStatementProto__Output } from '../zetasql/ResolvedStatementProto';
import type { ResolvedArgumentListProto as _zetasql_ResolvedArgumentListProto, ResolvedArgumentListProto__Output as _zetasql_ResolvedArgumentListProto__Output } from '../zetasql/ResolvedArgumentListProto';
import type { ResolvedFunctionSignatureHolderProto as _zetasql_ResolvedFunctionSignatureHolderProto, ResolvedFunctionSignatureHolderProto__Output as _zetasql_ResolvedFunctionSignatureHolderProto__Output } from '../zetasql/ResolvedFunctionSignatureHolderProto';

export interface ResolvedDropFunctionStmtProto {
  'parent'?: (_zetasql_ResolvedStatementProto | null);
  'isIfExists'?: (boolean);
  'namePath'?: (string)[];
  'arguments'?: (_zetasql_ResolvedArgumentListProto | null);
  'signature'?: (_zetasql_ResolvedFunctionSignatureHolderProto | null);
}

export interface ResolvedDropFunctionStmtProto__Output {
  'parent': (_zetasql_ResolvedStatementProto__Output | null);
  'isIfExists': (boolean);
  'namePath': (string)[];
  'arguments': (_zetasql_ResolvedArgumentListProto__Output | null);
  'signature': (_zetasql_ResolvedFunctionSignatureHolderProto__Output | null);
}
