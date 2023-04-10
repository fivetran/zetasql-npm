// Original file: src/zetasql-snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { AnyASTExpressionProto as _zetasql_AnyASTExpressionProto, AnyASTExpressionProto__Output as _zetasql_AnyASTExpressionProto__Output } from '../zetasql/AnyASTExpressionProto';
import type { ASTAliasProto as _zetasql_ASTAliasProto, ASTAliasProto__Output as _zetasql_ASTAliasProto__Output } from '../zetasql/ASTAliasProto';

export interface ASTPivotValueProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'value'?: (_zetasql_AnyASTExpressionProto | null);
  'alias'?: (_zetasql_ASTAliasProto | null);
}

export interface ASTPivotValueProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'value': (_zetasql_AnyASTExpressionProto__Output | null);
  'alias': (_zetasql_ASTAliasProto__Output | null);
}
