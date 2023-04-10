// Original file: src/snowflake/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedArgumentProto as _zetasql_ResolvedArgumentProto, ResolvedArgumentProto__Output as _zetasql_ResolvedArgumentProto__Output } from '../zetasql/ResolvedArgumentProto';
import type { FieldDescriptorRefProto as _zetasql_FieldDescriptorRefProto, FieldDescriptorRefProto__Output as _zetasql_FieldDescriptorRefProto__Output } from '../zetasql/FieldDescriptorRefProto';

export interface ResolvedFilterFieldArgProto {
  'parent'?: (_zetasql_ResolvedArgumentProto | null);
  'include'?: (boolean);
  'fieldDescriptorPath'?: (_zetasql_FieldDescriptorRefProto)[];
}

export interface ResolvedFilterFieldArgProto__Output {
  'parent': (_zetasql_ResolvedArgumentProto__Output | null);
  'include': (boolean);
  'fieldDescriptorPath': (_zetasql_FieldDescriptorRefProto__Output)[];
}
