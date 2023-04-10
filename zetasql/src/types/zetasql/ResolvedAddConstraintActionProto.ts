// Original file: src/zetasql/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedAlterActionProto as _zetasql_ResolvedAlterActionProto, ResolvedAlterActionProto__Output as _zetasql_ResolvedAlterActionProto__Output } from '../zetasql/ResolvedAlterActionProto';
import type { AnyResolvedConstraintProto as _zetasql_AnyResolvedConstraintProto, AnyResolvedConstraintProto__Output as _zetasql_AnyResolvedConstraintProto__Output } from '../zetasql/AnyResolvedConstraintProto';
import type { TableRefProto as _zetasql_TableRefProto, TableRefProto__Output as _zetasql_TableRefProto__Output } from '../zetasql/TableRefProto';

export interface ResolvedAddConstraintActionProto {
  'parent'?: (_zetasql_ResolvedAlterActionProto | null);
  'isIfNotExists'?: (boolean);
  'constraint'?: (_zetasql_AnyResolvedConstraintProto | null);
  'table'?: (_zetasql_TableRefProto | null);
}

export interface ResolvedAddConstraintActionProto__Output {
  'parent': (_zetasql_ResolvedAlterActionProto__Output | null);
  'isIfNotExists': (boolean);
  'constraint': (_zetasql_AnyResolvedConstraintProto__Output | null);
  'table': (_zetasql_TableRefProto__Output | null);
}
