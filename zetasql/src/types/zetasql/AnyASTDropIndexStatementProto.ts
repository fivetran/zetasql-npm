// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTDropSearchIndexStatementProto as _zetasql_ASTDropSearchIndexStatementProto, ASTDropSearchIndexStatementProto__Output as _zetasql_ASTDropSearchIndexStatementProto__Output } from '../zetasql/ASTDropSearchIndexStatementProto';
import type { ASTDropVectorIndexStatementProto as _zetasql_ASTDropVectorIndexStatementProto, ASTDropVectorIndexStatementProto__Output as _zetasql_ASTDropVectorIndexStatementProto__Output } from '../zetasql/ASTDropVectorIndexStatementProto';

export interface AnyASTDropIndexStatementProto {
  'astDropSearchIndexStatementNode'?: (_zetasql_ASTDropSearchIndexStatementProto | null);
  'astDropVectorIndexStatementNode'?: (_zetasql_ASTDropVectorIndexStatementProto | null);
  'node'?: "astDropSearchIndexStatementNode"|"astDropVectorIndexStatementNode";
}

export interface AnyASTDropIndexStatementProto__Output {
  'astDropSearchIndexStatementNode'?: (_zetasql_ASTDropSearchIndexStatementProto__Output | null);
  'astDropVectorIndexStatementNode'?: (_zetasql_ASTDropVectorIndexStatementProto__Output | null);
  'node': "astDropSearchIndexStatementNode"|"astDropVectorIndexStatementNode";
}
