// Original file: src/zetasql/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedGroupingSetProto as _zetasql_ResolvedGroupingSetProto, ResolvedGroupingSetProto__Output as _zetasql_ResolvedGroupingSetProto__Output } from '../zetasql/ResolvedGroupingSetProto';
import type { ResolvedRollupProto as _zetasql_ResolvedRollupProto, ResolvedRollupProto__Output as _zetasql_ResolvedRollupProto__Output } from '../zetasql/ResolvedRollupProto';
import type { ResolvedCubeProto as _zetasql_ResolvedCubeProto, ResolvedCubeProto__Output as _zetasql_ResolvedCubeProto__Output } from '../zetasql/ResolvedCubeProto';

export interface AnyResolvedGroupingSetBaseProto {
  'resolvedGroupingSetNode'?: (_zetasql_ResolvedGroupingSetProto | null);
  'resolvedRollupNode'?: (_zetasql_ResolvedRollupProto | null);
  'resolvedCubeNode'?: (_zetasql_ResolvedCubeProto | null);
  'node'?: "resolvedGroupingSetNode"|"resolvedRollupNode"|"resolvedCubeNode";
}

export interface AnyResolvedGroupingSetBaseProto__Output {
  'resolvedGroupingSetNode'?: (_zetasql_ResolvedGroupingSetProto__Output | null);
  'resolvedRollupNode'?: (_zetasql_ResolvedRollupProto__Output | null);
  'resolvedCubeNode'?: (_zetasql_ResolvedCubeProto__Output | null);
  'node': "resolvedGroupingSetNode"|"resolvedRollupNode"|"resolvedCubeNode";
}
