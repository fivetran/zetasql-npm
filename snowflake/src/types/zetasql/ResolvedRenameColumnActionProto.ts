// Original file: src/snowflake/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedAlterActionProto as _zetasql_ResolvedAlterActionProto, ResolvedAlterActionProto__Output as _zetasql_ResolvedAlterActionProto__Output } from '../zetasql/ResolvedAlterActionProto';

export interface ResolvedRenameColumnActionProto {
  'parent'?: (_zetasql_ResolvedAlterActionProto | null);
  'name'?: (string);
  'newName'?: (string);
  'isIfExists'?: (boolean);
}

export interface ResolvedRenameColumnActionProto__Output {
  'parent': (_zetasql_ResolvedAlterActionProto__Output | null);
  'name': (string);
  'newName': (string);
  'isIfExists': (boolean);
}
