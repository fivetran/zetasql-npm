// Original file: protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedStatementProto as _zetasql_ResolvedStatementProto, ResolvedStatementProto__Output as _zetasql_ResolvedStatementProto__Output } from '../zetasql/ResolvedStatementProto';
import type { ResolvedOptionProto as _zetasql_ResolvedOptionProto, ResolvedOptionProto__Output as _zetasql_ResolvedOptionProto__Output } from '../zetasql/ResolvedOptionProto';

export interface ResolvedModuleStmtProto {
  'parent'?: (_zetasql_ResolvedStatementProto | null);
  'namePath'?: (string)[];
  'optionList'?: (_zetasql_ResolvedOptionProto)[];
}

export interface ResolvedModuleStmtProto__Output {
  'parent': (_zetasql_ResolvedStatementProto__Output | null);
  'namePath': (string)[];
  'optionList': (_zetasql_ResolvedOptionProto__Output)[];
}
