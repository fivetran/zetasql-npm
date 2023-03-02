// Original file: src/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedSingleRowScanProto as _zetasql_ResolvedSingleRowScanProto, ResolvedSingleRowScanProto__Output as _zetasql_ResolvedSingleRowScanProto__Output } from '../zetasql/ResolvedSingleRowScanProto';
import type { ResolvedTableScanProto as _zetasql_ResolvedTableScanProto, ResolvedTableScanProto__Output as _zetasql_ResolvedTableScanProto__Output } from '../zetasql/ResolvedTableScanProto';
import type { ResolvedJoinScanProto as _zetasql_ResolvedJoinScanProto, ResolvedJoinScanProto__Output as _zetasql_ResolvedJoinScanProto__Output } from '../zetasql/ResolvedJoinScanProto';
import type { ResolvedArrayScanProto as _zetasql_ResolvedArrayScanProto, ResolvedArrayScanProto__Output as _zetasql_ResolvedArrayScanProto__Output } from '../zetasql/ResolvedArrayScanProto';
import type { ResolvedFilterScanProto as _zetasql_ResolvedFilterScanProto, ResolvedFilterScanProto__Output as _zetasql_ResolvedFilterScanProto__Output } from '../zetasql/ResolvedFilterScanProto';
import type { ResolvedSetOperationScanProto as _zetasql_ResolvedSetOperationScanProto, ResolvedSetOperationScanProto__Output as _zetasql_ResolvedSetOperationScanProto__Output } from '../zetasql/ResolvedSetOperationScanProto';
import type { ResolvedOrderByScanProto as _zetasql_ResolvedOrderByScanProto, ResolvedOrderByScanProto__Output as _zetasql_ResolvedOrderByScanProto__Output } from '../zetasql/ResolvedOrderByScanProto';
import type { ResolvedLimitOffsetScanProto as _zetasql_ResolvedLimitOffsetScanProto, ResolvedLimitOffsetScanProto__Output as _zetasql_ResolvedLimitOffsetScanProto__Output } from '../zetasql/ResolvedLimitOffsetScanProto';
import type { ResolvedWithRefScanProto as _zetasql_ResolvedWithRefScanProto, ResolvedWithRefScanProto__Output as _zetasql_ResolvedWithRefScanProto__Output } from '../zetasql/ResolvedWithRefScanProto';
import type { ResolvedAnalyticScanProto as _zetasql_ResolvedAnalyticScanProto, ResolvedAnalyticScanProto__Output as _zetasql_ResolvedAnalyticScanProto__Output } from '../zetasql/ResolvedAnalyticScanProto';
import type { ResolvedSampleScanProto as _zetasql_ResolvedSampleScanProto, ResolvedSampleScanProto__Output as _zetasql_ResolvedSampleScanProto__Output } from '../zetasql/ResolvedSampleScanProto';
import type { ResolvedProjectScanProto as _zetasql_ResolvedProjectScanProto, ResolvedProjectScanProto__Output as _zetasql_ResolvedProjectScanProto__Output } from '../zetasql/ResolvedProjectScanProto';
import type { ResolvedWithScanProto as _zetasql_ResolvedWithScanProto, ResolvedWithScanProto__Output as _zetasql_ResolvedWithScanProto__Output } from '../zetasql/ResolvedWithScanProto';
import type { ResolvedTVFScanProto as _zetasql_ResolvedTVFScanProto, ResolvedTVFScanProto__Output as _zetasql_ResolvedTVFScanProto__Output } from '../zetasql/ResolvedTVFScanProto';
import type { ResolvedRelationArgumentScanProto as _zetasql_ResolvedRelationArgumentScanProto, ResolvedRelationArgumentScanProto__Output as _zetasql_ResolvedRelationArgumentScanProto__Output } from '../zetasql/ResolvedRelationArgumentScanProto';
import type { AnyResolvedAggregateScanBaseProto as _zetasql_AnyResolvedAggregateScanBaseProto, AnyResolvedAggregateScanBaseProto__Output as _zetasql_AnyResolvedAggregateScanBaseProto__Output } from '../zetasql/AnyResolvedAggregateScanBaseProto';
import type { ResolvedRecursiveRefScanProto as _zetasql_ResolvedRecursiveRefScanProto, ResolvedRecursiveRefScanProto__Output as _zetasql_ResolvedRecursiveRefScanProto__Output } from '../zetasql/ResolvedRecursiveRefScanProto';
import type { ResolvedRecursiveScanProto as _zetasql_ResolvedRecursiveScanProto, ResolvedRecursiveScanProto__Output as _zetasql_ResolvedRecursiveScanProto__Output } from '../zetasql/ResolvedRecursiveScanProto';
import type { ResolvedPivotScanProto as _zetasql_ResolvedPivotScanProto, ResolvedPivotScanProto__Output as _zetasql_ResolvedPivotScanProto__Output } from '../zetasql/ResolvedPivotScanProto';
import type { ResolvedUnpivotScanProto as _zetasql_ResolvedUnpivotScanProto, ResolvedUnpivotScanProto__Output as _zetasql_ResolvedUnpivotScanProto__Output } from '../zetasql/ResolvedUnpivotScanProto';
import type { ResolvedGroupRowsScanProto as _zetasql_ResolvedGroupRowsScanProto, ResolvedGroupRowsScanProto__Output as _zetasql_ResolvedGroupRowsScanProto__Output } from '../zetasql/ResolvedGroupRowsScanProto';
import type { ResolvedExecuteAsRoleScanProto as _zetasql_ResolvedExecuteAsRoleScanProto, ResolvedExecuteAsRoleScanProto__Output as _zetasql_ResolvedExecuteAsRoleScanProto__Output } from '../zetasql/ResolvedExecuteAsRoleScanProto';
import type { ResolvedTopScanProto as _zetasql_ResolvedTopScanProto, ResolvedTopScanProto__Output as _zetasql_ResolvedTopScanProto__Output } from '../zetasql/ResolvedTopScanProto';
import type { ResolvedOffsetFetchScanProto as _zetasql_ResolvedOffsetFetchScanProto, ResolvedOffsetFetchScanProto__Output as _zetasql_ResolvedOffsetFetchScanProto__Output } from '../zetasql/ResolvedOffsetFetchScanProto';

export interface AnyResolvedScanProto {
  'resolvedSingleRowScanNode'?: (_zetasql_ResolvedSingleRowScanProto | null);
  'resolvedTableScanNode'?: (_zetasql_ResolvedTableScanProto | null);
  'resolvedJoinScanNode'?: (_zetasql_ResolvedJoinScanProto | null);
  'resolvedArrayScanNode'?: (_zetasql_ResolvedArrayScanProto | null);
  'resolvedFilterScanNode'?: (_zetasql_ResolvedFilterScanProto | null);
  'resolvedSetOperationScanNode'?: (_zetasql_ResolvedSetOperationScanProto | null);
  'resolvedOrderByScanNode'?: (_zetasql_ResolvedOrderByScanProto | null);
  'resolvedLimitOffsetScanNode'?: (_zetasql_ResolvedLimitOffsetScanProto | null);
  'resolvedWithRefScanNode'?: (_zetasql_ResolvedWithRefScanProto | null);
  'resolvedAnalyticScanNode'?: (_zetasql_ResolvedAnalyticScanProto | null);
  'resolvedSampleScanNode'?: (_zetasql_ResolvedSampleScanProto | null);
  'resolvedProjectScanNode'?: (_zetasql_ResolvedProjectScanProto | null);
  'resolvedWithScanNode'?: (_zetasql_ResolvedWithScanProto | null);
  'resolvedTvfscanNode'?: (_zetasql_ResolvedTVFScanProto | null);
  'resolvedRelationArgumentScanNode'?: (_zetasql_ResolvedRelationArgumentScanProto | null);
  'resolvedAggregateScanBaseNode'?: (_zetasql_AnyResolvedAggregateScanBaseProto | null);
  'resolvedRecursiveRefScanNode'?: (_zetasql_ResolvedRecursiveRefScanProto | null);
  'resolvedRecursiveScanNode'?: (_zetasql_ResolvedRecursiveScanProto | null);
  'resolvedPivotScanNode'?: (_zetasql_ResolvedPivotScanProto | null);
  'resolvedUnpivotScanNode'?: (_zetasql_ResolvedUnpivotScanProto | null);
  'resolvedGroupRowsScanNode'?: (_zetasql_ResolvedGroupRowsScanProto | null);
  'resolvedExecuteAsRoleScanNode'?: (_zetasql_ResolvedExecuteAsRoleScanProto | null);
  'resolvedTopScanNode'?: (_zetasql_ResolvedTopScanProto | null);
  'resolvedOffsetFetchScanNode'?: (_zetasql_ResolvedOffsetFetchScanProto | null);
  'node'?: "resolvedSingleRowScanNode"|"resolvedTableScanNode"|"resolvedJoinScanNode"|"resolvedArrayScanNode"|"resolvedFilterScanNode"|"resolvedSetOperationScanNode"|"resolvedOrderByScanNode"|"resolvedLimitOffsetScanNode"|"resolvedWithRefScanNode"|"resolvedAnalyticScanNode"|"resolvedSampleScanNode"|"resolvedProjectScanNode"|"resolvedWithScanNode"|"resolvedTvfscanNode"|"resolvedRelationArgumentScanNode"|"resolvedAggregateScanBaseNode"|"resolvedRecursiveRefScanNode"|"resolvedRecursiveScanNode"|"resolvedPivotScanNode"|"resolvedUnpivotScanNode"|"resolvedGroupRowsScanNode"|"resolvedExecuteAsRoleScanNode"|"resolvedTopScanNode"|"resolvedOffsetFetchScanNode";
}

export interface AnyResolvedScanProto__Output {
  'resolvedSingleRowScanNode'?: (_zetasql_ResolvedSingleRowScanProto__Output | null);
  'resolvedTableScanNode'?: (_zetasql_ResolvedTableScanProto__Output | null);
  'resolvedJoinScanNode'?: (_zetasql_ResolvedJoinScanProto__Output | null);
  'resolvedArrayScanNode'?: (_zetasql_ResolvedArrayScanProto__Output | null);
  'resolvedFilterScanNode'?: (_zetasql_ResolvedFilterScanProto__Output | null);
  'resolvedSetOperationScanNode'?: (_zetasql_ResolvedSetOperationScanProto__Output | null);
  'resolvedOrderByScanNode'?: (_zetasql_ResolvedOrderByScanProto__Output | null);
  'resolvedLimitOffsetScanNode'?: (_zetasql_ResolvedLimitOffsetScanProto__Output | null);
  'resolvedWithRefScanNode'?: (_zetasql_ResolvedWithRefScanProto__Output | null);
  'resolvedAnalyticScanNode'?: (_zetasql_ResolvedAnalyticScanProto__Output | null);
  'resolvedSampleScanNode'?: (_zetasql_ResolvedSampleScanProto__Output | null);
  'resolvedProjectScanNode'?: (_zetasql_ResolvedProjectScanProto__Output | null);
  'resolvedWithScanNode'?: (_zetasql_ResolvedWithScanProto__Output | null);
  'resolvedTvfscanNode'?: (_zetasql_ResolvedTVFScanProto__Output | null);
  'resolvedRelationArgumentScanNode'?: (_zetasql_ResolvedRelationArgumentScanProto__Output | null);
  'resolvedAggregateScanBaseNode'?: (_zetasql_AnyResolvedAggregateScanBaseProto__Output | null);
  'resolvedRecursiveRefScanNode'?: (_zetasql_ResolvedRecursiveRefScanProto__Output | null);
  'resolvedRecursiveScanNode'?: (_zetasql_ResolvedRecursiveScanProto__Output | null);
  'resolvedPivotScanNode'?: (_zetasql_ResolvedPivotScanProto__Output | null);
  'resolvedUnpivotScanNode'?: (_zetasql_ResolvedUnpivotScanProto__Output | null);
  'resolvedGroupRowsScanNode'?: (_zetasql_ResolvedGroupRowsScanProto__Output | null);
  'resolvedExecuteAsRoleScanNode'?: (_zetasql_ResolvedExecuteAsRoleScanProto__Output | null);
  'resolvedTopScanNode'?: (_zetasql_ResolvedTopScanProto__Output | null);
  'resolvedOffsetFetchScanNode'?: (_zetasql_ResolvedOffsetFetchScanProto__Output | null);
  'node': "resolvedSingleRowScanNode"|"resolvedTableScanNode"|"resolvedJoinScanNode"|"resolvedArrayScanNode"|"resolvedFilterScanNode"|"resolvedSetOperationScanNode"|"resolvedOrderByScanNode"|"resolvedLimitOffsetScanNode"|"resolvedWithRefScanNode"|"resolvedAnalyticScanNode"|"resolvedSampleScanNode"|"resolvedProjectScanNode"|"resolvedWithScanNode"|"resolvedTvfscanNode"|"resolvedRelationArgumentScanNode"|"resolvedAggregateScanBaseNode"|"resolvedRecursiveRefScanNode"|"resolvedRecursiveScanNode"|"resolvedPivotScanNode"|"resolvedUnpivotScanNode"|"resolvedGroupRowsScanNode"|"resolvedExecuteAsRoleScanNode"|"resolvedTopScanNode"|"resolvedOffsetFetchScanNode";
}
