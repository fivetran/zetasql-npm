// Original file: src/zetasql/protos/local_service.proto

import type { AnyResolvedStatementProto as _zetasql_AnyResolvedStatementProto, AnyResolvedStatementProto__Output as _zetasql_AnyResolvedStatementProto__Output } from '../../zetasql/AnyResolvedStatementProto';
import type { AnyResolvedExprProto as _zetasql_AnyResolvedExprProto, AnyResolvedExprProto__Output as _zetasql_AnyResolvedExprProto__Output } from '../../zetasql/AnyResolvedExprProto';

export interface AnalyzeResponse {
  'resolvedStatement'?: (_zetasql_AnyResolvedStatementProto | null);
  'resumeBytePosition'?: (number);
  'resolvedExpression'?: (_zetasql_AnyResolvedExprProto | null);
  'result'?: "resolvedStatement"|"resolvedExpression";
}

export interface AnalyzeResponse__Output {
  'resolvedStatement'?: (_zetasql_AnyResolvedStatementProto__Output | null);
  'resumeBytePosition': (number);
  'resolvedExpression'?: (_zetasql_AnyResolvedExprProto__Output | null);
  'result': "resolvedStatement"|"resolvedExpression";
}
