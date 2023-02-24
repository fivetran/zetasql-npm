// Original file: src/protos/zetasql/proto/function.proto

import type { _zetasql_FunctionEnums_Mode, _zetasql_FunctionEnums_Mode__Output } from '../zetasql/FunctionEnums';
import type { FunctionSignatureProto as _zetasql_FunctionSignatureProto, FunctionSignatureProto__Output as _zetasql_FunctionSignatureProto__Output } from '../zetasql/FunctionSignatureProto';
import type { FunctionOptionsProto as _zetasql_FunctionOptionsProto, FunctionOptionsProto__Output as _zetasql_FunctionOptionsProto__Output } from '../zetasql/FunctionOptionsProto';
import type { ParseResumeLocationProto as _zetasql_ParseResumeLocationProto, ParseResumeLocationProto__Output as _zetasql_ParseResumeLocationProto__Output } from '../zetasql/ParseResumeLocationProto';
import type { _zetasql_ResolvedCreateStatementEnums_SqlSecurity, _zetasql_ResolvedCreateStatementEnums_SqlSecurity__Output } from '../zetasql/ResolvedCreateStatementEnums';

export interface FunctionProto {
  'namePath'?: (string)[];
  'group'?: (string);
  'mode'?: (_zetasql_FunctionEnums_Mode);
  'signature'?: (_zetasql_FunctionSignatureProto)[];
  'options'?: (_zetasql_FunctionOptionsProto | null);
  'templatedSqlFunctionArgumentName'?: (string)[];
  'parseResumeLocation'?: (_zetasql_ParseResumeLocationProto | null);
  'sqlSecurity'?: (_zetasql_ResolvedCreateStatementEnums_SqlSecurity);
}

export interface FunctionProto__Output {
  'namePath': (string)[];
  'group': (string);
  'mode': (_zetasql_FunctionEnums_Mode__Output);
  'signature': (_zetasql_FunctionSignatureProto__Output)[];
  'options': (_zetasql_FunctionOptionsProto__Output | null);
  'templatedSqlFunctionArgumentName': (string)[];
  'parseResumeLocation': (_zetasql_ParseResumeLocationProto__Output | null);
  'sqlSecurity': (_zetasql_ResolvedCreateStatementEnums_SqlSecurity__Output);
}
