// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTBreakContinueStatementProto as _zetasql_ASTBreakContinueStatementProto, ASTBreakContinueStatementProto__Output as _zetasql_ASTBreakContinueStatementProto__Output } from '../zetasql/ASTBreakContinueStatementProto';
import type { _zetasql_ASTBreakContinueStatementEnums_BreakContinueKeyword, _zetasql_ASTBreakContinueStatementEnums_BreakContinueKeyword__Output } from '../zetasql/ASTBreakContinueStatementEnums';

export interface ASTBreakStatementProto {
  'parent'?: (_zetasql_ASTBreakContinueStatementProto | null);
  'keyword'?: (_zetasql_ASTBreakContinueStatementEnums_BreakContinueKeyword);
}

export interface ASTBreakStatementProto__Output {
  'parent': (_zetasql_ASTBreakContinueStatementProto__Output | null);
  'keyword': (_zetasql_ASTBreakContinueStatementEnums_BreakContinueKeyword__Output);
}
