// Original file: protos/zetasql/proto/function.proto

import type { FunctionSignatureProto as _zetasql_FunctionSignatureProto, FunctionSignatureProto__Output as _zetasql_FunctionSignatureProto__Output } from '../zetasql/FunctionSignatureProto';
import type { _zetasql_FunctionEnums_TableValuedFunctionType } from '../zetasql/FunctionEnums';
import type { ParseResumeLocationProto as _zetasql_ParseResumeLocationProto, ParseResumeLocationProto__Output as _zetasql_ParseResumeLocationProto__Output } from '../zetasql/ParseResumeLocationProto';
import type { _zetasql_FunctionEnums_Volatility } from '../zetasql/FunctionEnums';

export interface TableValuedFunctionProto {
  'namePath'?: (string)[];
  'signature'?: (_zetasql_FunctionSignatureProto | null);
  'type'?: (_zetasql_FunctionEnums_TableValuedFunctionType | keyof typeof _zetasql_FunctionEnums_TableValuedFunctionType);
  'argumentName'?: (string)[];
  'parseResumeLocation'?: (_zetasql_ParseResumeLocationProto | null);
  'customContext'?: (string);
  'volatility'?: (_zetasql_FunctionEnums_Volatility | keyof typeof _zetasql_FunctionEnums_Volatility);
}

export interface TableValuedFunctionProto__Output {
  'namePath': (string)[];
  'signature': (_zetasql_FunctionSignatureProto__Output | null);
  'type': (_zetasql_FunctionEnums_TableValuedFunctionType);
  'argumentName': (string)[];
  'parseResumeLocation': (_zetasql_ParseResumeLocationProto__Output | null);
  'customContext': (string);
  'volatility': (_zetasql_FunctionEnums_Volatility);
}
