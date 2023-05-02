// Original file: src/zetasql/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedArgumentProto as _zetasql_ResolvedArgumentProto, ResolvedArgumentProto__Output as _zetasql_ResolvedArgumentProto__Output } from '../zetasql/ResolvedArgumentProto';
import type { AnyResolvedExprProto as _zetasql_AnyResolvedExprProto, AnyResolvedExprProto__Output as _zetasql_AnyResolvedExprProto__Output } from '../zetasql/AnyResolvedExprProto';

export interface ResolvedAuxLoadDataPartitionFilterProto {
  'parent'?: (_zetasql_ResolvedArgumentProto | null);
  'filter'?: (_zetasql_AnyResolvedExprProto | null);
  'isOverwrite'?: (boolean);
}

export interface ResolvedAuxLoadDataPartitionFilterProto__Output {
  'parent': (_zetasql_ResolvedArgumentProto__Output | null);
  'filter': (_zetasql_AnyResolvedExprProto__Output | null);
  'isOverwrite': (boolean);
}
