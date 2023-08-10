// Original file: src/snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTExpressionProto as _zetasql_ASTExpressionProto, ASTExpressionProto__Output as _zetasql_ASTExpressionProto__Output } from '../zetasql/ASTExpressionProto';
import type { AnyASTExpressionProto as _zetasql_AnyASTExpressionProto, AnyASTExpressionProto__Output as _zetasql_AnyASTExpressionProto__Output } from '../zetasql/AnyASTExpressionProto';
import type { ASTAliasProto as _zetasql_ASTAliasProto, ASTAliasProto__Output as _zetasql_ASTAliasProto__Output } from '../zetasql/ASTAliasProto';

export interface ASTExpressionWithAliasProto {
  'parent'?: (_zetasql_ASTExpressionProto | null);
  'expression'?: (_zetasql_AnyASTExpressionProto | null);
  'alias'?: (_zetasql_ASTAliasProto | null);
}

export interface ASTExpressionWithAliasProto__Output {
  'parent': (_zetasql_ASTExpressionProto__Output | null);
  'expression': (_zetasql_AnyASTExpressionProto__Output | null);
  'alias': (_zetasql_ASTAliasProto__Output | null);
}
