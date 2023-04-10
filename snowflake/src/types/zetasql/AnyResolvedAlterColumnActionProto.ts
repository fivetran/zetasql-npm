// Original file: src/snowflake/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedAlterColumnOptionsActionProto as _zetasql_ResolvedAlterColumnOptionsActionProto, ResolvedAlterColumnOptionsActionProto__Output as _zetasql_ResolvedAlterColumnOptionsActionProto__Output } from '../zetasql/ResolvedAlterColumnOptionsActionProto';
import type { ResolvedAlterColumnDropNotNullActionProto as _zetasql_ResolvedAlterColumnDropNotNullActionProto, ResolvedAlterColumnDropNotNullActionProto__Output as _zetasql_ResolvedAlterColumnDropNotNullActionProto__Output } from '../zetasql/ResolvedAlterColumnDropNotNullActionProto';
import type { ResolvedAlterColumnSetDataTypeActionProto as _zetasql_ResolvedAlterColumnSetDataTypeActionProto, ResolvedAlterColumnSetDataTypeActionProto__Output as _zetasql_ResolvedAlterColumnSetDataTypeActionProto__Output } from '../zetasql/ResolvedAlterColumnSetDataTypeActionProto';
import type { ResolvedAlterColumnSetDefaultActionProto as _zetasql_ResolvedAlterColumnSetDefaultActionProto, ResolvedAlterColumnSetDefaultActionProto__Output as _zetasql_ResolvedAlterColumnSetDefaultActionProto__Output } from '../zetasql/ResolvedAlterColumnSetDefaultActionProto';
import type { ResolvedAlterColumnDropDefaultActionProto as _zetasql_ResolvedAlterColumnDropDefaultActionProto, ResolvedAlterColumnDropDefaultActionProto__Output as _zetasql_ResolvedAlterColumnDropDefaultActionProto__Output } from '../zetasql/ResolvedAlterColumnDropDefaultActionProto';

export interface AnyResolvedAlterColumnActionProto {
  'resolvedAlterColumnOptionsActionNode'?: (_zetasql_ResolvedAlterColumnOptionsActionProto | null);
  'resolvedAlterColumnDropNotNullActionNode'?: (_zetasql_ResolvedAlterColumnDropNotNullActionProto | null);
  'resolvedAlterColumnSetDataTypeActionNode'?: (_zetasql_ResolvedAlterColumnSetDataTypeActionProto | null);
  'resolvedAlterColumnSetDefaultActionNode'?: (_zetasql_ResolvedAlterColumnSetDefaultActionProto | null);
  'resolvedAlterColumnDropDefaultActionNode'?: (_zetasql_ResolvedAlterColumnDropDefaultActionProto | null);
  'node'?: "resolvedAlterColumnOptionsActionNode"|"resolvedAlterColumnDropNotNullActionNode"|"resolvedAlterColumnSetDataTypeActionNode"|"resolvedAlterColumnSetDefaultActionNode"|"resolvedAlterColumnDropDefaultActionNode";
}

export interface AnyResolvedAlterColumnActionProto__Output {
  'resolvedAlterColumnOptionsActionNode'?: (_zetasql_ResolvedAlterColumnOptionsActionProto__Output | null);
  'resolvedAlterColumnDropNotNullActionNode'?: (_zetasql_ResolvedAlterColumnDropNotNullActionProto__Output | null);
  'resolvedAlterColumnSetDataTypeActionNode'?: (_zetasql_ResolvedAlterColumnSetDataTypeActionProto__Output | null);
  'resolvedAlterColumnSetDefaultActionNode'?: (_zetasql_ResolvedAlterColumnSetDefaultActionProto__Output | null);
  'resolvedAlterColumnDropDefaultActionNode'?: (_zetasql_ResolvedAlterColumnDropDefaultActionProto__Output | null);
  'node': "resolvedAlterColumnOptionsActionNode"|"resolvedAlterColumnDropNotNullActionNode"|"resolvedAlterColumnSetDataTypeActionNode"|"resolvedAlterColumnSetDefaultActionNode"|"resolvedAlterColumnDropDefaultActionNode";
}
