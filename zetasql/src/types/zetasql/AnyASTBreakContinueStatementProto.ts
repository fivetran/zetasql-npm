// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTBreakStatementProto as _zetasql_ASTBreakStatementProto, ASTBreakStatementProto__Output as _zetasql_ASTBreakStatementProto__Output } from '../zetasql/ASTBreakStatementProto';
import type { ASTContinueStatementProto as _zetasql_ASTContinueStatementProto, ASTContinueStatementProto__Output as _zetasql_ASTContinueStatementProto__Output } from '../zetasql/ASTContinueStatementProto';

export interface AnyASTBreakContinueStatementProto {
  'astBreakStatementNode'?: (_zetasql_ASTBreakStatementProto | null);
  'astContinueStatementNode'?: (_zetasql_ASTContinueStatementProto | null);
  'node'?: "astBreakStatementNode"|"astContinueStatementNode";
}

export interface AnyASTBreakContinueStatementProto__Output {
  'astBreakStatementNode'?: (_zetasql_ASTBreakStatementProto__Output | null);
  'astContinueStatementNode'?: (_zetasql_ASTContinueStatementProto__Output | null);
  'node': "astBreakStatementNode"|"astContinueStatementNode";
}
