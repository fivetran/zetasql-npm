// Original file: src/snowflake/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedStatementProto as _zetasql_ResolvedStatementProto, ResolvedStatementProto__Output as _zetasql_ResolvedStatementProto__Output } from '../zetasql/ResolvedStatementProto';
import type { ResolvedOptionProto as _zetasql_ResolvedOptionProto, ResolvedOptionProto__Output as _zetasql_ResolvedOptionProto__Output } from '../zetasql/ResolvedOptionProto';

export interface ResolvedAlterTableSetOptionsStmtProto {
  'parent'?: (_zetasql_ResolvedStatementProto | null);
  'namePath'?: (string)[];
  'optionList'?: (_zetasql_ResolvedOptionProto)[];
  'isIfExists'?: (boolean);
}

export interface ResolvedAlterTableSetOptionsStmtProto__Output {
  'parent': (_zetasql_ResolvedStatementProto__Output | null);
  'namePath': (string)[];
  'optionList': (_zetasql_ResolvedOptionProto__Output)[];
  'isIfExists': (boolean);
}
