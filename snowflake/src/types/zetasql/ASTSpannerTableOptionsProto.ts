// Original file: src/snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTPrimaryKeyProto as _zetasql_ASTPrimaryKeyProto, ASTPrimaryKeyProto__Output as _zetasql_ASTPrimaryKeyProto__Output } from '../zetasql/ASTPrimaryKeyProto';
import type { ASTSpannerInterleaveClauseProto as _zetasql_ASTSpannerInterleaveClauseProto, ASTSpannerInterleaveClauseProto__Output as _zetasql_ASTSpannerInterleaveClauseProto__Output } from '../zetasql/ASTSpannerInterleaveClauseProto';

export interface ASTSpannerTableOptionsProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'primaryKey'?: (_zetasql_ASTPrimaryKeyProto | null);
  'interleaveClause'?: (_zetasql_ASTSpannerInterleaveClauseProto | null);
}

export interface ASTSpannerTableOptionsProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'primaryKey': (_zetasql_ASTPrimaryKeyProto__Output | null);
  'interleaveClause': (_zetasql_ASTSpannerInterleaveClauseProto__Output | null);
}
