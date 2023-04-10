// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTCreateFunctionStatementProto as _zetasql_ASTCreateFunctionStatementProto, ASTCreateFunctionStatementProto__Output as _zetasql_ASTCreateFunctionStatementProto__Output } from '../zetasql/ASTCreateFunctionStatementProto';
import type { ASTCreateTableFunctionStatementProto as _zetasql_ASTCreateTableFunctionStatementProto, ASTCreateTableFunctionStatementProto__Output as _zetasql_ASTCreateTableFunctionStatementProto__Output } from '../zetasql/ASTCreateTableFunctionStatementProto';

export interface AnyASTCreateFunctionStmtBaseProto {
  'astCreateFunctionStatementNode'?: (_zetasql_ASTCreateFunctionStatementProto | null);
  'astCreateTableFunctionStatementNode'?: (_zetasql_ASTCreateTableFunctionStatementProto | null);
  'node'?: "astCreateFunctionStatementNode"|"astCreateTableFunctionStatementNode";
}

export interface AnyASTCreateFunctionStmtBaseProto__Output {
  'astCreateFunctionStatementNode'?: (_zetasql_ASTCreateFunctionStatementProto__Output | null);
  'astCreateTableFunctionStatementNode'?: (_zetasql_ASTCreateTableFunctionStatementProto__Output | null);
  'node': "astCreateFunctionStatementNode"|"astCreateTableFunctionStatementNode";
}
