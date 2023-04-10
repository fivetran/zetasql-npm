// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTTableExpressionProto as _zetasql_ASTTableExpressionProto, ASTTableExpressionProto__Output as _zetasql_ASTTableExpressionProto__Output } from '../zetasql/ASTTableExpressionProto';
import type { ASTPathExpressionProto as _zetasql_ASTPathExpressionProto, ASTPathExpressionProto__Output as _zetasql_ASTPathExpressionProto__Output } from '../zetasql/ASTPathExpressionProto';
import type { ASTTVFArgumentProto as _zetasql_ASTTVFArgumentProto, ASTTVFArgumentProto__Output as _zetasql_ASTTVFArgumentProto__Output } from '../zetasql/ASTTVFArgumentProto';
import type { ASTHintProto as _zetasql_ASTHintProto, ASTHintProto__Output as _zetasql_ASTHintProto__Output } from '../zetasql/ASTHintProto';
import type { ASTAliasProto as _zetasql_ASTAliasProto, ASTAliasProto__Output as _zetasql_ASTAliasProto__Output } from '../zetasql/ASTAliasProto';
import type { ASTPivotClauseProto as _zetasql_ASTPivotClauseProto, ASTPivotClauseProto__Output as _zetasql_ASTPivotClauseProto__Output } from '../zetasql/ASTPivotClauseProto';
import type { ASTUnpivotClauseProto as _zetasql_ASTUnpivotClauseProto, ASTUnpivotClauseProto__Output as _zetasql_ASTUnpivotClauseProto__Output } from '../zetasql/ASTUnpivotClauseProto';
import type { ASTSampleClauseProto as _zetasql_ASTSampleClauseProto, ASTSampleClauseProto__Output as _zetasql_ASTSampleClauseProto__Output } from '../zetasql/ASTSampleClauseProto';

export interface ASTTVFProto {
  'parent'?: (_zetasql_ASTTableExpressionProto | null);
  'name'?: (_zetasql_ASTPathExpressionProto | null);
  'argumentEntries'?: (_zetasql_ASTTVFArgumentProto)[];
  'hint'?: (_zetasql_ASTHintProto | null);
  'alias'?: (_zetasql_ASTAliasProto | null);
  'pivotClause'?: (_zetasql_ASTPivotClauseProto | null);
  'unpivotClause'?: (_zetasql_ASTUnpivotClauseProto | null);
  'sample'?: (_zetasql_ASTSampleClauseProto | null);
}

export interface ASTTVFProto__Output {
  'parent': (_zetasql_ASTTableExpressionProto__Output | null);
  'name': (_zetasql_ASTPathExpressionProto__Output | null);
  'argumentEntries': (_zetasql_ASTTVFArgumentProto__Output)[];
  'hint': (_zetasql_ASTHintProto__Output | null);
  'alias': (_zetasql_ASTAliasProto__Output | null);
  'pivotClause': (_zetasql_ASTPivotClauseProto__Output | null);
  'unpivotClause': (_zetasql_ASTUnpivotClauseProto__Output | null);
  'sample': (_zetasql_ASTSampleClauseProto__Output | null);
}
