// Original file: src/snowflake/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedStatementProto as _zetasql_ResolvedStatementProto, ResolvedStatementProto__Output as _zetasql_ResolvedStatementProto__Output } from '../zetasql/ResolvedStatementProto';
import type { ResolvedConnectionProto as _zetasql_ResolvedConnectionProto, ResolvedConnectionProto__Output as _zetasql_ResolvedConnectionProto__Output } from '../zetasql/ResolvedConnectionProto';
import type { ResolvedOptionProto as _zetasql_ResolvedOptionProto, ResolvedOptionProto__Output as _zetasql_ResolvedOptionProto__Output } from '../zetasql/ResolvedOptionProto';

export interface ResolvedExportMetadataStmtProto {
  'parent'?: (_zetasql_ResolvedStatementProto | null);
  'schemaObjectKind'?: (string);
  'namePath'?: (string)[];
  'connection'?: (_zetasql_ResolvedConnectionProto | null);
  'optionList'?: (_zetasql_ResolvedOptionProto)[];
}

export interface ResolvedExportMetadataStmtProto__Output {
  'parent': (_zetasql_ResolvedStatementProto__Output | null);
  'schemaObjectKind': (string);
  'namePath': (string)[];
  'connection': (_zetasql_ResolvedConnectionProto__Output | null);
  'optionList': (_zetasql_ResolvedOptionProto__Output)[];
}
