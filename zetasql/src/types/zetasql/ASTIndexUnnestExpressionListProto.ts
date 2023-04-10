// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTUnnestExpressionWithOptAliasAndOffsetProto as _zetasql_ASTUnnestExpressionWithOptAliasAndOffsetProto, ASTUnnestExpressionWithOptAliasAndOffsetProto__Output as _zetasql_ASTUnnestExpressionWithOptAliasAndOffsetProto__Output } from '../zetasql/ASTUnnestExpressionWithOptAliasAndOffsetProto';

export interface ASTIndexUnnestExpressionListProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'unnestExpressions'?: (_zetasql_ASTUnnestExpressionWithOptAliasAndOffsetProto)[];
}

export interface ASTIndexUnnestExpressionListProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'unnestExpressions': (_zetasql_ASTUnnestExpressionWithOptAliasAndOffsetProto__Output)[];
}
