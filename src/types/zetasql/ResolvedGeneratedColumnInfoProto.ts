// Original file: protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedArgumentProto as _zetasql_ResolvedArgumentProto, ResolvedArgumentProto__Output as _zetasql_ResolvedArgumentProto__Output } from '../zetasql/ResolvedArgumentProto';
import type { AnyResolvedExprProto as _zetasql_AnyResolvedExprProto, AnyResolvedExprProto__Output as _zetasql_AnyResolvedExprProto__Output } from '../zetasql/AnyResolvedExprProto';
import type { _zetasql_ResolvedGeneratedColumnInfoEnums_StoredMode } from '../zetasql/ResolvedGeneratedColumnInfoEnums';

export interface ResolvedGeneratedColumnInfoProto {
  'parent'?: (_zetasql_ResolvedArgumentProto | null);
  'expression'?: (_zetasql_AnyResolvedExprProto | null);
  'storedMode'?: (_zetasql_ResolvedGeneratedColumnInfoEnums_StoredMode | keyof typeof _zetasql_ResolvedGeneratedColumnInfoEnums_StoredMode);
}

export interface ResolvedGeneratedColumnInfoProto__Output {
  'parent': (_zetasql_ResolvedArgumentProto__Output | null);
  'expression': (_zetasql_AnyResolvedExprProto__Output | null);
  'storedMode': (keyof typeof _zetasql_ResolvedGeneratedColumnInfoEnums_StoredMode);
}
