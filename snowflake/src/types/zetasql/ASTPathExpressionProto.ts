// Original file: src/zetasql-snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTGeneralizedPathExpressionProto as _zetasql_ASTGeneralizedPathExpressionProto, ASTGeneralizedPathExpressionProto__Output as _zetasql_ASTGeneralizedPathExpressionProto__Output } from '../zetasql/ASTGeneralizedPathExpressionProto';
import type { ASTIdentifierProto as _zetasql_ASTIdentifierProto, ASTIdentifierProto__Output as _zetasql_ASTIdentifierProto__Output } from '../zetasql/ASTIdentifierProto';

export interface ASTPathExpressionProto {
  'parent'?: (_zetasql_ASTGeneralizedPathExpressionProto | null);
  'names'?: (_zetasql_ASTIdentifierProto)[];
}

export interface ASTPathExpressionProto__Output {
  'parent': (_zetasql_ASTGeneralizedPathExpressionProto__Output | null);
  'names': (_zetasql_ASTIdentifierProto__Output)[];
}
