// Original file: src/snowflake/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedStatementProto as _zetasql_ResolvedStatementProto, ResolvedStatementProto__Output as _zetasql_ResolvedStatementProto__Output } from '../zetasql/ResolvedStatementProto';
import type { _zetasql_ResolvedCreateStatementEnums_CreateMode, _zetasql_ResolvedCreateStatementEnums_CreateMode__Output } from '../zetasql/ResolvedCreateStatementEnums';
import type { _zetasql_ResolvedCreateStatementEnums_CreateScope, _zetasql_ResolvedCreateStatementEnums_CreateScope__Output } from '../zetasql/ResolvedCreateStatementEnums';

export interface ResolvedCreateStatementProto {
  'parent'?: (_zetasql_ResolvedStatementProto | null);
  'namePath'?: (string)[];
  'createMode'?: (_zetasql_ResolvedCreateStatementEnums_CreateMode);
  'createScope'?: (_zetasql_ResolvedCreateStatementEnums_CreateScope);
}

export interface ResolvedCreateStatementProto__Output {
  'parent': (_zetasql_ResolvedStatementProto__Output | null);
  'namePath': (string)[];
  'createMode': (_zetasql_ResolvedCreateStatementEnums_CreateMode__Output);
  'createScope': (_zetasql_ResolvedCreateStatementEnums_CreateScope__Output);
}
