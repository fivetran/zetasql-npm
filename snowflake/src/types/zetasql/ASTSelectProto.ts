// Original file: src/snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTQueryExpressionProto as _zetasql_ASTQueryExpressionProto, ASTQueryExpressionProto__Output as _zetasql_ASTQueryExpressionProto__Output } from '../zetasql/ASTQueryExpressionProto';
import type { ASTHintProto as _zetasql_ASTHintProto, ASTHintProto__Output as _zetasql_ASTHintProto__Output } from '../zetasql/ASTHintProto';
import type { ASTTopProto as _zetasql_ASTTopProto, ASTTopProto__Output as _zetasql_ASTTopProto__Output } from '../zetasql/ASTTopProto';
import type { ASTSelectWithProto as _zetasql_ASTSelectWithProto, ASTSelectWithProto__Output as _zetasql_ASTSelectWithProto__Output } from '../zetasql/ASTSelectWithProto';
import type { ASTOptionsListProto as _zetasql_ASTOptionsListProto, ASTOptionsListProto__Output as _zetasql_ASTOptionsListProto__Output } from '../zetasql/ASTOptionsListProto';
import type { ASTSelectAsProto as _zetasql_ASTSelectAsProto, ASTSelectAsProto__Output as _zetasql_ASTSelectAsProto__Output } from '../zetasql/ASTSelectAsProto';
import type { ASTSelectListProto as _zetasql_ASTSelectListProto, ASTSelectListProto__Output as _zetasql_ASTSelectListProto__Output } from '../zetasql/ASTSelectListProto';
import type { ASTFromClauseProto as _zetasql_ASTFromClauseProto, ASTFromClauseProto__Output as _zetasql_ASTFromClauseProto__Output } from '../zetasql/ASTFromClauseProto';
import type { ASTWhereClauseProto as _zetasql_ASTWhereClauseProto, ASTWhereClauseProto__Output as _zetasql_ASTWhereClauseProto__Output } from '../zetasql/ASTWhereClauseProto';
import type { ASTGroupByProto as _zetasql_ASTGroupByProto, ASTGroupByProto__Output as _zetasql_ASTGroupByProto__Output } from '../zetasql/ASTGroupByProto';
import type { ASTHavingProto as _zetasql_ASTHavingProto, ASTHavingProto__Output as _zetasql_ASTHavingProto__Output } from '../zetasql/ASTHavingProto';
import type { ASTQualifyProto as _zetasql_ASTQualifyProto, ASTQualifyProto__Output as _zetasql_ASTQualifyProto__Output } from '../zetasql/ASTQualifyProto';
import type { ASTWindowClauseProto as _zetasql_ASTWindowClauseProto, ASTWindowClauseProto__Output as _zetasql_ASTWindowClauseProto__Output } from '../zetasql/ASTWindowClauseProto';

export interface ASTSelectProto {
  'parent'?: (_zetasql_ASTQueryExpressionProto | null);
  'hint'?: (_zetasql_ASTHintProto | null);
  'top'?: (_zetasql_ASTTopProto | null);
  'selectWith'?: (_zetasql_ASTSelectWithProto | null);
  'anonymizationOptions'?: (_zetasql_ASTOptionsListProto | null);
  'distinct'?: (boolean);
  'selectAs'?: (_zetasql_ASTSelectAsProto | null);
  'selectList'?: (_zetasql_ASTSelectListProto | null);
  'fromClause'?: (_zetasql_ASTFromClauseProto | null);
  'whereClause'?: (_zetasql_ASTWhereClauseProto | null);
  'groupBy'?: (_zetasql_ASTGroupByProto | null);
  'having'?: (_zetasql_ASTHavingProto | null);
  'qualify'?: (_zetasql_ASTQualifyProto | null);
  'windowClause'?: (_zetasql_ASTWindowClauseProto | null);
}

export interface ASTSelectProto__Output {
  'parent': (_zetasql_ASTQueryExpressionProto__Output | null);
  'hint': (_zetasql_ASTHintProto__Output | null);
  'top': (_zetasql_ASTTopProto__Output | null);
  'selectWith': (_zetasql_ASTSelectWithProto__Output | null);
  'anonymizationOptions': (_zetasql_ASTOptionsListProto__Output | null);
  'distinct': (boolean);
  'selectAs': (_zetasql_ASTSelectAsProto__Output | null);
  'selectList': (_zetasql_ASTSelectListProto__Output | null);
  'fromClause': (_zetasql_ASTFromClauseProto__Output | null);
  'whereClause': (_zetasql_ASTWhereClauseProto__Output | null);
  'groupBy': (_zetasql_ASTGroupByProto__Output | null);
  'having': (_zetasql_ASTHavingProto__Output | null);
  'qualify': (_zetasql_ASTQualifyProto__Output | null);
  'windowClause': (_zetasql_ASTWindowClauseProto__Output | null);
}
