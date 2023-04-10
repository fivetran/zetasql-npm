// Original file: src/zetasql/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedAlterActionProto as _zetasql_ResolvedAlterActionProto, ResolvedAlterActionProto__Output as _zetasql_ResolvedAlterActionProto__Output } from '../zetasql/ResolvedAlterActionProto';
import type { AnyResolvedAlterActionProto as _zetasql_AnyResolvedAlterActionProto, AnyResolvedAlterActionProto__Output as _zetasql_AnyResolvedAlterActionProto__Output } from '../zetasql/AnyResolvedAlterActionProto';

export interface ResolvedAlterSubEntityActionProto {
  'parent'?: (_zetasql_ResolvedAlterActionProto | null);
  'entityType'?: (string);
  'name'?: (string);
  'alterAction'?: (_zetasql_AnyResolvedAlterActionProto | null);
  'isIfExists'?: (boolean);
}

export interface ResolvedAlterSubEntityActionProto__Output {
  'parent': (_zetasql_ResolvedAlterActionProto__Output | null);
  'entityType': (string);
  'name': (string);
  'alterAction': (_zetasql_AnyResolvedAlterActionProto__Output | null);
  'isIfExists': (boolean);
}
