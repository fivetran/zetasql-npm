// Original file: protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedAlterActionProto as _zetasql_ResolvedAlterActionProto, ResolvedAlterActionProto__Output as _zetasql_ResolvedAlterActionProto__Output } from '../zetasql/ResolvedAlterActionProto';
import type { ResolvedColumnDefinitionProto as _zetasql_ResolvedColumnDefinitionProto, ResolvedColumnDefinitionProto__Output as _zetasql_ResolvedColumnDefinitionProto__Output } from '../zetasql/ResolvedColumnDefinitionProto';

export interface ResolvedAddColumnActionProto {
  'parent'?: (_zetasql_ResolvedAlterActionProto | null);
  'isIfNotExists'?: (boolean);
  'columnDefinition'?: (_zetasql_ResolvedColumnDefinitionProto | null);
}

export interface ResolvedAddColumnActionProto__Output {
  'parent': (_zetasql_ResolvedAlterActionProto__Output | null);
  'isIfNotExists': (boolean);
  'columnDefinition': (_zetasql_ResolvedColumnDefinitionProto__Output | null);
}
