// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTUnnestExpressionProto as _zetasql_ASTUnnestExpressionProto, ASTUnnestExpressionProto__Output as _zetasql_ASTUnnestExpressionProto__Output } from '../zetasql/ASTUnnestExpressionProto';
import type { ASTAliasProto as _zetasql_ASTAliasProto, ASTAliasProto__Output as _zetasql_ASTAliasProto__Output } from '../zetasql/ASTAliasProto';
import type { ASTWithOffsetProto as _zetasql_ASTWithOffsetProto, ASTWithOffsetProto__Output as _zetasql_ASTWithOffsetProto__Output } from '../zetasql/ASTWithOffsetProto';

export interface ASTUnnestExpressionWithOptAliasAndOffsetProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'unnestExpression'?: (_zetasql_ASTUnnestExpressionProto | null);
  'optionalAlias'?: (_zetasql_ASTAliasProto | null);
  'optionalWithOffset'?: (_zetasql_ASTWithOffsetProto | null);
}

export interface ASTUnnestExpressionWithOptAliasAndOffsetProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'unnestExpression': (_zetasql_ASTUnnestExpressionProto__Output | null);
  'optionalAlias': (_zetasql_ASTAliasProto__Output | null);
  'optionalWithOffset': (_zetasql_ASTWithOffsetProto__Output | null);
}
