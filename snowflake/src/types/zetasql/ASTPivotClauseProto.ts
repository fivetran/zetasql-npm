// Original file: src/zetasql-snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTPivotExpressionListProto as _zetasql_ASTPivotExpressionListProto, ASTPivotExpressionListProto__Output as _zetasql_ASTPivotExpressionListProto__Output } from '../zetasql/ASTPivotExpressionListProto';
import type { AnyASTExpressionProto as _zetasql_AnyASTExpressionProto, AnyASTExpressionProto__Output as _zetasql_AnyASTExpressionProto__Output } from '../zetasql/AnyASTExpressionProto';
import type { ASTPivotValueListProto as _zetasql_ASTPivotValueListProto, ASTPivotValueListProto__Output as _zetasql_ASTPivotValueListProto__Output } from '../zetasql/ASTPivotValueListProto';
import type { ASTAliasProto as _zetasql_ASTAliasProto, ASTAliasProto__Output as _zetasql_ASTAliasProto__Output } from '../zetasql/ASTAliasProto';

export interface ASTPivotClauseProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'pivotExpressions'?: (_zetasql_ASTPivotExpressionListProto | null);
  'forExpression'?: (_zetasql_AnyASTExpressionProto | null);
  'pivotValues'?: (_zetasql_ASTPivotValueListProto | null);
  'outputAlias'?: (_zetasql_ASTAliasProto | null);
}

export interface ASTPivotClauseProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'pivotExpressions': (_zetasql_ASTPivotExpressionListProto__Output | null);
  'forExpression': (_zetasql_AnyASTExpressionProto__Output | null);
  'pivotValues': (_zetasql_ASTPivotValueListProto__Output | null);
  'outputAlias': (_zetasql_ASTAliasProto__Output | null);
}
