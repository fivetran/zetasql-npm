// Original file: protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedArgumentProto as _zetasql_ResolvedArgumentProto, ResolvedArgumentProto__Output as _zetasql_ResolvedArgumentProto__Output } from '../zetasql/ResolvedArgumentProto';
import type { ResolvedOptionProto as _zetasql_ResolvedOptionProto, ResolvedOptionProto__Output as _zetasql_ResolvedOptionProto__Output } from '../zetasql/ResolvedOptionProto';
import type { Long } from '@grpc/proto-loader';

export interface ResolvedPrimaryKeyProto {
  'parent'?: (_zetasql_ResolvedArgumentProto | null);
  'columnOffsetList'?: (number | string | Long)[];
  'optionList'?: (_zetasql_ResolvedOptionProto)[];
  'unenforced'?: (boolean);
}

export interface ResolvedPrimaryKeyProto__Output {
  'parent': (_zetasql_ResolvedArgumentProto__Output | null);
  'columnOffsetList': (Long)[];
  'optionList': (_zetasql_ResolvedOptionProto__Output)[];
  'unenforced': (boolean);
}
