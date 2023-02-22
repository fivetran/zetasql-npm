// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTCreateViewStatementProto as _zetasql_ASTCreateViewStatementProto, ASTCreateViewStatementProto__Output as _zetasql_ASTCreateViewStatementProto__Output } from '../zetasql/ASTCreateViewStatementProto';
import type { ASTCreateMaterializedViewStatementProto as _zetasql_ASTCreateMaterializedViewStatementProto, ASTCreateMaterializedViewStatementProto__Output as _zetasql_ASTCreateMaterializedViewStatementProto__Output } from '../zetasql/ASTCreateMaterializedViewStatementProto';

export interface AnyASTCreateViewStatementBaseProto {
  'astCreateViewStatementNode'?: (_zetasql_ASTCreateViewStatementProto | null);
  'astCreateMaterializedViewStatementNode'?: (_zetasql_ASTCreateMaterializedViewStatementProto | null);
  'node'?: "astCreateViewStatementNode"|"astCreateMaterializedViewStatementNode";
}

export interface AnyASTCreateViewStatementBaseProto__Output {
  'astCreateViewStatementNode'?: (_zetasql_ASTCreateViewStatementProto__Output | null);
  'astCreateMaterializedViewStatementNode'?: (_zetasql_ASTCreateMaterializedViewStatementProto__Output | null);
  'node': "astCreateViewStatementNode"|"astCreateMaterializedViewStatementNode";
}
