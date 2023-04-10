// Original file: src/zetasql-snowflake/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedConstraintProto as _zetasql_ResolvedConstraintProto, ResolvedConstraintProto__Output as _zetasql_ResolvedConstraintProto__Output } from '../zetasql/ResolvedConstraintProto';
import type { AnyResolvedExprProto as _zetasql_AnyResolvedExprProto, AnyResolvedExprProto__Output as _zetasql_AnyResolvedExprProto__Output } from '../zetasql/AnyResolvedExprProto';
import type { ResolvedOptionProto as _zetasql_ResolvedOptionProto, ResolvedOptionProto__Output as _zetasql_ResolvedOptionProto__Output } from '../zetasql/ResolvedOptionProto';

export interface ResolvedCheckConstraintProto {
  'parent'?: (_zetasql_ResolvedConstraintProto | null);
  'constraintName'?: (string);
  'expression'?: (_zetasql_AnyResolvedExprProto | null);
  'enforced'?: (boolean);
  'optionList'?: (_zetasql_ResolvedOptionProto)[];
}

export interface ResolvedCheckConstraintProto__Output {
  'parent': (_zetasql_ResolvedConstraintProto__Output | null);
  'constraintName': (string);
  'expression': (_zetasql_AnyResolvedExprProto__Output | null);
  'enforced': (boolean);
  'optionList': (_zetasql_ResolvedOptionProto__Output)[];
}
