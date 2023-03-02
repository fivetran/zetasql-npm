// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTTableExpressionProto as _zetasql_ASTTableExpressionProto, ASTTableExpressionProto__Output as _zetasql_ASTTableExpressionProto__Output } from '../zetasql/ASTTableExpressionProto';
import type { ASTPathExpressionProto as _zetasql_ASTPathExpressionProto, ASTPathExpressionProto__Output as _zetasql_ASTPathExpressionProto__Output } from '../zetasql/ASTPathExpressionProto';
import type { ASTUnnestExpressionProto as _zetasql_ASTUnnestExpressionProto, ASTUnnestExpressionProto__Output as _zetasql_ASTUnnestExpressionProto__Output } from '../zetasql/ASTUnnestExpressionProto';
import type { ASTHintProto as _zetasql_ASTHintProto, ASTHintProto__Output as _zetasql_ASTHintProto__Output } from '../zetasql/ASTHintProto';
import type { ASTAliasProto as _zetasql_ASTAliasProto, ASTAliasProto__Output as _zetasql_ASTAliasProto__Output } from '../zetasql/ASTAliasProto';
import type { ASTWithOffsetProto as _zetasql_ASTWithOffsetProto, ASTWithOffsetProto__Output as _zetasql_ASTWithOffsetProto__Output } from '../zetasql/ASTWithOffsetProto';
import type { ASTPivotClauseProto as _zetasql_ASTPivotClauseProto, ASTPivotClauseProto__Output as _zetasql_ASTPivotClauseProto__Output } from '../zetasql/ASTPivotClauseProto';
import type { ASTUnpivotClauseProto as _zetasql_ASTUnpivotClauseProto, ASTUnpivotClauseProto__Output as _zetasql_ASTUnpivotClauseProto__Output } from '../zetasql/ASTUnpivotClauseProto';
import type { ASTForSystemTimeProto as _zetasql_ASTForSystemTimeProto, ASTForSystemTimeProto__Output as _zetasql_ASTForSystemTimeProto__Output } from '../zetasql/ASTForSystemTimeProto';
import type { ASTSampleClauseProto as _zetasql_ASTSampleClauseProto, ASTSampleClauseProto__Output as _zetasql_ASTSampleClauseProto__Output } from '../zetasql/ASTSampleClauseProto';

export interface ASTTablePathExpressionProto {
  'parent'?: (_zetasql_ASTTableExpressionProto | null);
  'pathExpr'?: (_zetasql_ASTPathExpressionProto | null);
  'unnestExpr'?: (_zetasql_ASTUnnestExpressionProto | null);
  'hint'?: (_zetasql_ASTHintProto | null);
  'alias'?: (_zetasql_ASTAliasProto | null);
  'withOffset'?: (_zetasql_ASTWithOffsetProto | null);
  'pivotClause'?: (_zetasql_ASTPivotClauseProto | null);
  'unpivotClause'?: (_zetasql_ASTUnpivotClauseProto | null);
  'forSystemTime'?: (_zetasql_ASTForSystemTimeProto | null);
  'sampleClause'?: (_zetasql_ASTSampleClauseProto | null);
}

export interface ASTTablePathExpressionProto__Output {
  'parent': (_zetasql_ASTTableExpressionProto__Output | null);
  'pathExpr': (_zetasql_ASTPathExpressionProto__Output | null);
  'unnestExpr': (_zetasql_ASTUnnestExpressionProto__Output | null);
  'hint': (_zetasql_ASTHintProto__Output | null);
  'alias': (_zetasql_ASTAliasProto__Output | null);
  'withOffset': (_zetasql_ASTWithOffsetProto__Output | null);
  'pivotClause': (_zetasql_ASTPivotClauseProto__Output | null);
  'unpivotClause': (_zetasql_ASTUnpivotClauseProto__Output | null);
  'forSystemTime': (_zetasql_ASTForSystemTimeProto__Output | null);
  'sampleClause': (_zetasql_ASTSampleClauseProto__Output | null);
}
