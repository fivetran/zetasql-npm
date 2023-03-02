// Original file: src/protos/zetasql/proto/function.proto

import type { FunctionSignatureProto as _zetasql_FunctionSignatureProto, FunctionSignatureProto__Output as _zetasql_FunctionSignatureProto__Output } from '../zetasql/FunctionSignatureProto';
import type { _zetasql_FunctionEnums_TableValuedFunctionType } from '../zetasql/FunctionEnums';
import type { ParseResumeLocationProto as _zetasql_ParseResumeLocationProto, ParseResumeLocationProto__Output as _zetasql_ParseResumeLocationProto__Output } from '../zetasql/ParseResumeLocationProto';
import type { _zetasql_FunctionEnums_Volatility } from '../zetasql/FunctionEnums';
import type { TableValuedFunctionOptionsProto as _zetasql_TableValuedFunctionOptionsProto, TableValuedFunctionOptionsProto__Output as _zetasql_TableValuedFunctionOptionsProto__Output } from '../zetasql/TableValuedFunctionOptionsProto';
import type { SimpleAnonymizationInfoProto as _zetasql_SimpleAnonymizationInfoProto, SimpleAnonymizationInfoProto__Output as _zetasql_SimpleAnonymizationInfoProto__Output } from '../zetasql/SimpleAnonymizationInfoProto';

export interface TableValuedFunctionProto {
  'namePath'?: (string)[];
  'signature'?: (_zetasql_FunctionSignatureProto | null);
  'type'?: (_zetasql_FunctionEnums_TableValuedFunctionType | keyof typeof _zetasql_FunctionEnums_TableValuedFunctionType);
  'argumentName'?: (string)[];
  'parseResumeLocation'?: (_zetasql_ParseResumeLocationProto | null);
  'customContext'?: (string);
  'volatility'?: (_zetasql_FunctionEnums_Volatility | keyof typeof _zetasql_FunctionEnums_Volatility);
  'options'?: (_zetasql_TableValuedFunctionOptionsProto | null);
  'anonymizationInfo'?: (_zetasql_SimpleAnonymizationInfoProto | null);
}

export interface TableValuedFunctionProto__Output {
  'namePath': (string)[];
  'signature': (_zetasql_FunctionSignatureProto__Output | null);
  'type': (_zetasql_FunctionEnums_TableValuedFunctionType);
  'argumentName': (string)[];
  'parseResumeLocation': (_zetasql_ParseResumeLocationProto__Output | null);
  'customContext': (string);
  'volatility': (_zetasql_FunctionEnums_Volatility);
  'options': (_zetasql_TableValuedFunctionOptionsProto__Output | null);
  'anonymizationInfo': (_zetasql_SimpleAnonymizationInfoProto__Output | null);
}
