// Original file: src/snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTDdlStatementProto as _zetasql_ASTDdlStatementProto, ASTDdlStatementProto__Output as _zetasql_ASTDdlStatementProto__Output } from '../zetasql/ASTDdlStatementProto';
import type { ASTIdentifierProto as _zetasql_ASTIdentifierProto, ASTIdentifierProto__Output as _zetasql_ASTIdentifierProto__Output } from '../zetasql/ASTIdentifierProto';
import type { ASTPathExpressionProto as _zetasql_ASTPathExpressionProto, ASTPathExpressionProto__Output as _zetasql_ASTPathExpressionProto__Output } from '../zetasql/ASTPathExpressionProto';

export interface ASTDropEntityStatementProto {
  'parent'?: (_zetasql_ASTDdlStatementProto | null);
  'entityType'?: (_zetasql_ASTIdentifierProto | null);
  'name'?: (_zetasql_ASTPathExpressionProto | null);
  'isIfExists'?: (boolean);
}

export interface ASTDropEntityStatementProto__Output {
  'parent': (_zetasql_ASTDdlStatementProto__Output | null);
  'entityType': (_zetasql_ASTIdentifierProto__Output | null);
  'name': (_zetasql_ASTPathExpressionProto__Output | null);
  'isIfExists': (boolean);
}
