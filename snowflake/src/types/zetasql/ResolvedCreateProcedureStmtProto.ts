// Original file: src/snowflake/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedCreateStatementProto as _zetasql_ResolvedCreateStatementProto, ResolvedCreateStatementProto__Output as _zetasql_ResolvedCreateStatementProto__Output } from '../zetasql/ResolvedCreateStatementProto';
import type { FunctionSignatureProto as _zetasql_FunctionSignatureProto, FunctionSignatureProto__Output as _zetasql_FunctionSignatureProto__Output } from '../zetasql/FunctionSignatureProto';
import type { ResolvedOptionProto as _zetasql_ResolvedOptionProto, ResolvedOptionProto__Output as _zetasql_ResolvedOptionProto__Output } from '../zetasql/ResolvedOptionProto';
import type { ResolvedConnectionProto as _zetasql_ResolvedConnectionProto, ResolvedConnectionProto__Output as _zetasql_ResolvedConnectionProto__Output } from '../zetasql/ResolvedConnectionProto';
import type { _zetasql_ResolvedCreateStatementEnums_SqlSecurity, _zetasql_ResolvedCreateStatementEnums_SqlSecurity__Output } from '../zetasql/ResolvedCreateStatementEnums';

export interface ResolvedCreateProcedureStmtProto {
  'parent'?: (_zetasql_ResolvedCreateStatementProto | null);
  'argumentNameList'?: (string)[];
  'signature'?: (_zetasql_FunctionSignatureProto | null);
  'optionList'?: (_zetasql_ResolvedOptionProto)[];
  'procedureBody'?: (string);
  'connection'?: (_zetasql_ResolvedConnectionProto | null);
  'language'?: (string);
  'code'?: (string);
  'externalSecurity'?: (_zetasql_ResolvedCreateStatementEnums_SqlSecurity);
}

export interface ResolvedCreateProcedureStmtProto__Output {
  'parent': (_zetasql_ResolvedCreateStatementProto__Output | null);
  'argumentNameList': (string)[];
  'signature': (_zetasql_FunctionSignatureProto__Output | null);
  'optionList': (_zetasql_ResolvedOptionProto__Output)[];
  'procedureBody': (string);
  'connection': (_zetasql_ResolvedConnectionProto__Output | null);
  'language': (string);
  'code': (string);
  'externalSecurity': (_zetasql_ResolvedCreateStatementEnums_SqlSecurity__Output);
}
