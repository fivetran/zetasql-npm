// Original file: src/snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTExpressionProto as _zetasql_ASTExpressionProto, ASTExpressionProto__Output as _zetasql_ASTExpressionProto__Output } from '../zetasql/ASTExpressionProto';
import type { ASTHintProto as _zetasql_ASTHintProto, ASTHintProto__Output as _zetasql_ASTHintProto__Output } from '../zetasql/ASTHintProto';
import type { ASTQueryProto as _zetasql_ASTQueryProto, ASTQueryProto__Output as _zetasql_ASTQueryProto__Output } from '../zetasql/ASTQueryProto';
import type { _zetasql_ASTExpressionSubqueryEnums_Modifier, _zetasql_ASTExpressionSubqueryEnums_Modifier__Output } from '../zetasql/ASTExpressionSubqueryEnums';

export interface ASTExpressionSubqueryProto {
  'parent'?: (_zetasql_ASTExpressionProto | null);
  'hint'?: (_zetasql_ASTHintProto | null);
  'query'?: (_zetasql_ASTQueryProto | null);
  'modifier'?: (_zetasql_ASTExpressionSubqueryEnums_Modifier);
}

export interface ASTExpressionSubqueryProto__Output {
  'parent': (_zetasql_ASTExpressionProto__Output | null);
  'hint': (_zetasql_ASTHintProto__Output | null);
  'query': (_zetasql_ASTQueryProto__Output | null);
  'modifier': (_zetasql_ASTExpressionSubqueryEnums_Modifier__Output);
}
