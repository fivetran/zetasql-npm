// Original file: src/zetasql-snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTQueryProto as _zetasql_ASTQueryProto, ASTQueryProto__Output as _zetasql_ASTQueryProto__Output } from '../zetasql/ASTQueryProto';
import type { ASTSelectProto as _zetasql_ASTSelectProto, ASTSelectProto__Output as _zetasql_ASTSelectProto__Output } from '../zetasql/ASTSelectProto';
import type { ASTSetOperationProto as _zetasql_ASTSetOperationProto, ASTSetOperationProto__Output as _zetasql_ASTSetOperationProto__Output } from '../zetasql/ASTSetOperationProto';

export interface AnyASTQueryExpressionProto {
  'astQueryNode'?: (_zetasql_ASTQueryProto | null);
  'astSelectNode'?: (_zetasql_ASTSelectProto | null);
  'astSetOperationNode'?: (_zetasql_ASTSetOperationProto | null);
  'node'?: "astQueryNode"|"astSelectNode"|"astSetOperationNode";
}

export interface AnyASTQueryExpressionProto__Output {
  'astQueryNode'?: (_zetasql_ASTQueryProto__Output | null);
  'astSelectNode'?: (_zetasql_ASTSelectProto__Output | null);
  'astSetOperationNode'?: (_zetasql_ASTSetOperationProto__Output | null);
  'node': "astQueryNode"|"astSelectNode"|"astSetOperationNode";
}
