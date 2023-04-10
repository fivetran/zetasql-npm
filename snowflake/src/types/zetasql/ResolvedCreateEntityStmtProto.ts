// Original file: src/zetasql-snowflake/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedCreateStatementProto as _zetasql_ResolvedCreateStatementProto, ResolvedCreateStatementProto__Output as _zetasql_ResolvedCreateStatementProto__Output } from '../zetasql/ResolvedCreateStatementProto';
import type { ResolvedOptionProto as _zetasql_ResolvedOptionProto, ResolvedOptionProto__Output as _zetasql_ResolvedOptionProto__Output } from '../zetasql/ResolvedOptionProto';

export interface ResolvedCreateEntityStmtProto {
  'parent'?: (_zetasql_ResolvedCreateStatementProto | null);
  'entityType'?: (string);
  'entityBodyJson'?: (string);
  'optionList'?: (_zetasql_ResolvedOptionProto)[];
  'entityBodyText'?: (string);
}

export interface ResolvedCreateEntityStmtProto__Output {
  'parent': (_zetasql_ResolvedCreateStatementProto__Output | null);
  'entityType': (string);
  'entityBodyJson': (string);
  'optionList': (_zetasql_ResolvedOptionProto__Output)[];
  'entityBodyText': (string);
}
