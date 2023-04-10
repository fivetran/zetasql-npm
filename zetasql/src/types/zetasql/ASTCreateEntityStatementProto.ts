// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTCreateStatementProto as _zetasql_ASTCreateStatementProto, ASTCreateStatementProto__Output as _zetasql_ASTCreateStatementProto__Output } from '../zetasql/ASTCreateStatementProto';
import type { ASTIdentifierProto as _zetasql_ASTIdentifierProto, ASTIdentifierProto__Output as _zetasql_ASTIdentifierProto__Output } from '../zetasql/ASTIdentifierProto';
import type { ASTPathExpressionProto as _zetasql_ASTPathExpressionProto, ASTPathExpressionProto__Output as _zetasql_ASTPathExpressionProto__Output } from '../zetasql/ASTPathExpressionProto';
import type { ASTOptionsListProto as _zetasql_ASTOptionsListProto, ASTOptionsListProto__Output as _zetasql_ASTOptionsListProto__Output } from '../zetasql/ASTOptionsListProto';
import type { ASTJSONLiteralProto as _zetasql_ASTJSONLiteralProto, ASTJSONLiteralProto__Output as _zetasql_ASTJSONLiteralProto__Output } from '../zetasql/ASTJSONLiteralProto';
import type { ASTStringLiteralProto as _zetasql_ASTStringLiteralProto, ASTStringLiteralProto__Output as _zetasql_ASTStringLiteralProto__Output } from '../zetasql/ASTStringLiteralProto';

export interface ASTCreateEntityStatementProto {
  'parent'?: (_zetasql_ASTCreateStatementProto | null);
  'type'?: (_zetasql_ASTIdentifierProto | null);
  'name'?: (_zetasql_ASTPathExpressionProto | null);
  'optionsList'?: (_zetasql_ASTOptionsListProto | null);
  'jsonBody'?: (_zetasql_ASTJSONLiteralProto | null);
  'textBody'?: (_zetasql_ASTStringLiteralProto | null);
}

export interface ASTCreateEntityStatementProto__Output {
  'parent': (_zetasql_ASTCreateStatementProto__Output | null);
  'type': (_zetasql_ASTIdentifierProto__Output | null);
  'name': (_zetasql_ASTPathExpressionProto__Output | null);
  'optionsList': (_zetasql_ASTOptionsListProto__Output | null);
  'jsonBody': (_zetasql_ASTJSONLiteralProto__Output | null);
  'textBody': (_zetasql_ASTStringLiteralProto__Output | null);
}
