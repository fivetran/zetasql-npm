// Original file: src/snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTStatementProto as _zetasql_ASTStatementProto, ASTStatementProto__Output as _zetasql_ASTStatementProto__Output } from '../zetasql/ASTStatementProto';
import type { ASTIdentifierProto as _zetasql_ASTIdentifierProto, ASTIdentifierProto__Output as _zetasql_ASTIdentifierProto__Output } from '../zetasql/ASTIdentifierProto';
import type { ASTPathExpressionProto as _zetasql_ASTPathExpressionProto, ASTPathExpressionProto__Output as _zetasql_ASTPathExpressionProto__Output } from '../zetasql/ASTPathExpressionProto';

export interface ASTDescribeStatementProto {
  'parent'?: (_zetasql_ASTStatementProto | null);
  'optionalIdentifier'?: (_zetasql_ASTIdentifierProto | null);
  'name'?: (_zetasql_ASTPathExpressionProto | null);
  'optionalFromName'?: (_zetasql_ASTPathExpressionProto | null);
}

export interface ASTDescribeStatementProto__Output {
  'parent': (_zetasql_ASTStatementProto__Output | null);
  'optionalIdentifier': (_zetasql_ASTIdentifierProto__Output | null);
  'name': (_zetasql_ASTPathExpressionProto__Output | null);
  'optionalFromName': (_zetasql_ASTPathExpressionProto__Output | null);
}
