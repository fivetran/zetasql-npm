// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTWindowFrameExprProto as _zetasql_ASTWindowFrameExprProto, ASTWindowFrameExprProto__Output as _zetasql_ASTWindowFrameExprProto__Output } from '../zetasql/ASTWindowFrameExprProto';
import type { _zetasql_ASTWindowFrameEnums_FrameUnit, _zetasql_ASTWindowFrameEnums_FrameUnit__Output } from '../zetasql/ASTWindowFrameEnums';

export interface ASTWindowFrameProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'startExpr'?: (_zetasql_ASTWindowFrameExprProto | null);
  'endExpr'?: (_zetasql_ASTWindowFrameExprProto | null);
  'frameUnit'?: (_zetasql_ASTWindowFrameEnums_FrameUnit);
}

export interface ASTWindowFrameProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'startExpr': (_zetasql_ASTWindowFrameExprProto__Output | null);
  'endExpr': (_zetasql_ASTWindowFrameExprProto__Output | null);
  'frameUnit': (_zetasql_ASTWindowFrameEnums_FrameUnit__Output);
}
