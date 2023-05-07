// Original file: src/zetasql/protos/zetasql/proto/function.proto

import type { ResolvedASTRewrite as _zetasql_ResolvedASTRewrite, ResolvedASTRewrite__Output as _zetasql_ResolvedASTRewrite__Output } from '../zetasql/ResolvedASTRewrite';

export interface FunctionSignatureRewriteOptionsProto {
  'enabled'?: (boolean);
  'rewriter'?: (_zetasql_ResolvedASTRewrite);
  'sql'?: (string);
}

export interface FunctionSignatureRewriteOptionsProto__Output {
  'enabled': (boolean);
  'rewriter': (_zetasql_ResolvedASTRewrite__Output);
  'sql': (string);
}
