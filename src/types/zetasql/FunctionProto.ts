// Original file: protos/zetasql/proto/function.proto

import type { _zetasql_FunctionEnums_Mode } from '../zetasql/FunctionEnums';
import type { FunctionSignatureProto as _zetasql_FunctionSignatureProto, FunctionSignatureProto__Output as _zetasql_FunctionSignatureProto__Output } from '../zetasql/FunctionSignatureProto';
import type { FunctionOptionsProto as _zetasql_FunctionOptionsProto, FunctionOptionsProto__Output as _zetasql_FunctionOptionsProto__Output } from '../zetasql/FunctionOptionsProto';
import type { ParseResumeLocationProto as _zetasql_ParseResumeLocationProto, ParseResumeLocationProto__Output as _zetasql_ParseResumeLocationProto__Output } from '../zetasql/ParseResumeLocationProto';

export interface FunctionProto {
  'namePath'?: (string)[];
  'group'?: (string);
  'mode'?: (_zetasql_FunctionEnums_Mode | keyof typeof _zetasql_FunctionEnums_Mode);
  'signature'?: (_zetasql_FunctionSignatureProto)[];
  'options'?: (_zetasql_FunctionOptionsProto | null);
  'templatedSqlFunctionArgumentName'?: (string)[];
  'parseResumeLocation'?: (_zetasql_ParseResumeLocationProto | null);
}

export interface FunctionProto__Output {
  'namePath': (string)[];
  'group': (string);
  'mode': (_zetasql_FunctionEnums_Mode);
  'signature': (_zetasql_FunctionSignatureProto__Output)[];
  'options': (_zetasql_FunctionOptionsProto__Output | null);
  'templatedSqlFunctionArgumentName': (string)[];
  'parseResumeLocation': (_zetasql_ParseResumeLocationProto__Output | null);
}
