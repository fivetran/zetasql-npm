// Original file: protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedForeignKeyProto as _zetasql_ResolvedForeignKeyProto, ResolvedForeignKeyProto__Output as _zetasql_ResolvedForeignKeyProto__Output } from '../zetasql/ResolvedForeignKeyProto';
import type { ResolvedCheckConstraintProto as _zetasql_ResolvedCheckConstraintProto, ResolvedCheckConstraintProto__Output as _zetasql_ResolvedCheckConstraintProto__Output } from '../zetasql/ResolvedCheckConstraintProto';

export interface AnyResolvedConstraintProto {
  'resolvedForeignKeyNode'?: (_zetasql_ResolvedForeignKeyProto | null);
  'resolvedCheckConstraintNode'?: (_zetasql_ResolvedCheckConstraintProto | null);
  'node'?: "resolvedForeignKeyNode"|"resolvedCheckConstraintNode";
}

export interface AnyResolvedConstraintProto__Output {
  'resolvedForeignKeyNode'?: (_zetasql_ResolvedForeignKeyProto__Output | null);
  'resolvedCheckConstraintNode'?: (_zetasql_ResolvedCheckConstraintProto__Output | null);
  'node': "resolvedForeignKeyNode"|"resolvedCheckConstraintNode";
}
