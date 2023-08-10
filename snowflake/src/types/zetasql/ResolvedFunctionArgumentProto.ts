// Original file: src/snowflake/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedArgumentProto as _zetasql_ResolvedArgumentProto, ResolvedArgumentProto__Output as _zetasql_ResolvedArgumentProto__Output } from '../zetasql/ResolvedArgumentProto';
import type { AnyResolvedExprProto as _zetasql_AnyResolvedExprProto, AnyResolvedExprProto__Output as _zetasql_AnyResolvedExprProto__Output } from '../zetasql/AnyResolvedExprProto';
import type { AnyResolvedScanProto as _zetasql_AnyResolvedScanProto, AnyResolvedScanProto__Output as _zetasql_AnyResolvedScanProto__Output } from '../zetasql/AnyResolvedScanProto';
import type { ResolvedColumnProto as _zetasql_ResolvedColumnProto, ResolvedColumnProto__Output as _zetasql_ResolvedColumnProto__Output } from '../zetasql/ResolvedColumnProto';
import type { ResolvedModelProto as _zetasql_ResolvedModelProto, ResolvedModelProto__Output as _zetasql_ResolvedModelProto__Output } from '../zetasql/ResolvedModelProto';
import type { ResolvedConnectionProto as _zetasql_ResolvedConnectionProto, ResolvedConnectionProto__Output as _zetasql_ResolvedConnectionProto__Output } from '../zetasql/ResolvedConnectionProto';
import type { ResolvedDescriptorProto as _zetasql_ResolvedDescriptorProto, ResolvedDescriptorProto__Output as _zetasql_ResolvedDescriptorProto__Output } from '../zetasql/ResolvedDescriptorProto';
import type { ResolvedInlineLambdaProto as _zetasql_ResolvedInlineLambdaProto, ResolvedInlineLambdaProto__Output as _zetasql_ResolvedInlineLambdaProto__Output } from '../zetasql/ResolvedInlineLambdaProto';
import type { ResolvedSequenceProto as _zetasql_ResolvedSequenceProto, ResolvedSequenceProto__Output as _zetasql_ResolvedSequenceProto__Output } from '../zetasql/ResolvedSequenceProto';

export interface ResolvedFunctionArgumentProto {
  'parent'?: (_zetasql_ResolvedArgumentProto | null);
  'expr'?: (_zetasql_AnyResolvedExprProto | null);
  'scan'?: (_zetasql_AnyResolvedScanProto | null);
  'argumentColumnList'?: (_zetasql_ResolvedColumnProto)[];
  'model'?: (_zetasql_ResolvedModelProto | null);
  'connection'?: (_zetasql_ResolvedConnectionProto | null);
  'descriptorArg'?: (_zetasql_ResolvedDescriptorProto | null);
  'inlineLambda'?: (_zetasql_ResolvedInlineLambdaProto | null);
  'sequence'?: (_zetasql_ResolvedSequenceProto | null);
}

export interface ResolvedFunctionArgumentProto__Output {
  'parent': (_zetasql_ResolvedArgumentProto__Output | null);
  'expr': (_zetasql_AnyResolvedExprProto__Output | null);
  'scan': (_zetasql_AnyResolvedScanProto__Output | null);
  'argumentColumnList': (_zetasql_ResolvedColumnProto__Output)[];
  'model': (_zetasql_ResolvedModelProto__Output | null);
  'connection': (_zetasql_ResolvedConnectionProto__Output | null);
  'descriptorArg': (_zetasql_ResolvedDescriptorProto__Output | null);
  'inlineLambda': (_zetasql_ResolvedInlineLambdaProto__Output | null);
  'sequence': (_zetasql_ResolvedSequenceProto__Output | null);
}
