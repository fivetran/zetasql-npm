// Original file: protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedCreateStatementProto as _zetasql_ResolvedCreateStatementProto, ResolvedCreateStatementProto__Output as _zetasql_ResolvedCreateStatementProto__Output } from '../zetasql/ResolvedCreateStatementProto';
import type { ResolvedOptionProto as _zetasql_ResolvedOptionProto, ResolvedOptionProto__Output as _zetasql_ResolvedOptionProto__Output } from '../zetasql/ResolvedOptionProto';

export interface ResolvedCreateSchemaStmtProto {
  'parent'?: (_zetasql_ResolvedCreateStatementProto | null);
  'optionList'?: (_zetasql_ResolvedOptionProto)[];
}

export interface ResolvedCreateSchemaStmtProto__Output {
  'parent': (_zetasql_ResolvedCreateStatementProto__Output | null);
  'optionList': (_zetasql_ResolvedOptionProto__Output)[];
}
