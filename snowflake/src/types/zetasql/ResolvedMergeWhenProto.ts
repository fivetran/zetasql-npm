// Original file: src/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedArgumentProto as _zetasql_ResolvedArgumentProto, ResolvedArgumentProto__Output as _zetasql_ResolvedArgumentProto__Output } from '../zetasql/ResolvedArgumentProto';
import type { _zetasql_ResolvedMergeWhenEnums_MatchType } from '../zetasql/ResolvedMergeWhenEnums';
import type { AnyResolvedExprProto as _zetasql_AnyResolvedExprProto, AnyResolvedExprProto__Output as _zetasql_AnyResolvedExprProto__Output } from '../zetasql/AnyResolvedExprProto';
import type { _zetasql_ResolvedMergeWhenEnums_ActionType } from '../zetasql/ResolvedMergeWhenEnums';
import type { ResolvedColumnProto as _zetasql_ResolvedColumnProto, ResolvedColumnProto__Output as _zetasql_ResolvedColumnProto__Output } from '../zetasql/ResolvedColumnProto';
import type { ResolvedInsertRowProto as _zetasql_ResolvedInsertRowProto, ResolvedInsertRowProto__Output as _zetasql_ResolvedInsertRowProto__Output } from '../zetasql/ResolvedInsertRowProto';
import type { ResolvedUpdateItemProto as _zetasql_ResolvedUpdateItemProto, ResolvedUpdateItemProto__Output as _zetasql_ResolvedUpdateItemProto__Output } from '../zetasql/ResolvedUpdateItemProto';

export interface ResolvedMergeWhenProto {
  'parent'?: (_zetasql_ResolvedArgumentProto | null);
  'matchType'?: (_zetasql_ResolvedMergeWhenEnums_MatchType | keyof typeof _zetasql_ResolvedMergeWhenEnums_MatchType);
  'matchExpr'?: (_zetasql_AnyResolvedExprProto | null);
  'actionType'?: (_zetasql_ResolvedMergeWhenEnums_ActionType | keyof typeof _zetasql_ResolvedMergeWhenEnums_ActionType);
  'insertColumnList'?: (_zetasql_ResolvedColumnProto)[];
  'insertRow'?: (_zetasql_ResolvedInsertRowProto | null);
  'updateItemList'?: (_zetasql_ResolvedUpdateItemProto)[];
}

export interface ResolvedMergeWhenProto__Output {
  'parent': (_zetasql_ResolvedArgumentProto__Output | null);
  'matchType': (_zetasql_ResolvedMergeWhenEnums_MatchType);
  'matchExpr': (_zetasql_AnyResolvedExprProto__Output | null);
  'actionType': (_zetasql_ResolvedMergeWhenEnums_ActionType);
  'insertColumnList': (_zetasql_ResolvedColumnProto__Output)[];
  'insertRow': (_zetasql_ResolvedInsertRowProto__Output | null);
  'updateItemList': (_zetasql_ResolvedUpdateItemProto__Output)[];
}
