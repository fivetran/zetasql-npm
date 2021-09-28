// Original file: protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedExprProto as _zetasql_ResolvedExprProto, ResolvedExprProto__Output as _zetasql_ResolvedExprProto__Output } from '../zetasql/ResolvedExprProto';
import type { FunctionRefProto as _zetasql_FunctionRefProto, FunctionRefProto__Output as _zetasql_FunctionRefProto__Output } from '../zetasql/FunctionRefProto';
import type { FunctionSignatureProto as _zetasql_FunctionSignatureProto, FunctionSignatureProto__Output as _zetasql_FunctionSignatureProto__Output } from '../zetasql/FunctionSignatureProto';
import type { AnyResolvedExprProto as _zetasql_AnyResolvedExprProto, AnyResolvedExprProto__Output as _zetasql_AnyResolvedExprProto__Output } from '../zetasql/AnyResolvedExprProto';
import type { _zetasql_ResolvedFunctionCallBaseEnums_ErrorMode } from '../zetasql/ResolvedFunctionCallBaseEnums';
import type { ResolvedFunctionArgumentProto as _zetasql_ResolvedFunctionArgumentProto, ResolvedFunctionArgumentProto__Output as _zetasql_ResolvedFunctionArgumentProto__Output } from '../zetasql/ResolvedFunctionArgumentProto';
import type { ResolvedOptionProto as _zetasql_ResolvedOptionProto, ResolvedOptionProto__Output as _zetasql_ResolvedOptionProto__Output } from '../zetasql/ResolvedOptionProto';
import type { ResolvedCollationProto as _zetasql_ResolvedCollationProto, ResolvedCollationProto__Output as _zetasql_ResolvedCollationProto__Output } from '../zetasql/ResolvedCollationProto';

export interface ResolvedFunctionCallBaseProto {
  'parent'?: (_zetasql_ResolvedExprProto | null);
  'function'?: (_zetasql_FunctionRefProto | null);
  'signature'?: (_zetasql_FunctionSignatureProto | null);
  'argumentList'?: (_zetasql_AnyResolvedExprProto)[];
  'errorMode'?: (_zetasql_ResolvedFunctionCallBaseEnums_ErrorMode | keyof typeof _zetasql_ResolvedFunctionCallBaseEnums_ErrorMode);
  'genericArgumentList'?: (_zetasql_ResolvedFunctionArgumentProto)[];
  'hintList'?: (_zetasql_ResolvedOptionProto)[];
  'collationList'?: (_zetasql_ResolvedCollationProto)[];
}

export interface ResolvedFunctionCallBaseProto__Output {
  'parent': (_zetasql_ResolvedExprProto__Output | null);
  'function': (_zetasql_FunctionRefProto__Output | null);
  'signature': (_zetasql_FunctionSignatureProto__Output | null);
  'argumentList': (_zetasql_AnyResolvedExprProto__Output)[];
  'errorMode': (_zetasql_ResolvedFunctionCallBaseEnums_ErrorMode);
  'genericArgumentList': (_zetasql_ResolvedFunctionArgumentProto__Output)[];
  'hintList': (_zetasql_ResolvedOptionProto__Output)[];
  'collationList': (_zetasql_ResolvedCollationProto__Output)[];
}
