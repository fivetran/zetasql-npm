// Original file: src/zetasql/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedAlterColumnActionProto as _zetasql_ResolvedAlterColumnActionProto, ResolvedAlterColumnActionProto__Output as _zetasql_ResolvedAlterColumnActionProto__Output } from '../zetasql/ResolvedAlterColumnActionProto';
import type { ResolvedColumnDefaultValueProto as _zetasql_ResolvedColumnDefaultValueProto, ResolvedColumnDefaultValueProto__Output as _zetasql_ResolvedColumnDefaultValueProto__Output } from '../zetasql/ResolvedColumnDefaultValueProto';

export interface ResolvedAlterColumnSetDefaultActionProto {
  'parent'?: (_zetasql_ResolvedAlterColumnActionProto | null);
  'defaultValue'?: (_zetasql_ResolvedColumnDefaultValueProto | null);
}

export interface ResolvedAlterColumnSetDefaultActionProto__Output {
  'parent': (_zetasql_ResolvedAlterColumnActionProto__Output | null);
  'defaultValue': (_zetasql_ResolvedColumnDefaultValueProto__Output | null);
}
