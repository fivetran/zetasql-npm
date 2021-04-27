// Original file: protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedExprProto as _zetasql_ResolvedExprProto, ResolvedExprProto__Output as _zetasql_ResolvedExprProto__Output } from '../zetasql/ResolvedExprProto';
import type { AnyResolvedExprProto as _zetasql_AnyResolvedExprProto, AnyResolvedExprProto__Output as _zetasql_AnyResolvedExprProto__Output } from '../zetasql/AnyResolvedExprProto';
import type { FieldDescriptorRefProto as _zetasql_FieldDescriptorRefProto, FieldDescriptorRefProto__Output as _zetasql_FieldDescriptorRefProto__Output } from '../zetasql/FieldDescriptorRefProto';
import type { ValueWithTypeProto as _zetasql_ValueWithTypeProto, ValueWithTypeProto__Output as _zetasql_ValueWithTypeProto__Output } from '../zetasql/ValueWithTypeProto';
import type { _zetasql_FieldFormat_Format } from '../zetasql/FieldFormat';

export interface ResolvedGetProtoFieldProto {
  'parent'?: (_zetasql_ResolvedExprProto | null);
  'expr'?: (_zetasql_AnyResolvedExprProto | null);
  'fieldDescriptor'?: (_zetasql_FieldDescriptorRefProto | null);
  'defaultValue'?: (_zetasql_ValueWithTypeProto | null);
  'getHasBit'?: (boolean);
  'format'?: (_zetasql_FieldFormat_Format | keyof typeof _zetasql_FieldFormat_Format);
  'returnDefaultValueWhenUnset'?: (boolean);
}

export interface ResolvedGetProtoFieldProto__Output {
  'parent': (_zetasql_ResolvedExprProto__Output | null);
  'expr': (_zetasql_AnyResolvedExprProto__Output | null);
  'fieldDescriptor': (_zetasql_FieldDescriptorRefProto__Output | null);
  'defaultValue': (_zetasql_ValueWithTypeProto__Output | null);
  'getHasBit': (boolean);
  'format': (keyof typeof _zetasql_FieldFormat_Format);
  'returnDefaultValueWhenUnset': (boolean);
}
