// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTSetOptionsActionProto as _zetasql_ASTSetOptionsActionProto, ASTSetOptionsActionProto__Output as _zetasql_ASTSetOptionsActionProto__Output } from '../zetasql/ASTSetOptionsActionProto';
import type { ASTSetAsActionProto as _zetasql_ASTSetAsActionProto, ASTSetAsActionProto__Output as _zetasql_ASTSetAsActionProto__Output } from '../zetasql/ASTSetAsActionProto';
import type { ASTAddConstraintActionProto as _zetasql_ASTAddConstraintActionProto, ASTAddConstraintActionProto__Output as _zetasql_ASTAddConstraintActionProto__Output } from '../zetasql/ASTAddConstraintActionProto';
import type { ASTDropPrimaryKeyActionProto as _zetasql_ASTDropPrimaryKeyActionProto, ASTDropPrimaryKeyActionProto__Output as _zetasql_ASTDropPrimaryKeyActionProto__Output } from '../zetasql/ASTDropPrimaryKeyActionProto';
import type { ASTDropConstraintActionProto as _zetasql_ASTDropConstraintActionProto, ASTDropConstraintActionProto__Output as _zetasql_ASTDropConstraintActionProto__Output } from '../zetasql/ASTDropConstraintActionProto';
import type { ASTAlterConstraintEnforcementActionProto as _zetasql_ASTAlterConstraintEnforcementActionProto, ASTAlterConstraintEnforcementActionProto__Output as _zetasql_ASTAlterConstraintEnforcementActionProto__Output } from '../zetasql/ASTAlterConstraintEnforcementActionProto';
import type { ASTAlterConstraintSetOptionsActionProto as _zetasql_ASTAlterConstraintSetOptionsActionProto, ASTAlterConstraintSetOptionsActionProto__Output as _zetasql_ASTAlterConstraintSetOptionsActionProto__Output } from '../zetasql/ASTAlterConstraintSetOptionsActionProto';
import type { ASTAddColumnActionProto as _zetasql_ASTAddColumnActionProto, ASTAddColumnActionProto__Output as _zetasql_ASTAddColumnActionProto__Output } from '../zetasql/ASTAddColumnActionProto';
import type { ASTDropColumnActionProto as _zetasql_ASTDropColumnActionProto, ASTDropColumnActionProto__Output as _zetasql_ASTDropColumnActionProto__Output } from '../zetasql/ASTDropColumnActionProto';
import type { ASTRenameColumnActionProto as _zetasql_ASTRenameColumnActionProto, ASTRenameColumnActionProto__Output as _zetasql_ASTRenameColumnActionProto__Output } from '../zetasql/ASTRenameColumnActionProto';
import type { ASTAlterColumnTypeActionProto as _zetasql_ASTAlterColumnTypeActionProto, ASTAlterColumnTypeActionProto__Output as _zetasql_ASTAlterColumnTypeActionProto__Output } from '../zetasql/ASTAlterColumnTypeActionProto';
import type { ASTAlterColumnOptionsActionProto as _zetasql_ASTAlterColumnOptionsActionProto, ASTAlterColumnOptionsActionProto__Output as _zetasql_ASTAlterColumnOptionsActionProto__Output } from '../zetasql/ASTAlterColumnOptionsActionProto';
import type { ASTAlterColumnDropNotNullActionProto as _zetasql_ASTAlterColumnDropNotNullActionProto, ASTAlterColumnDropNotNullActionProto__Output as _zetasql_ASTAlterColumnDropNotNullActionProto__Output } from '../zetasql/ASTAlterColumnDropNotNullActionProto';
import type { ASTGrantToClauseProto as _zetasql_ASTGrantToClauseProto, ASTGrantToClauseProto__Output as _zetasql_ASTGrantToClauseProto__Output } from '../zetasql/ASTGrantToClauseProto';
import type { ASTFilterUsingClauseProto as _zetasql_ASTFilterUsingClauseProto, ASTFilterUsingClauseProto__Output as _zetasql_ASTFilterUsingClauseProto__Output } from '../zetasql/ASTFilterUsingClauseProto';
import type { ASTRevokeFromClauseProto as _zetasql_ASTRevokeFromClauseProto, ASTRevokeFromClauseProto__Output as _zetasql_ASTRevokeFromClauseProto__Output } from '../zetasql/ASTRevokeFromClauseProto';
import type { ASTRenameToClauseProto as _zetasql_ASTRenameToClauseProto, ASTRenameToClauseProto__Output as _zetasql_ASTRenameToClauseProto__Output } from '../zetasql/ASTRenameToClauseProto';
import type { ASTSetCollateClauseProto as _zetasql_ASTSetCollateClauseProto, ASTSetCollateClauseProto__Output as _zetasql_ASTSetCollateClauseProto__Output } from '../zetasql/ASTSetCollateClauseProto';
import type { ASTAlterColumnSetDefaultActionProto as _zetasql_ASTAlterColumnSetDefaultActionProto, ASTAlterColumnSetDefaultActionProto__Output as _zetasql_ASTAlterColumnSetDefaultActionProto__Output } from '../zetasql/ASTAlterColumnSetDefaultActionProto';
import type { ASTAlterColumnDropDefaultActionProto as _zetasql_ASTAlterColumnDropDefaultActionProto, ASTAlterColumnDropDefaultActionProto__Output as _zetasql_ASTAlterColumnDropDefaultActionProto__Output } from '../zetasql/ASTAlterColumnDropDefaultActionProto';
import type { ASTRestrictToClauseProto as _zetasql_ASTRestrictToClauseProto, ASTRestrictToClauseProto__Output as _zetasql_ASTRestrictToClauseProto__Output } from '../zetasql/ASTRestrictToClauseProto';
import type { ASTAddToRestricteeListClauseProto as _zetasql_ASTAddToRestricteeListClauseProto, ASTAddToRestricteeListClauseProto__Output as _zetasql_ASTAddToRestricteeListClauseProto__Output } from '../zetasql/ASTAddToRestricteeListClauseProto';
import type { ASTRemoveFromRestricteeListClauseProto as _zetasql_ASTRemoveFromRestricteeListClauseProto, ASTRemoveFromRestricteeListClauseProto__Output as _zetasql_ASTRemoveFromRestricteeListClauseProto__Output } from '../zetasql/ASTRemoveFromRestricteeListClauseProto';
import type { ASTAlterSubEntityActionProto as _zetasql_ASTAlterSubEntityActionProto, ASTAlterSubEntityActionProto__Output as _zetasql_ASTAlterSubEntityActionProto__Output } from '../zetasql/ASTAlterSubEntityActionProto';
import type { ASTAddSubEntityActionProto as _zetasql_ASTAddSubEntityActionProto, ASTAddSubEntityActionProto__Output as _zetasql_ASTAddSubEntityActionProto__Output } from '../zetasql/ASTAddSubEntityActionProto';
import type { ASTDropSubEntityActionProto as _zetasql_ASTDropSubEntityActionProto, ASTDropSubEntityActionProto__Output as _zetasql_ASTDropSubEntityActionProto__Output } from '../zetasql/ASTDropSubEntityActionProto';
import type { ASTAddTtlActionProto as _zetasql_ASTAddTtlActionProto, ASTAddTtlActionProto__Output as _zetasql_ASTAddTtlActionProto__Output } from '../zetasql/ASTAddTtlActionProto';
import type { ASTReplaceTtlActionProto as _zetasql_ASTReplaceTtlActionProto, ASTReplaceTtlActionProto__Output as _zetasql_ASTReplaceTtlActionProto__Output } from '../zetasql/ASTReplaceTtlActionProto';
import type { ASTDropTtlActionProto as _zetasql_ASTDropTtlActionProto, ASTDropTtlActionProto__Output as _zetasql_ASTDropTtlActionProto__Output } from '../zetasql/ASTDropTtlActionProto';
import type { ASTSpannerAlterColumnActionProto as _zetasql_ASTSpannerAlterColumnActionProto, ASTSpannerAlterColumnActionProto__Output as _zetasql_ASTSpannerAlterColumnActionProto__Output } from '../zetasql/ASTSpannerAlterColumnActionProto';
import type { ASTSpannerSetOnDeleteActionProto as _zetasql_ASTSpannerSetOnDeleteActionProto, ASTSpannerSetOnDeleteActionProto__Output as _zetasql_ASTSpannerSetOnDeleteActionProto__Output } from '../zetasql/ASTSpannerSetOnDeleteActionProto';

export interface AnyASTAlterActionProto {
  'astSetOptionsActionNode'?: (_zetasql_ASTSetOptionsActionProto | null);
  'astSetAsActionNode'?: (_zetasql_ASTSetAsActionProto | null);
  'astAddConstraintActionNode'?: (_zetasql_ASTAddConstraintActionProto | null);
  'astDropPrimaryKeyActionNode'?: (_zetasql_ASTDropPrimaryKeyActionProto | null);
  'astDropConstraintActionNode'?: (_zetasql_ASTDropConstraintActionProto | null);
  'astAlterConstraintEnforcementActionNode'?: (_zetasql_ASTAlterConstraintEnforcementActionProto | null);
  'astAlterConstraintSetOptionsActionNode'?: (_zetasql_ASTAlterConstraintSetOptionsActionProto | null);
  'astAddColumnActionNode'?: (_zetasql_ASTAddColumnActionProto | null);
  'astDropColumnActionNode'?: (_zetasql_ASTDropColumnActionProto | null);
  'astRenameColumnActionNode'?: (_zetasql_ASTRenameColumnActionProto | null);
  'astAlterColumnTypeActionNode'?: (_zetasql_ASTAlterColumnTypeActionProto | null);
  'astAlterColumnOptionsActionNode'?: (_zetasql_ASTAlterColumnOptionsActionProto | null);
  'astAlterColumnDropNotNullActionNode'?: (_zetasql_ASTAlterColumnDropNotNullActionProto | null);
  'astGrantToClauseNode'?: (_zetasql_ASTGrantToClauseProto | null);
  'astFilterUsingClauseNode'?: (_zetasql_ASTFilterUsingClauseProto | null);
  'astRevokeFromClauseNode'?: (_zetasql_ASTRevokeFromClauseProto | null);
  'astRenameToClauseNode'?: (_zetasql_ASTRenameToClauseProto | null);
  'astSetCollateClauseNode'?: (_zetasql_ASTSetCollateClauseProto | null);
  'astAlterColumnSetDefaultActionNode'?: (_zetasql_ASTAlterColumnSetDefaultActionProto | null);
  'astAlterColumnDropDefaultActionNode'?: (_zetasql_ASTAlterColumnDropDefaultActionProto | null);
  'astRestrictToClauseNode'?: (_zetasql_ASTRestrictToClauseProto | null);
  'astAddToRestricteeListClauseNode'?: (_zetasql_ASTAddToRestricteeListClauseProto | null);
  'astRemoveFromRestricteeListClauseNode'?: (_zetasql_ASTRemoveFromRestricteeListClauseProto | null);
  'astAlterSubEntityActionNode'?: (_zetasql_ASTAlterSubEntityActionProto | null);
  'astAddSubEntityActionNode'?: (_zetasql_ASTAddSubEntityActionProto | null);
  'astDropSubEntityActionNode'?: (_zetasql_ASTDropSubEntityActionProto | null);
  'astAddTtlActionNode'?: (_zetasql_ASTAddTtlActionProto | null);
  'astReplaceTtlActionNode'?: (_zetasql_ASTReplaceTtlActionProto | null);
  'astDropTtlActionNode'?: (_zetasql_ASTDropTtlActionProto | null);
  'astSpannerAlterColumnActionNode'?: (_zetasql_ASTSpannerAlterColumnActionProto | null);
  'astSpannerSetOnDeleteActionNode'?: (_zetasql_ASTSpannerSetOnDeleteActionProto | null);
  'node'?: "astSetOptionsActionNode"|"astSetAsActionNode"|"astAddConstraintActionNode"|"astDropPrimaryKeyActionNode"|"astDropConstraintActionNode"|"astAlterConstraintEnforcementActionNode"|"astAlterConstraintSetOptionsActionNode"|"astAddColumnActionNode"|"astDropColumnActionNode"|"astRenameColumnActionNode"|"astAlterColumnTypeActionNode"|"astAlterColumnOptionsActionNode"|"astAlterColumnDropNotNullActionNode"|"astGrantToClauseNode"|"astFilterUsingClauseNode"|"astRevokeFromClauseNode"|"astRenameToClauseNode"|"astSetCollateClauseNode"|"astAlterColumnSetDefaultActionNode"|"astAlterColumnDropDefaultActionNode"|"astRestrictToClauseNode"|"astAddToRestricteeListClauseNode"|"astRemoveFromRestricteeListClauseNode"|"astAlterSubEntityActionNode"|"astAddSubEntityActionNode"|"astDropSubEntityActionNode"|"astAddTtlActionNode"|"astReplaceTtlActionNode"|"astDropTtlActionNode"|"astSpannerAlterColumnActionNode"|"astSpannerSetOnDeleteActionNode";
}

export interface AnyASTAlterActionProto__Output {
  'astSetOptionsActionNode'?: (_zetasql_ASTSetOptionsActionProto__Output | null);
  'astSetAsActionNode'?: (_zetasql_ASTSetAsActionProto__Output | null);
  'astAddConstraintActionNode'?: (_zetasql_ASTAddConstraintActionProto__Output | null);
  'astDropPrimaryKeyActionNode'?: (_zetasql_ASTDropPrimaryKeyActionProto__Output | null);
  'astDropConstraintActionNode'?: (_zetasql_ASTDropConstraintActionProto__Output | null);
  'astAlterConstraintEnforcementActionNode'?: (_zetasql_ASTAlterConstraintEnforcementActionProto__Output | null);
  'astAlterConstraintSetOptionsActionNode'?: (_zetasql_ASTAlterConstraintSetOptionsActionProto__Output | null);
  'astAddColumnActionNode'?: (_zetasql_ASTAddColumnActionProto__Output | null);
  'astDropColumnActionNode'?: (_zetasql_ASTDropColumnActionProto__Output | null);
  'astRenameColumnActionNode'?: (_zetasql_ASTRenameColumnActionProto__Output | null);
  'astAlterColumnTypeActionNode'?: (_zetasql_ASTAlterColumnTypeActionProto__Output | null);
  'astAlterColumnOptionsActionNode'?: (_zetasql_ASTAlterColumnOptionsActionProto__Output | null);
  'astAlterColumnDropNotNullActionNode'?: (_zetasql_ASTAlterColumnDropNotNullActionProto__Output | null);
  'astGrantToClauseNode'?: (_zetasql_ASTGrantToClauseProto__Output | null);
  'astFilterUsingClauseNode'?: (_zetasql_ASTFilterUsingClauseProto__Output | null);
  'astRevokeFromClauseNode'?: (_zetasql_ASTRevokeFromClauseProto__Output | null);
  'astRenameToClauseNode'?: (_zetasql_ASTRenameToClauseProto__Output | null);
  'astSetCollateClauseNode'?: (_zetasql_ASTSetCollateClauseProto__Output | null);
  'astAlterColumnSetDefaultActionNode'?: (_zetasql_ASTAlterColumnSetDefaultActionProto__Output | null);
  'astAlterColumnDropDefaultActionNode'?: (_zetasql_ASTAlterColumnDropDefaultActionProto__Output | null);
  'astRestrictToClauseNode'?: (_zetasql_ASTRestrictToClauseProto__Output | null);
  'astAddToRestricteeListClauseNode'?: (_zetasql_ASTAddToRestricteeListClauseProto__Output | null);
  'astRemoveFromRestricteeListClauseNode'?: (_zetasql_ASTRemoveFromRestricteeListClauseProto__Output | null);
  'astAlterSubEntityActionNode'?: (_zetasql_ASTAlterSubEntityActionProto__Output | null);
  'astAddSubEntityActionNode'?: (_zetasql_ASTAddSubEntityActionProto__Output | null);
  'astDropSubEntityActionNode'?: (_zetasql_ASTDropSubEntityActionProto__Output | null);
  'astAddTtlActionNode'?: (_zetasql_ASTAddTtlActionProto__Output | null);
  'astReplaceTtlActionNode'?: (_zetasql_ASTReplaceTtlActionProto__Output | null);
  'astDropTtlActionNode'?: (_zetasql_ASTDropTtlActionProto__Output | null);
  'astSpannerAlterColumnActionNode'?: (_zetasql_ASTSpannerAlterColumnActionProto__Output | null);
  'astSpannerSetOnDeleteActionNode'?: (_zetasql_ASTSpannerSetOnDeleteActionProto__Output | null);
  'node': "astSetOptionsActionNode"|"astSetAsActionNode"|"astAddConstraintActionNode"|"astDropPrimaryKeyActionNode"|"astDropConstraintActionNode"|"astAlterConstraintEnforcementActionNode"|"astAlterConstraintSetOptionsActionNode"|"astAddColumnActionNode"|"astDropColumnActionNode"|"astRenameColumnActionNode"|"astAlterColumnTypeActionNode"|"astAlterColumnOptionsActionNode"|"astAlterColumnDropNotNullActionNode"|"astGrantToClauseNode"|"astFilterUsingClauseNode"|"astRevokeFromClauseNode"|"astRenameToClauseNode"|"astSetCollateClauseNode"|"astAlterColumnSetDefaultActionNode"|"astAlterColumnDropDefaultActionNode"|"astRestrictToClauseNode"|"astAddToRestricteeListClauseNode"|"astRemoveFromRestricteeListClauseNode"|"astAlterSubEntityActionNode"|"astAddSubEntityActionNode"|"astDropSubEntityActionNode"|"astAddTtlActionNode"|"astReplaceTtlActionNode"|"astDropTtlActionNode"|"astSpannerAlterColumnActionNode"|"astSpannerSetOnDeleteActionNode";
}