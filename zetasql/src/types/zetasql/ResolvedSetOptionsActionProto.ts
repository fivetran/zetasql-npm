// Original file: src/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedAlterActionProto as _zetasql_ResolvedAlterActionProto, ResolvedAlterActionProto__Output as _zetasql_ResolvedAlterActionProto__Output } from '../zetasql/ResolvedAlterActionProto';
import type { ResolvedOptionProto as _zetasql_ResolvedOptionProto, ResolvedOptionProto__Output as _zetasql_ResolvedOptionProto__Output } from '../zetasql/ResolvedOptionProto';

export interface ResolvedSetOptionsActionProto {
  'parent'?: (_zetasql_ResolvedAlterActionProto | null);
  'optionList'?: (_zetasql_ResolvedOptionProto)[];
}

export interface ResolvedSetOptionsActionProto__Output {
  'parent': (_zetasql_ResolvedAlterActionProto__Output | null);
  'optionList': (_zetasql_ResolvedOptionProto__Output)[];
}
