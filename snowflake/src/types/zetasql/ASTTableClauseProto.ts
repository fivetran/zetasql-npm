// Original file: src/snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTPathExpressionProto as _zetasql_ASTPathExpressionProto, ASTPathExpressionProto__Output as _zetasql_ASTPathExpressionProto__Output } from '../zetasql/ASTPathExpressionProto';
import type { ASTTVFProto as _zetasql_ASTTVFProto, ASTTVFProto__Output as _zetasql_ASTTVFProto__Output } from '../zetasql/ASTTVFProto';

export interface ASTTableClauseProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'tablePath'?: (_zetasql_ASTPathExpressionProto | null);
  'tvf'?: (_zetasql_ASTTVFProto | null);
}

export interface ASTTableClauseProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'tablePath': (_zetasql_ASTPathExpressionProto__Output | null);
  'tvf': (_zetasql_ASTTVFProto__Output | null);
}
