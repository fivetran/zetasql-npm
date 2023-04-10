// Original file: src/zetasql/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedStatementProto as _zetasql_ResolvedStatementProto, ResolvedStatementProto__Output as _zetasql_ResolvedStatementProto__Output } from '../zetasql/ResolvedStatementProto';
import type { ProcedureRefProto as _zetasql_ProcedureRefProto, ProcedureRefProto__Output as _zetasql_ProcedureRefProto__Output } from '../zetasql/ProcedureRefProto';
import type { FunctionSignatureProto as _zetasql_FunctionSignatureProto, FunctionSignatureProto__Output as _zetasql_FunctionSignatureProto__Output } from '../zetasql/FunctionSignatureProto';
import type { AnyResolvedExprProto as _zetasql_AnyResolvedExprProto, AnyResolvedExprProto__Output as _zetasql_AnyResolvedExprProto__Output } from '../zetasql/AnyResolvedExprProto';

export interface ResolvedCallStmtProto {
  'parent'?: (_zetasql_ResolvedStatementProto | null);
  'procedure'?: (_zetasql_ProcedureRefProto | null);
  'signature'?: (_zetasql_FunctionSignatureProto | null);
  'argumentList'?: (_zetasql_AnyResolvedExprProto)[];
}

export interface ResolvedCallStmtProto__Output {
  'parent': (_zetasql_ResolvedStatementProto__Output | null);
  'procedure': (_zetasql_ProcedureRefProto__Output | null);
  'signature': (_zetasql_FunctionSignatureProto__Output | null);
  'argumentList': (_zetasql_AnyResolvedExprProto__Output)[];
}
