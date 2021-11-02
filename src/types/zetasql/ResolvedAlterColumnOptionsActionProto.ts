// Original file: src/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedAlterActionProto as _zetasql_ResolvedAlterActionProto, ResolvedAlterActionProto__Output as _zetasql_ResolvedAlterActionProto__Output } from '../zetasql/ResolvedAlterActionProto';
import type { ResolvedOptionProto as _zetasql_ResolvedOptionProto, ResolvedOptionProto__Output as _zetasql_ResolvedOptionProto__Output } from '../zetasql/ResolvedOptionProto';

export interface ResolvedAlterColumnOptionsActionProto {
  'parent'?: (_zetasql_ResolvedAlterActionProto | null);
  'column'?: (string);
  'optionList'?: (_zetasql_ResolvedOptionProto)[];
  'isIfExists'?: (boolean);
}

export interface ResolvedAlterColumnOptionsActionProto__Output {
  'parent': (_zetasql_ResolvedAlterActionProto__Output | null);
  'column': (string);
  'optionList': (_zetasql_ResolvedOptionProto__Output)[];
  'isIfExists': (boolean);
}
