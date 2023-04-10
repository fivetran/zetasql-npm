// Original file: src/zetasql-snowflake/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedStatementProto as _zetasql_ResolvedStatementProto, ResolvedStatementProto__Output as _zetasql_ResolvedStatementProto__Output } from '../zetasql/ResolvedStatementProto';
import type { AnyResolvedAlterActionProto as _zetasql_AnyResolvedAlterActionProto, AnyResolvedAlterActionProto__Output as _zetasql_AnyResolvedAlterActionProto__Output } from '../zetasql/AnyResolvedAlterActionProto';

export interface ResolvedAlterObjectStmtProto {
  'parent'?: (_zetasql_ResolvedStatementProto | null);
  'namePath'?: (string)[];
  'alterActionList'?: (_zetasql_AnyResolvedAlterActionProto)[];
  'isIfExists'?: (boolean);
}

export interface ResolvedAlterObjectStmtProto__Output {
  'parent': (_zetasql_ResolvedStatementProto__Output | null);
  'namePath': (string)[];
  'alterActionList': (_zetasql_AnyResolvedAlterActionProto__Output)[];
  'isIfExists': (boolean);
}
