// Original file: src/snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTPathExpressionProto as _zetasql_ASTPathExpressionProto, ASTPathExpressionProto__Output as _zetasql_ASTPathExpressionProto__Output } from '../zetasql/ASTPathExpressionProto';
import type { ASTArrayElementProto as _zetasql_ASTArrayElementProto, ASTArrayElementProto__Output as _zetasql_ASTArrayElementProto__Output } from '../zetasql/ASTArrayElementProto';
import type { ASTDotGeneralizedFieldProto as _zetasql_ASTDotGeneralizedFieldProto, ASTDotGeneralizedFieldProto__Output as _zetasql_ASTDotGeneralizedFieldProto__Output } from '../zetasql/ASTDotGeneralizedFieldProto';
import type { ASTDotIdentifierProto as _zetasql_ASTDotIdentifierProto, ASTDotIdentifierProto__Output as _zetasql_ASTDotIdentifierProto__Output } from '../zetasql/ASTDotIdentifierProto';

export interface AnyASTGeneralizedPathExpressionProto {
  'astPathExpressionNode'?: (_zetasql_ASTPathExpressionProto | null);
  'astArrayElementNode'?: (_zetasql_ASTArrayElementProto | null);
  'astDotGeneralizedFieldNode'?: (_zetasql_ASTDotGeneralizedFieldProto | null);
  'astDotIdentifierNode'?: (_zetasql_ASTDotIdentifierProto | null);
  'node'?: "astPathExpressionNode"|"astArrayElementNode"|"astDotGeneralizedFieldNode"|"astDotIdentifierNode";
}

export interface AnyASTGeneralizedPathExpressionProto__Output {
  'astPathExpressionNode'?: (_zetasql_ASTPathExpressionProto__Output | null);
  'astArrayElementNode'?: (_zetasql_ASTArrayElementProto__Output | null);
  'astDotGeneralizedFieldNode'?: (_zetasql_ASTDotGeneralizedFieldProto__Output | null);
  'astDotIdentifierNode'?: (_zetasql_ASTDotIdentifierProto__Output | null);
  'node': "astPathExpressionNode"|"astArrayElementNode"|"astDotGeneralizedFieldNode"|"astDotIdentifierNode";
}
