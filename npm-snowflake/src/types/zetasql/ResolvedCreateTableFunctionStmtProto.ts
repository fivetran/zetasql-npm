// Original file: src/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedCreateStatementProto as _zetasql_ResolvedCreateStatementProto, ResolvedCreateStatementProto__Output as _zetasql_ResolvedCreateStatementProto__Output } from '../zetasql/ResolvedCreateStatementProto';
import type { FunctionSignatureProto as _zetasql_FunctionSignatureProto, FunctionSignatureProto__Output as _zetasql_FunctionSignatureProto__Output } from '../zetasql/FunctionSignatureProto';
import type { ResolvedOptionProto as _zetasql_ResolvedOptionProto, ResolvedOptionProto__Output as _zetasql_ResolvedOptionProto__Output } from '../zetasql/ResolvedOptionProto';
import type { AnyResolvedScanProto as _zetasql_AnyResolvedScanProto, AnyResolvedScanProto__Output as _zetasql_AnyResolvedScanProto__Output } from '../zetasql/AnyResolvedScanProto';
import type { ResolvedOutputColumnProto as _zetasql_ResolvedOutputColumnProto, ResolvedOutputColumnProto__Output as _zetasql_ResolvedOutputColumnProto__Output } from '../zetasql/ResolvedOutputColumnProto';
import type { _zetasql_ResolvedCreateStatementEnums_SqlSecurity, _zetasql_ResolvedCreateStatementEnums_SqlSecurity__Output } from '../zetasql/ResolvedCreateStatementEnums';

export interface ResolvedCreateTableFunctionStmtProto {
  'parent'?: (_zetasql_ResolvedCreateStatementProto | null);
  'argumentNameList'?: (string)[];
  'signature'?: (_zetasql_FunctionSignatureProto | null);
  'optionList'?: (_zetasql_ResolvedOptionProto)[];
  'language'?: (string);
  'code'?: (string);
  'query'?: (_zetasql_AnyResolvedScanProto | null);
  'outputColumnList'?: (_zetasql_ResolvedOutputColumnProto)[];
  'isValueTable'?: (boolean);
  'sqlSecurity'?: (_zetasql_ResolvedCreateStatementEnums_SqlSecurity);
  'hasExplicitReturnSchema'?: (boolean);
}

export interface ResolvedCreateTableFunctionStmtProto__Output {
  'parent': (_zetasql_ResolvedCreateStatementProto__Output | null);
  'argumentNameList': (string)[];
  'signature': (_zetasql_FunctionSignatureProto__Output | null);
  'optionList': (_zetasql_ResolvedOptionProto__Output)[];
  'language': (string);
  'code': (string);
  'query': (_zetasql_AnyResolvedScanProto__Output | null);
  'outputColumnList': (_zetasql_ResolvedOutputColumnProto__Output)[];
  'isValueTable': (boolean);
  'sqlSecurity': (_zetasql_ResolvedCreateStatementEnums_SqlSecurity__Output);
  'hasExplicitReturnSchema': (boolean);
}
