// Original file: src/snowflake/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedExprProto as _zetasql_ResolvedExprProto, ResolvedExprProto__Output as _zetasql_ResolvedExprProto__Output } from '../zetasql/ResolvedExprProto';
import type { AnyResolvedExprProto as _zetasql_AnyResolvedExprProto, AnyResolvedExprProto__Output as _zetasql_AnyResolvedExprProto__Output } from '../zetasql/AnyResolvedExprProto';
import type { ResolvedReplaceFieldItemProto as _zetasql_ResolvedReplaceFieldItemProto, ResolvedReplaceFieldItemProto__Output as _zetasql_ResolvedReplaceFieldItemProto__Output } from '../zetasql/ResolvedReplaceFieldItemProto';

export interface ResolvedReplaceFieldProto {
  'parent'?: (_zetasql_ResolvedExprProto | null);
  'expr'?: (_zetasql_AnyResolvedExprProto | null);
  'replaceFieldItemList'?: (_zetasql_ResolvedReplaceFieldItemProto)[];
}

export interface ResolvedReplaceFieldProto__Output {
  'parent': (_zetasql_ResolvedExprProto__Output | null);
  'expr': (_zetasql_AnyResolvedExprProto__Output | null);
  'replaceFieldItemList': (_zetasql_ResolvedReplaceFieldItemProto__Output)[];
}
