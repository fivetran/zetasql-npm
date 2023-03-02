// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTQueryExpressionProto as _zetasql_ASTQueryExpressionProto, ASTQueryExpressionProto__Output as _zetasql_ASTQueryExpressionProto__Output } from '../zetasql/ASTQueryExpressionProto';
import type { ASTWithClauseProto as _zetasql_ASTWithClauseProto, ASTWithClauseProto__Output as _zetasql_ASTWithClauseProto__Output } from '../zetasql/ASTWithClauseProto';
import type { AnyASTQueryExpressionProto as _zetasql_AnyASTQueryExpressionProto, AnyASTQueryExpressionProto__Output as _zetasql_AnyASTQueryExpressionProto__Output } from '../zetasql/AnyASTQueryExpressionProto';
import type { ASTOrderByProto as _zetasql_ASTOrderByProto, ASTOrderByProto__Output as _zetasql_ASTOrderByProto__Output } from '../zetasql/ASTOrderByProto';
import type { ASTLimitOffsetProto as _zetasql_ASTLimitOffsetProto, ASTLimitOffsetProto__Output as _zetasql_ASTLimitOffsetProto__Output } from '../zetasql/ASTLimitOffsetProto';
import type { ASTOffsetFetchProto as _zetasql_ASTOffsetFetchProto, ASTOffsetFetchProto__Output as _zetasql_ASTOffsetFetchProto__Output } from '../zetasql/ASTOffsetFetchProto';

export interface ASTQueryProto {
  'parent'?: (_zetasql_ASTQueryExpressionProto | null);
  'withClause'?: (_zetasql_ASTWithClauseProto | null);
  'queryExpr'?: (_zetasql_AnyASTQueryExpressionProto | null);
  'orderBy'?: (_zetasql_ASTOrderByProto | null);
  'limitOffset'?: (_zetasql_ASTLimitOffsetProto | null);
  'offsetFetch'?: (_zetasql_ASTOffsetFetchProto | null);
  'isNested'?: (boolean);
  'isPivotInput'?: (boolean);
}

export interface ASTQueryProto__Output {
  'parent': (_zetasql_ASTQueryExpressionProto__Output | null);
  'withClause': (_zetasql_ASTWithClauseProto__Output | null);
  'queryExpr': (_zetasql_AnyASTQueryExpressionProto__Output | null);
  'orderBy': (_zetasql_ASTOrderByProto__Output | null);
  'limitOffset': (_zetasql_ASTLimitOffsetProto__Output | null);
  'offsetFetch': (_zetasql_ASTOffsetFetchProto__Output | null);
  'isNested': (boolean);
  'isPivotInput': (boolean);
}
