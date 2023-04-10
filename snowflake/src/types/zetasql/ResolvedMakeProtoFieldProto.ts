// Original file: src/snowflake/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedArgumentProto as _zetasql_ResolvedArgumentProto, ResolvedArgumentProto__Output as _zetasql_ResolvedArgumentProto__Output } from '../zetasql/ResolvedArgumentProto';
import type { FieldDescriptorRefProto as _zetasql_FieldDescriptorRefProto, FieldDescriptorRefProto__Output as _zetasql_FieldDescriptorRefProto__Output } from '../zetasql/FieldDescriptorRefProto';
import type { _zetasql_FieldFormat_Format, _zetasql_FieldFormat_Format__Output } from '../zetasql/FieldFormat';
import type { AnyResolvedExprProto as _zetasql_AnyResolvedExprProto, AnyResolvedExprProto__Output as _zetasql_AnyResolvedExprProto__Output } from '../zetasql/AnyResolvedExprProto';

export interface ResolvedMakeProtoFieldProto {
  'parent'?: (_zetasql_ResolvedArgumentProto | null);
  'fieldDescriptor'?: (_zetasql_FieldDescriptorRefProto | null);
  'format'?: (_zetasql_FieldFormat_Format);
  'expr'?: (_zetasql_AnyResolvedExprProto | null);
}

export interface ResolvedMakeProtoFieldProto__Output {
  'parent': (_zetasql_ResolvedArgumentProto__Output | null);
  'fieldDescriptor': (_zetasql_FieldDescriptorRefProto__Output | null);
  'format': (_zetasql_FieldFormat_Format__Output);
  'expr': (_zetasql_AnyResolvedExprProto__Output | null);
}
