// Original file: src/snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTStatementProto as _zetasql_ASTStatementProto, ASTStatementProto__Output as _zetasql_ASTStatementProto__Output } from '../zetasql/ASTStatementProto';
import type { AnyASTGeneralizedPathExpressionProto as _zetasql_AnyASTGeneralizedPathExpressionProto, AnyASTGeneralizedPathExpressionProto__Output as _zetasql_AnyASTGeneralizedPathExpressionProto__Output } from '../zetasql/AnyASTGeneralizedPathExpressionProto';
import type { ASTAliasProto as _zetasql_ASTAliasProto, ASTAliasProto__Output as _zetasql_ASTAliasProto__Output } from '../zetasql/ASTAliasProto';
import type { ASTWithOffsetProto as _zetasql_ASTWithOffsetProto, ASTWithOffsetProto__Output as _zetasql_ASTWithOffsetProto__Output } from '../zetasql/ASTWithOffsetProto';
import type { ASTUpdateItemListProto as _zetasql_ASTUpdateItemListProto, ASTUpdateItemListProto__Output as _zetasql_ASTUpdateItemListProto__Output } from '../zetasql/ASTUpdateItemListProto';
import type { ASTFromClauseProto as _zetasql_ASTFromClauseProto, ASTFromClauseProto__Output as _zetasql_ASTFromClauseProto__Output } from '../zetasql/ASTFromClauseProto';
import type { AnyASTExpressionProto as _zetasql_AnyASTExpressionProto, AnyASTExpressionProto__Output as _zetasql_AnyASTExpressionProto__Output } from '../zetasql/AnyASTExpressionProto';
import type { ASTAssertRowsModifiedProto as _zetasql_ASTAssertRowsModifiedProto, ASTAssertRowsModifiedProto__Output as _zetasql_ASTAssertRowsModifiedProto__Output } from '../zetasql/ASTAssertRowsModifiedProto';
import type { ASTReturningClauseProto as _zetasql_ASTReturningClauseProto, ASTReturningClauseProto__Output as _zetasql_ASTReturningClauseProto__Output } from '../zetasql/ASTReturningClauseProto';
import type { ASTHintProto as _zetasql_ASTHintProto, ASTHintProto__Output as _zetasql_ASTHintProto__Output } from '../zetasql/ASTHintProto';

export interface ASTUpdateStatementProto {
  'parent'?: (_zetasql_ASTStatementProto | null);
  'targetPath'?: (_zetasql_AnyASTGeneralizedPathExpressionProto | null);
  'alias'?: (_zetasql_ASTAliasProto | null);
  'offset'?: (_zetasql_ASTWithOffsetProto | null);
  'updateItemList'?: (_zetasql_ASTUpdateItemListProto | null);
  'fromClause'?: (_zetasql_ASTFromClauseProto | null);
  'where'?: (_zetasql_AnyASTExpressionProto | null);
  'assertRowsModified'?: (_zetasql_ASTAssertRowsModifiedProto | null);
  'returning'?: (_zetasql_ASTReturningClauseProto | null);
  'hint'?: (_zetasql_ASTHintProto | null);
}

export interface ASTUpdateStatementProto__Output {
  'parent': (_zetasql_ASTStatementProto__Output | null);
  'targetPath': (_zetasql_AnyASTGeneralizedPathExpressionProto__Output | null);
  'alias': (_zetasql_ASTAliasProto__Output | null);
  'offset': (_zetasql_ASTWithOffsetProto__Output | null);
  'updateItemList': (_zetasql_ASTUpdateItemListProto__Output | null);
  'fromClause': (_zetasql_ASTFromClauseProto__Output | null);
  'where': (_zetasql_AnyASTExpressionProto__Output | null);
  'assertRowsModified': (_zetasql_ASTAssertRowsModifiedProto__Output | null);
  'returning': (_zetasql_ASTReturningClauseProto__Output | null);
  'hint': (_zetasql_ASTHintProto__Output | null);
}
