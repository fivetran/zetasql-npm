// Original file: src/zetasql/protos/zetasql/resolved_ast/resolved_ast.proto

import type { AnyResolvedArgumentProto as _zetasql_AnyResolvedArgumentProto, AnyResolvedArgumentProto__Output as _zetasql_AnyResolvedArgumentProto__Output } from '../zetasql/AnyResolvedArgumentProto';
import type { AnyResolvedExprProto as _zetasql_AnyResolvedExprProto, AnyResolvedExprProto__Output as _zetasql_AnyResolvedExprProto__Output } from '../zetasql/AnyResolvedExprProto';
import type { AnyResolvedScanProto as _zetasql_AnyResolvedScanProto, AnyResolvedScanProto__Output as _zetasql_AnyResolvedScanProto__Output } from '../zetasql/AnyResolvedScanProto';
import type { AnyResolvedStatementProto as _zetasql_AnyResolvedStatementProto, AnyResolvedStatementProto__Output as _zetasql_AnyResolvedStatementProto__Output } from '../zetasql/AnyResolvedStatementProto';

export interface AnyResolvedNodeProto {
  'resolvedArgumentNode'?: (_zetasql_AnyResolvedArgumentProto | null);
  'resolvedExprNode'?: (_zetasql_AnyResolvedExprProto | null);
  'resolvedScanNode'?: (_zetasql_AnyResolvedScanProto | null);
  'resolvedStatementNode'?: (_zetasql_AnyResolvedStatementProto | null);
  'node'?: "resolvedArgumentNode"|"resolvedExprNode"|"resolvedScanNode"|"resolvedStatementNode";
}

export interface AnyResolvedNodeProto__Output {
  'resolvedArgumentNode'?: (_zetasql_AnyResolvedArgumentProto__Output | null);
  'resolvedExprNode'?: (_zetasql_AnyResolvedExprProto__Output | null);
  'resolvedScanNode'?: (_zetasql_AnyResolvedScanProto__Output | null);
  'resolvedStatementNode'?: (_zetasql_AnyResolvedStatementProto__Output | null);
  'node': "resolvedArgumentNode"|"resolvedExprNode"|"resolvedScanNode"|"resolvedStatementNode";
}
