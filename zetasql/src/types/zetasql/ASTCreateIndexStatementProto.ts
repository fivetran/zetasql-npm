// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTCreateStatementProto as _zetasql_ASTCreateStatementProto, ASTCreateStatementProto__Output as _zetasql_ASTCreateStatementProto__Output } from '../zetasql/ASTCreateStatementProto';
import type { ASTPathExpressionProto as _zetasql_ASTPathExpressionProto, ASTPathExpressionProto__Output as _zetasql_ASTPathExpressionProto__Output } from '../zetasql/ASTPathExpressionProto';
import type { ASTAliasProto as _zetasql_ASTAliasProto, ASTAliasProto__Output as _zetasql_ASTAliasProto__Output } from '../zetasql/ASTAliasProto';
import type { ASTIndexUnnestExpressionListProto as _zetasql_ASTIndexUnnestExpressionListProto, ASTIndexUnnestExpressionListProto__Output as _zetasql_ASTIndexUnnestExpressionListProto__Output } from '../zetasql/ASTIndexUnnestExpressionListProto';
import type { ASTIndexItemListProto as _zetasql_ASTIndexItemListProto, ASTIndexItemListProto__Output as _zetasql_ASTIndexItemListProto__Output } from '../zetasql/ASTIndexItemListProto';
import type { ASTIndexStoringExpressionListProto as _zetasql_ASTIndexStoringExpressionListProto, ASTIndexStoringExpressionListProto__Output as _zetasql_ASTIndexStoringExpressionListProto__Output } from '../zetasql/ASTIndexStoringExpressionListProto';
import type { ASTOptionsListProto as _zetasql_ASTOptionsListProto, ASTOptionsListProto__Output as _zetasql_ASTOptionsListProto__Output } from '../zetasql/ASTOptionsListProto';
import type { ASTSpannerInterleaveClauseProto as _zetasql_ASTSpannerInterleaveClauseProto, ASTSpannerInterleaveClauseProto__Output as _zetasql_ASTSpannerInterleaveClauseProto__Output } from '../zetasql/ASTSpannerInterleaveClauseProto';

export interface ASTCreateIndexStatementProto {
  'parent'?: (_zetasql_ASTCreateStatementProto | null);
  'name'?: (_zetasql_ASTPathExpressionProto | null);
  'tableName'?: (_zetasql_ASTPathExpressionProto | null);
  'optionalTableAlias'?: (_zetasql_ASTAliasProto | null);
  'optionalIndexUnnestExpressionList'?: (_zetasql_ASTIndexUnnestExpressionListProto | null);
  'indexItemList'?: (_zetasql_ASTIndexItemListProto | null);
  'optionalIndexStoringExpressions'?: (_zetasql_ASTIndexStoringExpressionListProto | null);
  'optionsList'?: (_zetasql_ASTOptionsListProto | null);
  'isUnique'?: (boolean);
  'isSearch'?: (boolean);
  'spannerInterleaveClause'?: (_zetasql_ASTSpannerInterleaveClauseProto | null);
  'spannerIsNullFiltered'?: (boolean);
  'isVector'?: (boolean);
}

export interface ASTCreateIndexStatementProto__Output {
  'parent': (_zetasql_ASTCreateStatementProto__Output | null);
  'name': (_zetasql_ASTPathExpressionProto__Output | null);
  'tableName': (_zetasql_ASTPathExpressionProto__Output | null);
  'optionalTableAlias': (_zetasql_ASTAliasProto__Output | null);
  'optionalIndexUnnestExpressionList': (_zetasql_ASTIndexUnnestExpressionListProto__Output | null);
  'indexItemList': (_zetasql_ASTIndexItemListProto__Output | null);
  'optionalIndexStoringExpressions': (_zetasql_ASTIndexStoringExpressionListProto__Output | null);
  'optionsList': (_zetasql_ASTOptionsListProto__Output | null);
  'isUnique': (boolean);
  'isSearch': (boolean);
  'spannerInterleaveClause': (_zetasql_ASTSpannerInterleaveClauseProto__Output | null);
  'spannerIsNullFiltered': (boolean);
  'isVector': (boolean);
}
