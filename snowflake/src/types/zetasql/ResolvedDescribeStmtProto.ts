// Original file: src/zetasql-snowflake/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedStatementProto as _zetasql_ResolvedStatementProto, ResolvedStatementProto__Output as _zetasql_ResolvedStatementProto__Output } from '../zetasql/ResolvedStatementProto';

export interface ResolvedDescribeStmtProto {
  'parent'?: (_zetasql_ResolvedStatementProto | null);
  'objectType'?: (string);
  'namePath'?: (string)[];
  'fromNamePath'?: (string)[];
}

export interface ResolvedDescribeStmtProto__Output {
  'parent': (_zetasql_ResolvedStatementProto__Output | null);
  'objectType': (string);
  'namePath': (string)[];
  'fromNamePath': (string)[];
}
