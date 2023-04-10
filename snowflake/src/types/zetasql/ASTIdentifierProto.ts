// Original file: src/zetasql-snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTExpressionProto as _zetasql_ASTExpressionProto, ASTExpressionProto__Output as _zetasql_ASTExpressionProto__Output } from '../zetasql/ASTExpressionProto';

export interface ASTIdentifierProto {
  'parent'?: (_zetasql_ASTExpressionProto | null);
  'idString'?: (string);
}

export interface ASTIdentifierProto__Output {
  'parent': (_zetasql_ASTExpressionProto__Output | null);
  'idString': (string);
}
