// Original file: src/zetasql-snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTTableExpressionProto as _zetasql_ASTTableExpressionProto, ASTTableExpressionProto__Output as _zetasql_ASTTableExpressionProto__Output } from '../zetasql/ASTTableExpressionProto';
import type { ASTQueryProto as _zetasql_ASTQueryProto, ASTQueryProto__Output as _zetasql_ASTQueryProto__Output } from '../zetasql/ASTQueryProto';
import type { ASTAliasProto as _zetasql_ASTAliasProto, ASTAliasProto__Output as _zetasql_ASTAliasProto__Output } from '../zetasql/ASTAliasProto';
import type { ASTPivotClauseProto as _zetasql_ASTPivotClauseProto, ASTPivotClauseProto__Output as _zetasql_ASTPivotClauseProto__Output } from '../zetasql/ASTPivotClauseProto';
import type { ASTUnpivotClauseProto as _zetasql_ASTUnpivotClauseProto, ASTUnpivotClauseProto__Output as _zetasql_ASTUnpivotClauseProto__Output } from '../zetasql/ASTUnpivotClauseProto';
import type { ASTSampleClauseProto as _zetasql_ASTSampleClauseProto, ASTSampleClauseProto__Output as _zetasql_ASTSampleClauseProto__Output } from '../zetasql/ASTSampleClauseProto';

export interface ASTTableSubqueryProto {
  'parent'?: (_zetasql_ASTTableExpressionProto | null);
  'subquery'?: (_zetasql_ASTQueryProto | null);
  'alias'?: (_zetasql_ASTAliasProto | null);
  'pivotClause'?: (_zetasql_ASTPivotClauseProto | null);
  'unpivotClause'?: (_zetasql_ASTUnpivotClauseProto | null);
  'sampleClause'?: (_zetasql_ASTSampleClauseProto | null);
}

export interface ASTTableSubqueryProto__Output {
  'parent': (_zetasql_ASTTableExpressionProto__Output | null);
  'subquery': (_zetasql_ASTQueryProto__Output | null);
  'alias': (_zetasql_ASTAliasProto__Output | null);
  'pivotClause': (_zetasql_ASTPivotClauseProto__Output | null);
  'unpivotClause': (_zetasql_ASTUnpivotClauseProto__Output | null);
  'sampleClause': (_zetasql_ASTSampleClauseProto__Output | null);
}
