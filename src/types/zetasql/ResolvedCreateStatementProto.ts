// Original file: protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedStatementProto as _zetasql_ResolvedStatementProto, ResolvedStatementProto__Output as _zetasql_ResolvedStatementProto__Output } from '../zetasql/ResolvedStatementProto';
import type { _zetasql_ResolvedCreateStatementEnums_CreateMode } from '../zetasql/ResolvedCreateStatementEnums';
import type { _zetasql_ResolvedCreateStatementEnums_CreateScope } from '../zetasql/ResolvedCreateStatementEnums';

export interface ResolvedCreateStatementProto {
  'parent'?: (_zetasql_ResolvedStatementProto | null);
  'namePath'?: (string)[];
  'createMode'?: (_zetasql_ResolvedCreateStatementEnums_CreateMode | keyof typeof _zetasql_ResolvedCreateStatementEnums_CreateMode);
  'createScope'?: (_zetasql_ResolvedCreateStatementEnums_CreateScope | keyof typeof _zetasql_ResolvedCreateStatementEnums_CreateScope);
}

export interface ResolvedCreateStatementProto__Output {
  'parent': (_zetasql_ResolvedStatementProto__Output | null);
  'namePath': (string)[];
  'createMode': (_zetasql_ResolvedCreateStatementEnums_CreateMode);
  'createScope': (_zetasql_ResolvedCreateStatementEnums_CreateScope);
}
