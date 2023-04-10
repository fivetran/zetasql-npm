// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTTableExpressionProto as _zetasql_ASTTableExpressionProto, ASTTableExpressionProto__Output as _zetasql_ASTTableExpressionProto__Output } from '../zetasql/ASTTableExpressionProto';
import type { ASTJoinProto as _zetasql_ASTJoinProto, ASTJoinProto__Output as _zetasql_ASTJoinProto__Output } from '../zetasql/ASTJoinProto';
import type { ASTSampleClauseProto as _zetasql_ASTSampleClauseProto, ASTSampleClauseProto__Output as _zetasql_ASTSampleClauseProto__Output } from '../zetasql/ASTSampleClauseProto';

export interface ASTParenthesizedJoinProto {
  'parent'?: (_zetasql_ASTTableExpressionProto | null);
  'join'?: (_zetasql_ASTJoinProto | null);
  'sampleClause'?: (_zetasql_ASTSampleClauseProto | null);
}

export interface ASTParenthesizedJoinProto__Output {
  'parent': (_zetasql_ASTTableExpressionProto__Output | null);
  'join': (_zetasql_ASTJoinProto__Output | null);
  'sampleClause': (_zetasql_ASTSampleClauseProto__Output | null);
}
