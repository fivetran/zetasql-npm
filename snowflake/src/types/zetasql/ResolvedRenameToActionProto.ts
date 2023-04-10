// Original file: src/zetasql-snowflake/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedAlterActionProto as _zetasql_ResolvedAlterActionProto, ResolvedAlterActionProto__Output as _zetasql_ResolvedAlterActionProto__Output } from '../zetasql/ResolvedAlterActionProto';

export interface ResolvedRenameToActionProto {
  'parent'?: (_zetasql_ResolvedAlterActionProto | null);
  'newPath'?: (string)[];
}

export interface ResolvedRenameToActionProto__Output {
  'parent': (_zetasql_ResolvedAlterActionProto__Output | null);
  'newPath': (string)[];
}
