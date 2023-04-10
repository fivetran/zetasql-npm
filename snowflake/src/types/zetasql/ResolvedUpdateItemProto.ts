// Original file: src/snowflake/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedArgumentProto as _zetasql_ResolvedArgumentProto, ResolvedArgumentProto__Output as _zetasql_ResolvedArgumentProto__Output } from '../zetasql/ResolvedArgumentProto';
import type { AnyResolvedExprProto as _zetasql_AnyResolvedExprProto, AnyResolvedExprProto__Output as _zetasql_AnyResolvedExprProto__Output } from '../zetasql/AnyResolvedExprProto';
import type { ResolvedDMLValueProto as _zetasql_ResolvedDMLValueProto, ResolvedDMLValueProto__Output as _zetasql_ResolvedDMLValueProto__Output } from '../zetasql/ResolvedDMLValueProto';
import type { ResolvedColumnHolderProto as _zetasql_ResolvedColumnHolderProto, ResolvedColumnHolderProto__Output as _zetasql_ResolvedColumnHolderProto__Output } from '../zetasql/ResolvedColumnHolderProto';
import type { ResolvedDeleteStmtProto as _zetasql_ResolvedDeleteStmtProto, ResolvedDeleteStmtProto__Output as _zetasql_ResolvedDeleteStmtProto__Output } from '../zetasql/ResolvedDeleteStmtProto';
import type { ResolvedUpdateStmtProto as _zetasql_ResolvedUpdateStmtProto, ResolvedUpdateStmtProto__Output as _zetasql_ResolvedUpdateStmtProto__Output } from '../zetasql/ResolvedUpdateStmtProto';
import type { ResolvedInsertStmtProto as _zetasql_ResolvedInsertStmtProto, ResolvedInsertStmtProto__Output as _zetasql_ResolvedInsertStmtProto__Output } from '../zetasql/ResolvedInsertStmtProto';
import type { ResolvedUpdateArrayItemProto as _zetasql_ResolvedUpdateArrayItemProto, ResolvedUpdateArrayItemProto__Output as _zetasql_ResolvedUpdateArrayItemProto__Output } from '../zetasql/ResolvedUpdateArrayItemProto';

export interface ResolvedUpdateItemProto {
  'parent'?: (_zetasql_ResolvedArgumentProto | null);
  'target'?: (_zetasql_AnyResolvedExprProto | null);
  'setValue'?: (_zetasql_ResolvedDMLValueProto | null);
  'elementColumn'?: (_zetasql_ResolvedColumnHolderProto | null);
  'deleteList'?: (_zetasql_ResolvedDeleteStmtProto)[];
  'updateList'?: (_zetasql_ResolvedUpdateStmtProto)[];
  'insertList'?: (_zetasql_ResolvedInsertStmtProto)[];
  'arrayUpdateList'?: (_zetasql_ResolvedUpdateArrayItemProto)[];
}

export interface ResolvedUpdateItemProto__Output {
  'parent': (_zetasql_ResolvedArgumentProto__Output | null);
  'target': (_zetasql_AnyResolvedExprProto__Output | null);
  'setValue': (_zetasql_ResolvedDMLValueProto__Output | null);
  'elementColumn': (_zetasql_ResolvedColumnHolderProto__Output | null);
  'deleteList': (_zetasql_ResolvedDeleteStmtProto__Output)[];
  'updateList': (_zetasql_ResolvedUpdateStmtProto__Output)[];
  'insertList': (_zetasql_ResolvedInsertStmtProto__Output)[];
  'arrayUpdateList': (_zetasql_ResolvedUpdateArrayItemProto__Output)[];
}
