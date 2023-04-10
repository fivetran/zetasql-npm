// Original file: src/snowflake/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedNodeProto as _zetasql_ResolvedNodeProto, ResolvedNodeProto__Output as _zetasql_ResolvedNodeProto__Output } from '../zetasql/ResolvedNodeProto';
import type { TypeProto as _zetasql_TypeProto, TypeProto__Output as _zetasql_TypeProto__Output } from '../zetasql/TypeProto';
import type { AnnotationMapProto as _zetasql_AnnotationMapProto, AnnotationMapProto__Output as _zetasql_AnnotationMapProto__Output } from '../zetasql/AnnotationMapProto';

export interface ResolvedExprProto {
  'parent'?: (_zetasql_ResolvedNodeProto | null);
  'type'?: (_zetasql_TypeProto | null);
  'typeAnnotationMap'?: (_zetasql_AnnotationMapProto | null);
}

export interface ResolvedExprProto__Output {
  'parent': (_zetasql_ResolvedNodeProto__Output | null);
  'type': (_zetasql_TypeProto__Output | null);
  'typeAnnotationMap': (_zetasql_AnnotationMapProto__Output | null);
}
