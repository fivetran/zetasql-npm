// Original file: src/zetasql-snowflake/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedArgumentProto as _zetasql_ResolvedArgumentProto, ResolvedArgumentProto__Output as _zetasql_ResolvedArgumentProto__Output } from '../zetasql/ResolvedArgumentProto';
import type { ResolvedObjectUnitProto as _zetasql_ResolvedObjectUnitProto, ResolvedObjectUnitProto__Output as _zetasql_ResolvedObjectUnitProto__Output } from '../zetasql/ResolvedObjectUnitProto';

export interface ResolvedPrivilegeProto {
  'parent'?: (_zetasql_ResolvedArgumentProto | null);
  'actionType'?: (string);
  'unitList'?: (_zetasql_ResolvedObjectUnitProto)[];
}

export interface ResolvedPrivilegeProto__Output {
  'parent': (_zetasql_ResolvedArgumentProto__Output | null);
  'actionType': (string);
  'unitList': (_zetasql_ResolvedObjectUnitProto__Output)[];
}
