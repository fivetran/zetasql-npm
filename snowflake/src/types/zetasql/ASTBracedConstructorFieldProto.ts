// Original file: src/zetasql-snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTIdentifierProto as _zetasql_ASTIdentifierProto, ASTIdentifierProto__Output as _zetasql_ASTIdentifierProto__Output } from '../zetasql/ASTIdentifierProto';
import type { ASTPathExpressionProto as _zetasql_ASTPathExpressionProto, ASTPathExpressionProto__Output as _zetasql_ASTPathExpressionProto__Output } from '../zetasql/ASTPathExpressionProto';
import type { ASTBracedConstructorFieldValueProto as _zetasql_ASTBracedConstructorFieldValueProto, ASTBracedConstructorFieldValueProto__Output as _zetasql_ASTBracedConstructorFieldValueProto__Output } from '../zetasql/ASTBracedConstructorFieldValueProto';

export interface ASTBracedConstructorFieldProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'identifier'?: (_zetasql_ASTIdentifierProto | null);
  'parenthesizedPath'?: (_zetasql_ASTPathExpressionProto | null);
  'value'?: (_zetasql_ASTBracedConstructorFieldValueProto | null);
}

export interface ASTBracedConstructorFieldProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'identifier': (_zetasql_ASTIdentifierProto__Output | null);
  'parenthesizedPath': (_zetasql_ASTPathExpressionProto__Output | null);
  'value': (_zetasql_ASTBracedConstructorFieldValueProto__Output | null);
}
