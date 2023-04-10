// Original file: src/zetasql-snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTNotNullColumnAttributeProto as _zetasql_ASTNotNullColumnAttributeProto, ASTNotNullColumnAttributeProto__Output as _zetasql_ASTNotNullColumnAttributeProto__Output } from '../zetasql/ASTNotNullColumnAttributeProto';
import type { ASTHiddenColumnAttributeProto as _zetasql_ASTHiddenColumnAttributeProto, ASTHiddenColumnAttributeProto__Output as _zetasql_ASTHiddenColumnAttributeProto__Output } from '../zetasql/ASTHiddenColumnAttributeProto';
import type { ASTPrimaryKeyColumnAttributeProto as _zetasql_ASTPrimaryKeyColumnAttributeProto, ASTPrimaryKeyColumnAttributeProto__Output as _zetasql_ASTPrimaryKeyColumnAttributeProto__Output } from '../zetasql/ASTPrimaryKeyColumnAttributeProto';
import type { ASTForeignKeyColumnAttributeProto as _zetasql_ASTForeignKeyColumnAttributeProto, ASTForeignKeyColumnAttributeProto__Output as _zetasql_ASTForeignKeyColumnAttributeProto__Output } from '../zetasql/ASTForeignKeyColumnAttributeProto';

export interface AnyASTColumnAttributeProto {
  'astNotNullColumnAttributeNode'?: (_zetasql_ASTNotNullColumnAttributeProto | null);
  'astHiddenColumnAttributeNode'?: (_zetasql_ASTHiddenColumnAttributeProto | null);
  'astPrimaryKeyColumnAttributeNode'?: (_zetasql_ASTPrimaryKeyColumnAttributeProto | null);
  'astForeignKeyColumnAttributeNode'?: (_zetasql_ASTForeignKeyColumnAttributeProto | null);
  'node'?: "astNotNullColumnAttributeNode"|"astHiddenColumnAttributeNode"|"astPrimaryKeyColumnAttributeNode"|"astForeignKeyColumnAttributeNode";
}

export interface AnyASTColumnAttributeProto__Output {
  'astNotNullColumnAttributeNode'?: (_zetasql_ASTNotNullColumnAttributeProto__Output | null);
  'astHiddenColumnAttributeNode'?: (_zetasql_ASTHiddenColumnAttributeProto__Output | null);
  'astPrimaryKeyColumnAttributeNode'?: (_zetasql_ASTPrimaryKeyColumnAttributeProto__Output | null);
  'astForeignKeyColumnAttributeNode'?: (_zetasql_ASTForeignKeyColumnAttributeProto__Output | null);
  'node': "astNotNullColumnAttributeNode"|"astHiddenColumnAttributeNode"|"astPrimaryKeyColumnAttributeNode"|"astForeignKeyColumnAttributeNode";
}
