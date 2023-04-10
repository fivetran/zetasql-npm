// Original file: src/zetasql-snowflake/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedAlterActionProto as _zetasql_ResolvedAlterActionProto, ResolvedAlterActionProto__Output as _zetasql_ResolvedAlterActionProto__Output } from '../zetasql/ResolvedAlterActionProto';

export interface ResolvedSetAsActionProto {
  'parent'?: (_zetasql_ResolvedAlterActionProto | null);
  'entityBodyJson'?: (string);
  'entityBodyText'?: (string);
}

export interface ResolvedSetAsActionProto__Output {
  'parent': (_zetasql_ResolvedAlterActionProto__Output | null);
  'entityBodyJson': (string);
  'entityBodyText': (string);
}
