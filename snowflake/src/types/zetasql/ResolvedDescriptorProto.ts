// Original file: src/zetasql-snowflake/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedArgumentProto as _zetasql_ResolvedArgumentProto, ResolvedArgumentProto__Output as _zetasql_ResolvedArgumentProto__Output } from '../zetasql/ResolvedArgumentProto';
import type { ResolvedColumnProto as _zetasql_ResolvedColumnProto, ResolvedColumnProto__Output as _zetasql_ResolvedColumnProto__Output } from '../zetasql/ResolvedColumnProto';

export interface ResolvedDescriptorProto {
  'parent'?: (_zetasql_ResolvedArgumentProto | null);
  'descriptorColumnList'?: (_zetasql_ResolvedColumnProto)[];
  'descriptorColumnNameList'?: (string)[];
}

export interface ResolvedDescriptorProto__Output {
  'parent': (_zetasql_ResolvedArgumentProto__Output | null);
  'descriptorColumnList': (_zetasql_ResolvedColumnProto__Output)[];
  'descriptorColumnNameList': (string)[];
}
