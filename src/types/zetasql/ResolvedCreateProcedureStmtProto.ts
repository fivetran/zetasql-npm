// Original file: src/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedCreateStatementProto as _zetasql_ResolvedCreateStatementProto, ResolvedCreateStatementProto__Output as _zetasql_ResolvedCreateStatementProto__Output } from '../zetasql/ResolvedCreateStatementProto';
import type { FunctionSignatureProto as _zetasql_FunctionSignatureProto, FunctionSignatureProto__Output as _zetasql_FunctionSignatureProto__Output } from '../zetasql/FunctionSignatureProto';
import type { ResolvedOptionProto as _zetasql_ResolvedOptionProto, ResolvedOptionProto__Output as _zetasql_ResolvedOptionProto__Output } from '../zetasql/ResolvedOptionProto';

export interface ResolvedCreateProcedureStmtProto {
  'parent'?: (_zetasql_ResolvedCreateStatementProto | null);
  'argumentNameList'?: (string)[];
  'signature'?: (_zetasql_FunctionSignatureProto | null);
  'optionList'?: (_zetasql_ResolvedOptionProto)[];
  'procedureBody'?: (string);
}

export interface ResolvedCreateProcedureStmtProto__Output {
  'parent': (_zetasql_ResolvedCreateStatementProto__Output | null);
  'argumentNameList': (string)[];
  'signature': (_zetasql_FunctionSignatureProto__Output | null);
  'optionList': (_zetasql_ResolvedOptionProto__Output)[];
  'procedureBody': (string);
}
