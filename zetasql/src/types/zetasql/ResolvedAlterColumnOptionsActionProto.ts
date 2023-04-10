// Original file: src/zetasql/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedAlterColumnActionProto as _zetasql_ResolvedAlterColumnActionProto, ResolvedAlterColumnActionProto__Output as _zetasql_ResolvedAlterColumnActionProto__Output } from '../zetasql/ResolvedAlterColumnActionProto';
import type { ResolvedOptionProto as _zetasql_ResolvedOptionProto, ResolvedOptionProto__Output as _zetasql_ResolvedOptionProto__Output } from '../zetasql/ResolvedOptionProto';

export interface ResolvedAlterColumnOptionsActionProto {
  'parent'?: (_zetasql_ResolvedAlterColumnActionProto | null);
  'optionList'?: (_zetasql_ResolvedOptionProto)[];
}

export interface ResolvedAlterColumnOptionsActionProto__Output {
  'parent': (_zetasql_ResolvedAlterColumnActionProto__Output | null);
  'optionList': (_zetasql_ResolvedOptionProto__Output)[];
}
