// Original file: src/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedConstraintProto as _zetasql_ResolvedConstraintProto, ResolvedConstraintProto__Output as _zetasql_ResolvedConstraintProto__Output } from '../zetasql/ResolvedConstraintProto';
import type { ResolvedOptionProto as _zetasql_ResolvedOptionProto, ResolvedOptionProto__Output as _zetasql_ResolvedOptionProto__Output } from '../zetasql/ResolvedOptionProto';
import type { Long } from '@grpc/proto-loader';

export interface ResolvedPrimaryKeyProto {
  'parent'?: (_zetasql_ResolvedConstraintProto | null);
  'columnOffsetList'?: (number | string | Long)[];
  'optionList'?: (_zetasql_ResolvedOptionProto)[];
  'unenforced'?: (boolean);
  'constraintName'?: (string);
  'columnNameList'?: (string)[];
}

export interface ResolvedPrimaryKeyProto__Output {
  'parent': (_zetasql_ResolvedConstraintProto__Output | null);
  'columnOffsetList': (Long)[];
  'optionList': (_zetasql_ResolvedOptionProto__Output)[];
  'unenforced': (boolean);
  'constraintName': (string);
  'columnNameList': (string)[];
}
