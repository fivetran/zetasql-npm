// Original file: src/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedArgumentProto as _zetasql_ResolvedArgumentProto, ResolvedArgumentProto__Output as _zetasql_ResolvedArgumentProto__Output } from '../zetasql/ResolvedArgumentProto';
import type { AnyResolvedExprProto as _zetasql_AnyResolvedExprProto, AnyResolvedExprProto__Output as _zetasql_AnyResolvedExprProto__Output } from '../zetasql/AnyResolvedExprProto';
import type { ResolvedColumnProto as _zetasql_ResolvedColumnProto, ResolvedColumnProto__Output as _zetasql_ResolvedColumnProto__Output } from '../zetasql/ResolvedColumnProto';
import type { ResolvedColumnHolderProto as _zetasql_ResolvedColumnHolderProto, ResolvedColumnHolderProto__Output as _zetasql_ResolvedColumnHolderProto__Output } from '../zetasql/ResolvedColumnHolderProto';

export interface ResolvedUnnestItemProto {
  'parent'?: (_zetasql_ResolvedArgumentProto | null);
  'arrayExpr'?: (_zetasql_AnyResolvedExprProto | null);
  'elementColumn'?: (_zetasql_ResolvedColumnProto | null);
  'arrayOffsetColumn'?: (_zetasql_ResolvedColumnHolderProto | null);
}

export interface ResolvedUnnestItemProto__Output {
  'parent': (_zetasql_ResolvedArgumentProto__Output | null);
  'arrayExpr': (_zetasql_AnyResolvedExprProto__Output | null);
  'elementColumn': (_zetasql_ResolvedColumnProto__Output | null);
  'arrayOffsetColumn': (_zetasql_ResolvedColumnHolderProto__Output | null);
}
