// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTGeneralizedPathExpressionProto as _zetasql_ASTGeneralizedPathExpressionProto, ASTGeneralizedPathExpressionProto__Output as _zetasql_ASTGeneralizedPathExpressionProto__Output } from '../zetasql/ASTGeneralizedPathExpressionProto';
import type { AnyASTExpressionProto as _zetasql_AnyASTExpressionProto, AnyASTExpressionProto__Output as _zetasql_AnyASTExpressionProto__Output } from '../zetasql/AnyASTExpressionProto';
import type { ASTLocationProto as _zetasql_ASTLocationProto, ASTLocationProto__Output as _zetasql_ASTLocationProto__Output } from '../zetasql/ASTLocationProto';

export interface ASTArrayElementProto {
  'parent'?: (_zetasql_ASTGeneralizedPathExpressionProto | null);
  'array'?: (_zetasql_AnyASTExpressionProto | null);
  'position'?: (_zetasql_AnyASTExpressionProto | null);
  'openBracketLocation'?: (_zetasql_ASTLocationProto | null);
}

export interface ASTArrayElementProto__Output {
  'parent': (_zetasql_ASTGeneralizedPathExpressionProto__Output | null);
  'array': (_zetasql_AnyASTExpressionProto__Output | null);
  'position': (_zetasql_AnyASTExpressionProto__Output | null);
  'openBracketLocation': (_zetasql_ASTLocationProto__Output | null);
}
