// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTExpressionProto as _zetasql_ASTExpressionProto, ASTExpressionProto__Output as _zetasql_ASTExpressionProto__Output } from '../zetasql/ASTExpressionProto';
import type { ASTSelectListProto as _zetasql_ASTSelectListProto, ASTSelectListProto__Output as _zetasql_ASTSelectListProto__Output } from '../zetasql/ASTSelectListProto';
import type { AnyASTExpressionProto as _zetasql_AnyASTExpressionProto, AnyASTExpressionProto__Output as _zetasql_AnyASTExpressionProto__Output } from '../zetasql/AnyASTExpressionProto';

export interface ASTWithExpressionProto {
  'parent'?: (_zetasql_ASTExpressionProto | null);
  'variables'?: (_zetasql_ASTSelectListProto | null);
  'expression'?: (_zetasql_AnyASTExpressionProto | null);
}

export interface ASTWithExpressionProto__Output {
  'parent': (_zetasql_ASTExpressionProto__Output | null);
  'variables': (_zetasql_ASTSelectListProto__Output | null);
  'expression': (_zetasql_AnyASTExpressionProto__Output | null);
}
