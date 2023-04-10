// Original file: src/zetasql-snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTUpdateSetValueProto as _zetasql_ASTUpdateSetValueProto, ASTUpdateSetValueProto__Output as _zetasql_ASTUpdateSetValueProto__Output } from '../zetasql/ASTUpdateSetValueProto';
import type { ASTInsertStatementProto as _zetasql_ASTInsertStatementProto, ASTInsertStatementProto__Output as _zetasql_ASTInsertStatementProto__Output } from '../zetasql/ASTInsertStatementProto';
import type { ASTDeleteStatementProto as _zetasql_ASTDeleteStatementProto, ASTDeleteStatementProto__Output as _zetasql_ASTDeleteStatementProto__Output } from '../zetasql/ASTDeleteStatementProto';
import type { ASTUpdateStatementProto as _zetasql_ASTUpdateStatementProto, ASTUpdateStatementProto__Output as _zetasql_ASTUpdateStatementProto__Output } from '../zetasql/ASTUpdateStatementProto';

export interface ASTUpdateItemProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'setValue'?: (_zetasql_ASTUpdateSetValueProto | null);
  'insertStatement'?: (_zetasql_ASTInsertStatementProto | null);
  'deleteStatement'?: (_zetasql_ASTDeleteStatementProto | null);
  'updateStatement'?: (_zetasql_ASTUpdateStatementProto | null);
}

export interface ASTUpdateItemProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'setValue': (_zetasql_ASTUpdateSetValueProto__Output | null);
  'insertStatement': (_zetasql_ASTInsertStatementProto__Output | null);
  'deleteStatement': (_zetasql_ASTDeleteStatementProto__Output | null);
  'updateStatement': (_zetasql_ASTUpdateStatementProto__Output | null);
}
