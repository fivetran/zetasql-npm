// Original file: src/zetasql-snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTTablePathExpressionProto as _zetasql_ASTTablePathExpressionProto, ASTTablePathExpressionProto__Output as _zetasql_ASTTablePathExpressionProto__Output } from '../zetasql/ASTTablePathExpressionProto';
import type { ASTJoinProto as _zetasql_ASTJoinProto, ASTJoinProto__Output as _zetasql_ASTJoinProto__Output } from '../zetasql/ASTJoinProto';
import type { ASTParenthesizedJoinProto as _zetasql_ASTParenthesizedJoinProto, ASTParenthesizedJoinProto__Output as _zetasql_ASTParenthesizedJoinProto__Output } from '../zetasql/ASTParenthesizedJoinProto';
import type { ASTTableSubqueryProto as _zetasql_ASTTableSubqueryProto, ASTTableSubqueryProto__Output as _zetasql_ASTTableSubqueryProto__Output } from '../zetasql/ASTTableSubqueryProto';
import type { ASTTVFProto as _zetasql_ASTTVFProto, ASTTVFProto__Output as _zetasql_ASTTVFProto__Output } from '../zetasql/ASTTVFProto';
import type { AnyASTTableDataSourceProto as _zetasql_AnyASTTableDataSourceProto, AnyASTTableDataSourceProto__Output as _zetasql_AnyASTTableDataSourceProto__Output } from '../zetasql/AnyASTTableDataSourceProto';

export interface AnyASTTableExpressionProto {
  'astTablePathExpressionNode'?: (_zetasql_ASTTablePathExpressionProto | null);
  'astJoinNode'?: (_zetasql_ASTJoinProto | null);
  'astParenthesizedJoinNode'?: (_zetasql_ASTParenthesizedJoinProto | null);
  'astTableSubqueryNode'?: (_zetasql_ASTTableSubqueryProto | null);
  'astTvfNode'?: (_zetasql_ASTTVFProto | null);
  'astTableDataSourceNode'?: (_zetasql_AnyASTTableDataSourceProto | null);
  'node'?: "astTablePathExpressionNode"|"astJoinNode"|"astParenthesizedJoinNode"|"astTableSubqueryNode"|"astTvfNode"|"astTableDataSourceNode";
}

export interface AnyASTTableExpressionProto__Output {
  'astTablePathExpressionNode'?: (_zetasql_ASTTablePathExpressionProto__Output | null);
  'astJoinNode'?: (_zetasql_ASTJoinProto__Output | null);
  'astParenthesizedJoinNode'?: (_zetasql_ASTParenthesizedJoinProto__Output | null);
  'astTableSubqueryNode'?: (_zetasql_ASTTableSubqueryProto__Output | null);
  'astTvfNode'?: (_zetasql_ASTTVFProto__Output | null);
  'astTableDataSourceNode'?: (_zetasql_AnyASTTableDataSourceProto__Output | null);
  'node': "astTablePathExpressionNode"|"astJoinNode"|"astParenthesizedJoinNode"|"astTableSubqueryNode"|"astTvfNode"|"astTableDataSourceNode";
}
