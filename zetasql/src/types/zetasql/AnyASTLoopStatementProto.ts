// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTWhileStatementProto as _zetasql_ASTWhileStatementProto, ASTWhileStatementProto__Output as _zetasql_ASTWhileStatementProto__Output } from '../zetasql/ASTWhileStatementProto';
import type { ASTRepeatStatementProto as _zetasql_ASTRepeatStatementProto, ASTRepeatStatementProto__Output as _zetasql_ASTRepeatStatementProto__Output } from '../zetasql/ASTRepeatStatementProto';
import type { ASTForInStatementProto as _zetasql_ASTForInStatementProto, ASTForInStatementProto__Output as _zetasql_ASTForInStatementProto__Output } from '../zetasql/ASTForInStatementProto';

export interface AnyASTLoopStatementProto {
  'astWhileStatementNode'?: (_zetasql_ASTWhileStatementProto | null);
  'astRepeatStatementNode'?: (_zetasql_ASTRepeatStatementProto | null);
  'astForInStatementNode'?: (_zetasql_ASTForInStatementProto | null);
  'node'?: "astWhileStatementNode"|"astRepeatStatementNode"|"astForInStatementNode";
}

export interface AnyASTLoopStatementProto__Output {
  'astWhileStatementNode'?: (_zetasql_ASTWhileStatementProto__Output | null);
  'astRepeatStatementNode'?: (_zetasql_ASTRepeatStatementProto__Output | null);
  'astForInStatementNode'?: (_zetasql_ASTForInStatementProto__Output | null);
  'node': "astWhileStatementNode"|"astRepeatStatementNode"|"astForInStatementNode";
}
