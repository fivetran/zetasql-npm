// Original file: protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedPrimaryKeyProto as _zetasql_ResolvedPrimaryKeyProto, ResolvedPrimaryKeyProto__Output as _zetasql_ResolvedPrimaryKeyProto__Output } from '../zetasql/ResolvedPrimaryKeyProto';
import type { ResolvedForeignKeyProto as _zetasql_ResolvedForeignKeyProto, ResolvedForeignKeyProto__Output as _zetasql_ResolvedForeignKeyProto__Output } from '../zetasql/ResolvedForeignKeyProto';
import type { ResolvedCheckConstraintProto as _zetasql_ResolvedCheckConstraintProto, ResolvedCheckConstraintProto__Output as _zetasql_ResolvedCheckConstraintProto__Output } from '../zetasql/ResolvedCheckConstraintProto';

export interface AnyResolvedConstraintProto {
  'resolvedPrimaryKeyNode'?: (_zetasql_ResolvedPrimaryKeyProto | null);
  'resolvedForeignKeyNode'?: (_zetasql_ResolvedForeignKeyProto | null);
  'resolvedCheckConstraintNode'?: (_zetasql_ResolvedCheckConstraintProto | null);
  'node'?: "resolvedPrimaryKeyNode"|"resolvedForeignKeyNode"|"resolvedCheckConstraintNode";
}

export interface AnyResolvedConstraintProto__Output {
  'resolvedPrimaryKeyNode'?: (_zetasql_ResolvedPrimaryKeyProto__Output | null);
  'resolvedForeignKeyNode'?: (_zetasql_ResolvedForeignKeyProto__Output | null);
  'resolvedCheckConstraintNode'?: (_zetasql_ResolvedCheckConstraintProto__Output | null);
  'node': "resolvedPrimaryKeyNode"|"resolvedForeignKeyNode"|"resolvedCheckConstraintNode";
}
