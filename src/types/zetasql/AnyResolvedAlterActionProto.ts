// Original file: src/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedSetOptionsActionProto as _zetasql_ResolvedSetOptionsActionProto, ResolvedSetOptionsActionProto__Output as _zetasql_ResolvedSetOptionsActionProto__Output } from '../zetasql/ResolvedSetOptionsActionProto';
import type { ResolvedAddColumnActionProto as _zetasql_ResolvedAddColumnActionProto, ResolvedAddColumnActionProto__Output as _zetasql_ResolvedAddColumnActionProto__Output } from '../zetasql/ResolvedAddColumnActionProto';
import type { ResolvedDropColumnActionProto as _zetasql_ResolvedDropColumnActionProto, ResolvedDropColumnActionProto__Output as _zetasql_ResolvedDropColumnActionProto__Output } from '../zetasql/ResolvedDropColumnActionProto';
import type { ResolvedGrantToActionProto as _zetasql_ResolvedGrantToActionProto, ResolvedGrantToActionProto__Output as _zetasql_ResolvedGrantToActionProto__Output } from '../zetasql/ResolvedGrantToActionProto';
import type { ResolvedFilterUsingActionProto as _zetasql_ResolvedFilterUsingActionProto, ResolvedFilterUsingActionProto__Output as _zetasql_ResolvedFilterUsingActionProto__Output } from '../zetasql/ResolvedFilterUsingActionProto';
import type { ResolvedRevokeFromActionProto as _zetasql_ResolvedRevokeFromActionProto, ResolvedRevokeFromActionProto__Output as _zetasql_ResolvedRevokeFromActionProto__Output } from '../zetasql/ResolvedRevokeFromActionProto';
import type { ResolvedRenameToActionProto as _zetasql_ResolvedRenameToActionProto, ResolvedRenameToActionProto__Output as _zetasql_ResolvedRenameToActionProto__Output } from '../zetasql/ResolvedRenameToActionProto';
import type { ResolvedSetAsActionProto as _zetasql_ResolvedSetAsActionProto, ResolvedSetAsActionProto__Output as _zetasql_ResolvedSetAsActionProto__Output } from '../zetasql/ResolvedSetAsActionProto';
import type { ResolvedAddConstraintActionProto as _zetasql_ResolvedAddConstraintActionProto, ResolvedAddConstraintActionProto__Output as _zetasql_ResolvedAddConstraintActionProto__Output } from '../zetasql/ResolvedAddConstraintActionProto';
import type { ResolvedDropConstraintActionProto as _zetasql_ResolvedDropConstraintActionProto, ResolvedDropConstraintActionProto__Output as _zetasql_ResolvedDropConstraintActionProto__Output } from '../zetasql/ResolvedDropConstraintActionProto';
import type { ResolvedAlterColumnOptionsActionProto as _zetasql_ResolvedAlterColumnOptionsActionProto, ResolvedAlterColumnOptionsActionProto__Output as _zetasql_ResolvedAlterColumnOptionsActionProto__Output } from '../zetasql/ResolvedAlterColumnOptionsActionProto';
import type { ResolvedAlterColumnDropNotNullActionProto as _zetasql_ResolvedAlterColumnDropNotNullActionProto, ResolvedAlterColumnDropNotNullActionProto__Output as _zetasql_ResolvedAlterColumnDropNotNullActionProto__Output } from '../zetasql/ResolvedAlterColumnDropNotNullActionProto';
import type { ResolvedAlterColumnSetDataTypeActionProto as _zetasql_ResolvedAlterColumnSetDataTypeActionProto, ResolvedAlterColumnSetDataTypeActionProto__Output as _zetasql_ResolvedAlterColumnSetDataTypeActionProto__Output } from '../zetasql/ResolvedAlterColumnSetDataTypeActionProto';
import type { ResolvedDropPrimaryKeyActionProto as _zetasql_ResolvedDropPrimaryKeyActionProto, ResolvedDropPrimaryKeyActionProto__Output as _zetasql_ResolvedDropPrimaryKeyActionProto__Output } from '../zetasql/ResolvedDropPrimaryKeyActionProto';
import type { ResolvedRenameColumnActionProto as _zetasql_ResolvedRenameColumnActionProto, ResolvedRenameColumnActionProto__Output as _zetasql_ResolvedRenameColumnActionProto__Output } from '../zetasql/ResolvedRenameColumnActionProto';
import type { ResolvedSetCollateClauseProto as _zetasql_ResolvedSetCollateClauseProto, ResolvedSetCollateClauseProto__Output as _zetasql_ResolvedSetCollateClauseProto__Output } from '../zetasql/ResolvedSetCollateClauseProto';
import type { ResolvedRestrictToActionProto as _zetasql_ResolvedRestrictToActionProto, ResolvedRestrictToActionProto__Output as _zetasql_ResolvedRestrictToActionProto__Output } from '../zetasql/ResolvedRestrictToActionProto';
import type { ResolvedAddToRestricteeListActionProto as _zetasql_ResolvedAddToRestricteeListActionProto, ResolvedAddToRestricteeListActionProto__Output as _zetasql_ResolvedAddToRestricteeListActionProto__Output } from '../zetasql/ResolvedAddToRestricteeListActionProto';
import type { ResolvedRemoveFromRestricteeListActionProto as _zetasql_ResolvedRemoveFromRestricteeListActionProto, ResolvedRemoveFromRestricteeListActionProto__Output as _zetasql_ResolvedRemoveFromRestricteeListActionProto__Output } from '../zetasql/ResolvedRemoveFromRestricteeListActionProto';

export interface AnyResolvedAlterActionProto {
  'resolvedSetOptionsActionNode'?: (_zetasql_ResolvedSetOptionsActionProto | null);
  'resolvedAddColumnActionNode'?: (_zetasql_ResolvedAddColumnActionProto | null);
  'resolvedDropColumnActionNode'?: (_zetasql_ResolvedDropColumnActionProto | null);
  'resolvedGrantToActionNode'?: (_zetasql_ResolvedGrantToActionProto | null);
  'resolvedFilterUsingActionNode'?: (_zetasql_ResolvedFilterUsingActionProto | null);
  'resolvedRevokeFromActionNode'?: (_zetasql_ResolvedRevokeFromActionProto | null);
  'resolvedRenameToActionNode'?: (_zetasql_ResolvedRenameToActionProto | null);
  'resolvedSetAsActionNode'?: (_zetasql_ResolvedSetAsActionProto | null);
  'resolvedAddConstraintActionNode'?: (_zetasql_ResolvedAddConstraintActionProto | null);
  'resolvedDropConstraintActionNode'?: (_zetasql_ResolvedDropConstraintActionProto | null);
  'resolvedAlterColumnOptionsActionNode'?: (_zetasql_ResolvedAlterColumnOptionsActionProto | null);
  'resolvedAlterColumnDropNotNullActionNode'?: (_zetasql_ResolvedAlterColumnDropNotNullActionProto | null);
  'resolvedAlterColumnSetDataTypeActionNode'?: (_zetasql_ResolvedAlterColumnSetDataTypeActionProto | null);
  'resolvedDropPrimaryKeyActionNode'?: (_zetasql_ResolvedDropPrimaryKeyActionProto | null);
  'resolvedRenameColumnActionNode'?: (_zetasql_ResolvedRenameColumnActionProto | null);
  'resolvedSetCollateClauseNode'?: (_zetasql_ResolvedSetCollateClauseProto | null);
  'resolvedRestrictToActionNode'?: (_zetasql_ResolvedRestrictToActionProto | null);
  'resolvedAddToRestricteeListActionNode'?: (_zetasql_ResolvedAddToRestricteeListActionProto | null);
  'resolvedRemoveFromRestricteeListActionNode'?: (_zetasql_ResolvedRemoveFromRestricteeListActionProto | null);
  'node'?: "resolvedSetOptionsActionNode"|"resolvedAddColumnActionNode"|"resolvedDropColumnActionNode"|"resolvedGrantToActionNode"|"resolvedFilterUsingActionNode"|"resolvedRevokeFromActionNode"|"resolvedRenameToActionNode"|"resolvedSetAsActionNode"|"resolvedAddConstraintActionNode"|"resolvedDropConstraintActionNode"|"resolvedAlterColumnOptionsActionNode"|"resolvedAlterColumnDropNotNullActionNode"|"resolvedAlterColumnSetDataTypeActionNode"|"resolvedDropPrimaryKeyActionNode"|"resolvedRenameColumnActionNode"|"resolvedSetCollateClauseNode"|"resolvedRestrictToActionNode"|"resolvedAddToRestricteeListActionNode"|"resolvedRemoveFromRestricteeListActionNode";
}

export interface AnyResolvedAlterActionProto__Output {
  'resolvedSetOptionsActionNode'?: (_zetasql_ResolvedSetOptionsActionProto__Output | null);
  'resolvedAddColumnActionNode'?: (_zetasql_ResolvedAddColumnActionProto__Output | null);
  'resolvedDropColumnActionNode'?: (_zetasql_ResolvedDropColumnActionProto__Output | null);
  'resolvedGrantToActionNode'?: (_zetasql_ResolvedGrantToActionProto__Output | null);
  'resolvedFilterUsingActionNode'?: (_zetasql_ResolvedFilterUsingActionProto__Output | null);
  'resolvedRevokeFromActionNode'?: (_zetasql_ResolvedRevokeFromActionProto__Output | null);
  'resolvedRenameToActionNode'?: (_zetasql_ResolvedRenameToActionProto__Output | null);
  'resolvedSetAsActionNode'?: (_zetasql_ResolvedSetAsActionProto__Output | null);
  'resolvedAddConstraintActionNode'?: (_zetasql_ResolvedAddConstraintActionProto__Output | null);
  'resolvedDropConstraintActionNode'?: (_zetasql_ResolvedDropConstraintActionProto__Output | null);
  'resolvedAlterColumnOptionsActionNode'?: (_zetasql_ResolvedAlterColumnOptionsActionProto__Output | null);
  'resolvedAlterColumnDropNotNullActionNode'?: (_zetasql_ResolvedAlterColumnDropNotNullActionProto__Output | null);
  'resolvedAlterColumnSetDataTypeActionNode'?: (_zetasql_ResolvedAlterColumnSetDataTypeActionProto__Output | null);
  'resolvedDropPrimaryKeyActionNode'?: (_zetasql_ResolvedDropPrimaryKeyActionProto__Output | null);
  'resolvedRenameColumnActionNode'?: (_zetasql_ResolvedRenameColumnActionProto__Output | null);
  'resolvedSetCollateClauseNode'?: (_zetasql_ResolvedSetCollateClauseProto__Output | null);
  'resolvedRestrictToActionNode'?: (_zetasql_ResolvedRestrictToActionProto__Output | null);
  'resolvedAddToRestricteeListActionNode'?: (_zetasql_ResolvedAddToRestricteeListActionProto__Output | null);
  'resolvedRemoveFromRestricteeListActionNode'?: (_zetasql_ResolvedRemoveFromRestricteeListActionProto__Output | null);
  'node': "resolvedSetOptionsActionNode"|"resolvedAddColumnActionNode"|"resolvedDropColumnActionNode"|"resolvedGrantToActionNode"|"resolvedFilterUsingActionNode"|"resolvedRevokeFromActionNode"|"resolvedRenameToActionNode"|"resolvedSetAsActionNode"|"resolvedAddConstraintActionNode"|"resolvedDropConstraintActionNode"|"resolvedAlterColumnOptionsActionNode"|"resolvedAlterColumnDropNotNullActionNode"|"resolvedAlterColumnSetDataTypeActionNode"|"resolvedDropPrimaryKeyActionNode"|"resolvedRenameColumnActionNode"|"resolvedSetCollateClauseNode"|"resolvedRestrictToActionNode"|"resolvedAddToRestricteeListActionNode"|"resolvedRemoveFromRestricteeListActionNode";
}
