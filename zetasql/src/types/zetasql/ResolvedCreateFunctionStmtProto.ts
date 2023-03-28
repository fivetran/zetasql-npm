// Original file: src/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedCreateStatementProto as _zetasql_ResolvedCreateStatementProto, ResolvedCreateStatementProto__Output as _zetasql_ResolvedCreateStatementProto__Output } from '../zetasql/ResolvedCreateStatementProto';
import type { TypeProto as _zetasql_TypeProto, TypeProto__Output as _zetasql_TypeProto__Output } from '../zetasql/TypeProto';
import type { AnyResolvedExprProto as _zetasql_AnyResolvedExprProto, AnyResolvedExprProto__Output as _zetasql_AnyResolvedExprProto__Output } from '../zetasql/AnyResolvedExprProto';
import type { ResolvedOptionProto as _zetasql_ResolvedOptionProto, ResolvedOptionProto__Output as _zetasql_ResolvedOptionProto__Output } from '../zetasql/ResolvedOptionProto';
import type { ResolvedComputedColumnProto as _zetasql_ResolvedComputedColumnProto, ResolvedComputedColumnProto__Output as _zetasql_ResolvedComputedColumnProto__Output } from '../zetasql/ResolvedComputedColumnProto';
import type { FunctionSignatureProto as _zetasql_FunctionSignatureProto, FunctionSignatureProto__Output as _zetasql_FunctionSignatureProto__Output } from '../zetasql/FunctionSignatureProto';
import type { _zetasql_ResolvedCreateStatementEnums_SqlSecurity, _zetasql_ResolvedCreateStatementEnums_SqlSecurity__Output } from '../zetasql/ResolvedCreateStatementEnums';
import type { _zetasql_ResolvedCreateStatementEnums_DeterminismLevel, _zetasql_ResolvedCreateStatementEnums_DeterminismLevel__Output } from '../zetasql/ResolvedCreateStatementEnums';
import type { ResolvedConnectionProto as _zetasql_ResolvedConnectionProto, ResolvedConnectionProto__Output as _zetasql_ResolvedConnectionProto__Output } from '../zetasql/ResolvedConnectionProto';

export interface ResolvedCreateFunctionStmtProto {
  'parent'?: (_zetasql_ResolvedCreateStatementProto | null);
  'returnType'?: (_zetasql_TypeProto | null);
  'language'?: (string);
  'code'?: (string);
  'functionExpression'?: (_zetasql_AnyResolvedExprProto | null);
  'optionList'?: (_zetasql_ResolvedOptionProto)[];
  'isAggregate'?: (boolean);
  'aggregateExpressionList'?: (_zetasql_ResolvedComputedColumnProto)[];
  'signature'?: (_zetasql_FunctionSignatureProto | null);
  'argumentNameList'?: (string)[];
  'sqlSecurity'?: (_zetasql_ResolvedCreateStatementEnums_SqlSecurity);
  'hasExplicitReturnType'?: (boolean);
  'determinismLevel'?: (_zetasql_ResolvedCreateStatementEnums_DeterminismLevel);
  'isRemote'?: (boolean);
  'connection'?: (_zetasql_ResolvedConnectionProto | null);
}

export interface ResolvedCreateFunctionStmtProto__Output {
  'parent': (_zetasql_ResolvedCreateStatementProto__Output | null);
  'returnType': (_zetasql_TypeProto__Output | null);
  'language': (string);
  'code': (string);
  'functionExpression': (_zetasql_AnyResolvedExprProto__Output | null);
  'optionList': (_zetasql_ResolvedOptionProto__Output)[];
  'isAggregate': (boolean);
  'aggregateExpressionList': (_zetasql_ResolvedComputedColumnProto__Output)[];
  'signature': (_zetasql_FunctionSignatureProto__Output | null);
  'argumentNameList': (string)[];
  'sqlSecurity': (_zetasql_ResolvedCreateStatementEnums_SqlSecurity__Output);
  'hasExplicitReturnType': (boolean);
  'determinismLevel': (_zetasql_ResolvedCreateStatementEnums_DeterminismLevel__Output);
  'isRemote': (boolean);
  'connection': (_zetasql_ResolvedConnectionProto__Output | null);
}
