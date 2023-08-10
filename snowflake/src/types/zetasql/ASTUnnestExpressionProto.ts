// Original file: src/snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTExpressionWithOptAliasProto as _zetasql_ASTExpressionWithOptAliasProto, ASTExpressionWithOptAliasProto__Output as _zetasql_ASTExpressionWithOptAliasProto__Output } from '../zetasql/ASTExpressionWithOptAliasProto';
import type { ASTNamedArgumentProto as _zetasql_ASTNamedArgumentProto, ASTNamedArgumentProto__Output as _zetasql_ASTNamedArgumentProto__Output } from '../zetasql/ASTNamedArgumentProto';

export interface ASTUnnestExpressionProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'expressions'?: (_zetasql_ASTExpressionWithOptAliasProto)[];
  'arrayZipMode'?: (_zetasql_ASTNamedArgumentProto | null);
}

export interface ASTUnnestExpressionProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'expressions': (_zetasql_ASTExpressionWithOptAliasProto__Output)[];
  'arrayZipMode': (_zetasql_ASTNamedArgumentProto__Output | null);
}
