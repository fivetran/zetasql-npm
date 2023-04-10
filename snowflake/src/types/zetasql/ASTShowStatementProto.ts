// Original file: src/snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTStatementProto as _zetasql_ASTStatementProto, ASTStatementProto__Output as _zetasql_ASTStatementProto__Output } from '../zetasql/ASTStatementProto';
import type { ASTIdentifierProto as _zetasql_ASTIdentifierProto, ASTIdentifierProto__Output as _zetasql_ASTIdentifierProto__Output } from '../zetasql/ASTIdentifierProto';
import type { ASTPathExpressionProto as _zetasql_ASTPathExpressionProto, ASTPathExpressionProto__Output as _zetasql_ASTPathExpressionProto__Output } from '../zetasql/ASTPathExpressionProto';
import type { ASTStringLiteralProto as _zetasql_ASTStringLiteralProto, ASTStringLiteralProto__Output as _zetasql_ASTStringLiteralProto__Output } from '../zetasql/ASTStringLiteralProto';

export interface ASTShowStatementProto {
  'parent'?: (_zetasql_ASTStatementProto | null);
  'identifier'?: (_zetasql_ASTIdentifierProto | null);
  'optionalName'?: (_zetasql_ASTPathExpressionProto | null);
  'optionalLikeString'?: (_zetasql_ASTStringLiteralProto | null);
}

export interface ASTShowStatementProto__Output {
  'parent': (_zetasql_ASTStatementProto__Output | null);
  'identifier': (_zetasql_ASTIdentifierProto__Output | null);
  'optionalName': (_zetasql_ASTPathExpressionProto__Output | null);
  'optionalLikeString': (_zetasql_ASTStringLiteralProto__Output | null);
}
