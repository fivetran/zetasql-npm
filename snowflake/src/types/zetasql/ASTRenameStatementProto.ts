// Original file: src/zetasql-snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTStatementProto as _zetasql_ASTStatementProto, ASTStatementProto__Output as _zetasql_ASTStatementProto__Output } from '../zetasql/ASTStatementProto';
import type { ASTIdentifierProto as _zetasql_ASTIdentifierProto, ASTIdentifierProto__Output as _zetasql_ASTIdentifierProto__Output } from '../zetasql/ASTIdentifierProto';
import type { ASTPathExpressionProto as _zetasql_ASTPathExpressionProto, ASTPathExpressionProto__Output as _zetasql_ASTPathExpressionProto__Output } from '../zetasql/ASTPathExpressionProto';

export interface ASTRenameStatementProto {
  'parent'?: (_zetasql_ASTStatementProto | null);
  'identifier'?: (_zetasql_ASTIdentifierProto | null);
  'oldName'?: (_zetasql_ASTPathExpressionProto | null);
  'newName'?: (_zetasql_ASTPathExpressionProto | null);
}

export interface ASTRenameStatementProto__Output {
  'parent': (_zetasql_ASTStatementProto__Output | null);
  'identifier': (_zetasql_ASTIdentifierProto__Output | null);
  'oldName': (_zetasql_ASTPathExpressionProto__Output | null);
  'newName': (_zetasql_ASTPathExpressionProto__Output | null);
}
