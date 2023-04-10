// Original file: src/snowflake/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedStatementProto as _zetasql_ResolvedStatementProto, ResolvedStatementProto__Output as _zetasql_ResolvedStatementProto__Output } from '../zetasql/ResolvedStatementProto';
import type { ResolvedOptionProto as _zetasql_ResolvedOptionProto, ResolvedOptionProto__Output as _zetasql_ResolvedOptionProto__Output } from '../zetasql/ResolvedOptionProto';
import type { ResolvedTableAndColumnInfoProto as _zetasql_ResolvedTableAndColumnInfoProto, ResolvedTableAndColumnInfoProto__Output as _zetasql_ResolvedTableAndColumnInfoProto__Output } from '../zetasql/ResolvedTableAndColumnInfoProto';

export interface ResolvedAnalyzeStmtProto {
  'parent'?: (_zetasql_ResolvedStatementProto | null);
  'optionList'?: (_zetasql_ResolvedOptionProto)[];
  'tableAndColumnIndexList'?: (_zetasql_ResolvedTableAndColumnInfoProto)[];
}

export interface ResolvedAnalyzeStmtProto__Output {
  'parent': (_zetasql_ResolvedStatementProto__Output | null);
  'optionList': (_zetasql_ResolvedOptionProto__Output)[];
  'tableAndColumnIndexList': (_zetasql_ResolvedTableAndColumnInfoProto__Output)[];
}
