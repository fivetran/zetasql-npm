// Original file: src/zetasql-snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTIdentifierProto as _zetasql_ASTIdentifierProto, ASTIdentifierProto__Output as _zetasql_ASTIdentifierProto__Output } from '../zetasql/ASTIdentifierProto';
import type { AnyASTExpressionProto as _zetasql_AnyASTExpressionProto, AnyASTExpressionProto__Output as _zetasql_AnyASTExpressionProto__Output } from '../zetasql/AnyASTExpressionProto';

export interface ASTOptionsEntryProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'name'?: (_zetasql_ASTIdentifierProto | null);
  'value'?: (_zetasql_AnyASTExpressionProto | null);
}

export interface ASTOptionsEntryProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'name': (_zetasql_ASTIdentifierProto__Output | null);
  'value': (_zetasql_AnyASTExpressionProto__Output | null);
}
