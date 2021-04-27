// Original file: protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedConstraintProto as _zetasql_ResolvedConstraintProto, ResolvedConstraintProto__Output as _zetasql_ResolvedConstraintProto__Output } from '../zetasql/ResolvedConstraintProto';
import type { TableRefProto as _zetasql_TableRefProto, TableRefProto__Output as _zetasql_TableRefProto__Output } from '../zetasql/TableRefProto';
import type { _zetasql_ResolvedForeignKeyEnums_MatchMode } from '../zetasql/ResolvedForeignKeyEnums';
import type { _zetasql_ResolvedForeignKeyEnums_ActionOperation } from '../zetasql/ResolvedForeignKeyEnums';
import type { ResolvedOptionProto as _zetasql_ResolvedOptionProto, ResolvedOptionProto__Output as _zetasql_ResolvedOptionProto__Output } from '../zetasql/ResolvedOptionProto';
import type { Long } from '@grpc/proto-loader';

export interface ResolvedForeignKeyProto {
  'parent'?: (_zetasql_ResolvedConstraintProto | null);
  'constraintName'?: (string);
  'referencingColumnOffsetList'?: (number | string | Long)[];
  'referencedTable'?: (_zetasql_TableRefProto | null);
  'referencedColumnOffsetList'?: (number | string | Long)[];
  'matchMode'?: (_zetasql_ResolvedForeignKeyEnums_MatchMode | keyof typeof _zetasql_ResolvedForeignKeyEnums_MatchMode);
  'updateAction'?: (_zetasql_ResolvedForeignKeyEnums_ActionOperation | keyof typeof _zetasql_ResolvedForeignKeyEnums_ActionOperation);
  'deleteAction'?: (_zetasql_ResolvedForeignKeyEnums_ActionOperation | keyof typeof _zetasql_ResolvedForeignKeyEnums_ActionOperation);
  'enforced'?: (boolean);
  'optionList'?: (_zetasql_ResolvedOptionProto)[];
  'referencingColumnList'?: (string)[];
}

export interface ResolvedForeignKeyProto__Output {
  'parent': (_zetasql_ResolvedConstraintProto__Output | null);
  'constraintName': (string);
  'referencingColumnOffsetList': (Long)[];
  'referencedTable': (_zetasql_TableRefProto__Output | null);
  'referencedColumnOffsetList': (Long)[];
  'matchMode': (keyof typeof _zetasql_ResolvedForeignKeyEnums_MatchMode);
  'updateAction': (keyof typeof _zetasql_ResolvedForeignKeyEnums_ActionOperation);
  'deleteAction': (keyof typeof _zetasql_ResolvedForeignKeyEnums_ActionOperation);
  'enforced': (boolean);
  'optionList': (_zetasql_ResolvedOptionProto__Output)[];
  'referencingColumnList': (string)[];
}
