// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTTableExpressionProto as _zetasql_ASTTableExpressionProto, ASTTableExpressionProto__Output as _zetasql_ASTTableExpressionProto__Output } from '../zetasql/ASTTableExpressionProto';
import type { AnyASTTableExpressionProto as _zetasql_AnyASTTableExpressionProto, AnyASTTableExpressionProto__Output as _zetasql_AnyASTTableExpressionProto__Output } from '../zetasql/AnyASTTableExpressionProto';
import type { ASTHintProto as _zetasql_ASTHintProto, ASTHintProto__Output as _zetasql_ASTHintProto__Output } from '../zetasql/ASTHintProto';
import type { ASTOnClauseProto as _zetasql_ASTOnClauseProto, ASTOnClauseProto__Output as _zetasql_ASTOnClauseProto__Output } from '../zetasql/ASTOnClauseProto';
import type { ASTUsingClauseProto as _zetasql_ASTUsingClauseProto, ASTUsingClauseProto__Output as _zetasql_ASTUsingClauseProto__Output } from '../zetasql/ASTUsingClauseProto';
import type { ASTOnOrUsingClauseListProto as _zetasql_ASTOnOrUsingClauseListProto, ASTOnOrUsingClauseListProto__Output as _zetasql_ASTOnOrUsingClauseListProto__Output } from '../zetasql/ASTOnOrUsingClauseListProto';
import type { _zetasql_ASTJoinEnums_JoinType } from '../zetasql/ASTJoinEnums';
import type { _zetasql_ASTJoinEnums_JoinHint } from '../zetasql/ASTJoinEnums';
import type { ASTLocationProto as _zetasql_ASTLocationProto, ASTLocationProto__Output as _zetasql_ASTLocationProto__Output } from '../zetasql/ASTLocationProto';
import type { Long } from '@grpc/proto-loader';

export interface ASTJoinProto {
  'parent'?: (_zetasql_ASTTableExpressionProto | null);
  'lhs'?: (_zetasql_AnyASTTableExpressionProto | null);
  'hint'?: (_zetasql_ASTHintProto | null);
  'rhs'?: (_zetasql_AnyASTTableExpressionProto | null);
  'onClause'?: (_zetasql_ASTOnClauseProto | null);
  'usingClause'?: (_zetasql_ASTUsingClauseProto | null);
  'clauseList'?: (_zetasql_ASTOnOrUsingClauseListProto | null);
  'joinType'?: (_zetasql_ASTJoinEnums_JoinType | keyof typeof _zetasql_ASTJoinEnums_JoinType);
  'joinHint'?: (_zetasql_ASTJoinEnums_JoinHint | keyof typeof _zetasql_ASTJoinEnums_JoinHint);
  'natural'?: (boolean);
  'unmatchedJoinCount'?: (number | string | Long);
  'transformationNeeded'?: (boolean);
  'containsCommaJoin'?: (boolean);
  'joinLocation'?: (_zetasql_ASTLocationProto | null);
}

export interface ASTJoinProto__Output {
  'parent': (_zetasql_ASTTableExpressionProto__Output | null);
  'lhs': (_zetasql_AnyASTTableExpressionProto__Output | null);
  'hint': (_zetasql_ASTHintProto__Output | null);
  'rhs': (_zetasql_AnyASTTableExpressionProto__Output | null);
  'onClause': (_zetasql_ASTOnClauseProto__Output | null);
  'usingClause': (_zetasql_ASTUsingClauseProto__Output | null);
  'clauseList': (_zetasql_ASTOnOrUsingClauseListProto__Output | null);
  'joinType': (_zetasql_ASTJoinEnums_JoinType);
  'joinHint': (_zetasql_ASTJoinEnums_JoinHint);
  'natural': (boolean);
  'unmatchedJoinCount': (Long);
  'transformationNeeded': (boolean);
  'containsCommaJoin': (boolean);
  'joinLocation': (_zetasql_ASTLocationProto__Output | null);
}
