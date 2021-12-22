// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { AnyASTExpressionProto as _zetasql_AnyASTExpressionProto, AnyASTExpressionProto__Output as _zetasql_AnyASTExpressionProto__Output } from '../zetasql/AnyASTExpressionProto';

export interface ASTFormatClauseProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'format'?: (_zetasql_AnyASTExpressionProto | null);
  'timeZoneExpr'?: (_zetasql_AnyASTExpressionProto | null);
}

export interface ASTFormatClauseProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'format': (_zetasql_AnyASTExpressionProto__Output | null);
  'timeZoneExpr': (_zetasql_AnyASTExpressionProto__Output | null);
}
