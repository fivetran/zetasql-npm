// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTCreateTableStatementProto as _zetasql_ASTCreateTableStatementProto, ASTCreateTableStatementProto__Output as _zetasql_ASTCreateTableStatementProto__Output } from '../zetasql/ASTCreateTableStatementProto';
import type { ASTCreateExternalTableStatementProto as _zetasql_ASTCreateExternalTableStatementProto, ASTCreateExternalTableStatementProto__Output as _zetasql_ASTCreateExternalTableStatementProto__Output } from '../zetasql/ASTCreateExternalTableStatementProto';
import type { ASTAuxLoadDataStatementProto as _zetasql_ASTAuxLoadDataStatementProto, ASTAuxLoadDataStatementProto__Output as _zetasql_ASTAuxLoadDataStatementProto__Output } from '../zetasql/ASTAuxLoadDataStatementProto';

export interface AnyASTCreateTableStmtBaseProto {
  'astCreateTableStatementNode'?: (_zetasql_ASTCreateTableStatementProto | null);
  'astCreateExternalTableStatementNode'?: (_zetasql_ASTCreateExternalTableStatementProto | null);
  'astAuxLoadDataStatementNode'?: (_zetasql_ASTAuxLoadDataStatementProto | null);
  'node'?: "astCreateTableStatementNode"|"astCreateExternalTableStatementNode"|"astAuxLoadDataStatementNode";
}

export interface AnyASTCreateTableStmtBaseProto__Output {
  'astCreateTableStatementNode'?: (_zetasql_ASTCreateTableStatementProto__Output | null);
  'astCreateExternalTableStatementNode'?: (_zetasql_ASTCreateExternalTableStatementProto__Output | null);
  'astAuxLoadDataStatementNode'?: (_zetasql_ASTAuxLoadDataStatementProto__Output | null);
  'node': "astCreateTableStatementNode"|"astCreateExternalTableStatementNode"|"astAuxLoadDataStatementNode";
}
