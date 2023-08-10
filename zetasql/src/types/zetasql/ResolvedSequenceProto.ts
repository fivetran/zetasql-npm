// Original file: src/zetasql/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedArgumentProto as _zetasql_ResolvedArgumentProto, ResolvedArgumentProto__Output as _zetasql_ResolvedArgumentProto__Output } from '../zetasql/ResolvedArgumentProto';
import type { SequenceRefProto as _zetasql_SequenceRefProto, SequenceRefProto__Output as _zetasql_SequenceRefProto__Output } from '../zetasql/SequenceRefProto';

export interface ResolvedSequenceProto {
  'parent'?: (_zetasql_ResolvedArgumentProto | null);
  'sequence'?: (_zetasql_SequenceRefProto | null);
}

export interface ResolvedSequenceProto__Output {
  'parent': (_zetasql_ResolvedArgumentProto__Output | null);
  'sequence': (_zetasql_SequenceRefProto__Output | null);
}
