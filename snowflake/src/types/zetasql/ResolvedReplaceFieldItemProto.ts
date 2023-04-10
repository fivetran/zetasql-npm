// Original file: src/snowflake/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedArgumentProto as _zetasql_ResolvedArgumentProto, ResolvedArgumentProto__Output as _zetasql_ResolvedArgumentProto__Output } from '../zetasql/ResolvedArgumentProto';
import type { AnyResolvedExprProto as _zetasql_AnyResolvedExprProto, AnyResolvedExprProto__Output as _zetasql_AnyResolvedExprProto__Output } from '../zetasql/AnyResolvedExprProto';
import type { FieldDescriptorRefProto as _zetasql_FieldDescriptorRefProto, FieldDescriptorRefProto__Output as _zetasql_FieldDescriptorRefProto__Output } from '../zetasql/FieldDescriptorRefProto';
import type { Long } from '@grpc/proto-loader';

export interface ResolvedReplaceFieldItemProto {
  'parent'?: (_zetasql_ResolvedArgumentProto | null);
  'expr'?: (_zetasql_AnyResolvedExprProto | null);
  'structIndexPath'?: (number | string | Long)[];
  'protoFieldPath'?: (_zetasql_FieldDescriptorRefProto)[];
}

export interface ResolvedReplaceFieldItemProto__Output {
  'parent': (_zetasql_ResolvedArgumentProto__Output | null);
  'expr': (_zetasql_AnyResolvedExprProto__Output | null);
  'structIndexPath': (Long)[];
  'protoFieldPath': (_zetasql_FieldDescriptorRefProto__Output)[];
}
