// Original file: src/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedArgumentProto as _zetasql_ResolvedArgumentProto, ResolvedArgumentProto__Output as _zetasql_ResolvedArgumentProto__Output } from '../zetasql/ResolvedArgumentProto';

export interface ResolvedPrivilegeProto {
  'parent'?: (_zetasql_ResolvedArgumentProto | null);
  'actionType'?: (string);
  'unitList'?: (string)[];
}

export interface ResolvedPrivilegeProto__Output {
  'parent': (_zetasql_ResolvedArgumentProto__Output | null);
  'actionType': (string);
  'unitList': (string)[];
}
