// Original file: src/zetasql-snowflake/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedExprProto as _zetasql_ResolvedExprProto, ResolvedExprProto__Output as _zetasql_ResolvedExprProto__Output } from '../zetasql/ResolvedExprProto';
import type { ValueWithTypeProto as _zetasql_ValueWithTypeProto, ValueWithTypeProto__Output as _zetasql_ValueWithTypeProto__Output } from '../zetasql/ValueWithTypeProto';
import type { Long } from '@grpc/proto-loader';

export interface ResolvedLiteralProto {
  'parent'?: (_zetasql_ResolvedExprProto | null);
  'value'?: (_zetasql_ValueWithTypeProto | null);
  'hasExplicitType'?: (boolean);
  'floatLiteralId'?: (number | string | Long);
  'preserveInLiteralRemover'?: (boolean);
}

export interface ResolvedLiteralProto__Output {
  'parent': (_zetasql_ResolvedExprProto__Output | null);
  'value': (_zetasql_ValueWithTypeProto__Output | null);
  'hasExplicitType': (boolean);
  'floatLiteralId': (Long);
  'preserveInLiteralRemover': (boolean);
}
