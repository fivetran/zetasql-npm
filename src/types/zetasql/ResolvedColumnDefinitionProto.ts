// Original file: protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedArgumentProto as _zetasql_ResolvedArgumentProto, ResolvedArgumentProto__Output as _zetasql_ResolvedArgumentProto__Output } from '../zetasql/ResolvedArgumentProto';
import type { TypeProto as _zetasql_TypeProto, TypeProto__Output as _zetasql_TypeProto__Output } from '../zetasql/TypeProto';
import type { ResolvedColumnAnnotationsProto as _zetasql_ResolvedColumnAnnotationsProto, ResolvedColumnAnnotationsProto__Output as _zetasql_ResolvedColumnAnnotationsProto__Output } from '../zetasql/ResolvedColumnAnnotationsProto';
import type { ResolvedColumnProto as _zetasql_ResolvedColumnProto, ResolvedColumnProto__Output as _zetasql_ResolvedColumnProto__Output } from '../zetasql/ResolvedColumnProto';
import type { ResolvedGeneratedColumnInfoProto as _zetasql_ResolvedGeneratedColumnInfoProto, ResolvedGeneratedColumnInfoProto__Output as _zetasql_ResolvedGeneratedColumnInfoProto__Output } from '../zetasql/ResolvedGeneratedColumnInfoProto';
import type { AnyResolvedExprProto as _zetasql_AnyResolvedExprProto, AnyResolvedExprProto__Output as _zetasql_AnyResolvedExprProto__Output } from '../zetasql/AnyResolvedExprProto';

export interface ResolvedColumnDefinitionProto {
  'parent'?: (_zetasql_ResolvedArgumentProto | null);
  'name'?: (string);
  'type'?: (_zetasql_TypeProto | null);
  'annotations'?: (_zetasql_ResolvedColumnAnnotationsProto | null);
  'isHidden'?: (boolean);
  'column'?: (_zetasql_ResolvedColumnProto | null);
  'generatedColumnInfo'?: (_zetasql_ResolvedGeneratedColumnInfoProto | null);
  'defaultExpression'?: (_zetasql_AnyResolvedExprProto | null);
}

export interface ResolvedColumnDefinitionProto__Output {
  'parent': (_zetasql_ResolvedArgumentProto__Output | null);
  'name': (string);
  'type': (_zetasql_TypeProto__Output | null);
  'annotations': (_zetasql_ResolvedColumnAnnotationsProto__Output | null);
  'isHidden': (boolean);
  'column': (_zetasql_ResolvedColumnProto__Output | null);
  'generatedColumnInfo': (_zetasql_ResolvedGeneratedColumnInfoProto__Output | null);
  'defaultExpression': (_zetasql_AnyResolvedExprProto__Output | null);
}
